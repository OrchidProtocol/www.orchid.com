import React from 'react'
import './newsletter-signup-core.scss'

class Component extends React.Component {
	constructor(props) {
		super(props)
		/*
		@Input() priv8: Boolean;
		@Input() largePadding: Boolean;
		*/


		this.state = {
			invalid: false,
			_email: "",
			invalid_email: false,
			consented: false,
			error: "",
			success: "",
			submitted: false,
			blink_box: false,
			showFull: false,
			in_progress: false,
		}
		this.email_test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	}
	setEmail(val) {
		this.setState({
			_email: val,
			showFull: !!this._email,
		})
	}

	inputListener() {
		this.setState({
			invalid_email: false,
			blink_box: false
		});
	}
	checkboxListener(e) {
		this.setState({
			consented: e.target.checked,
			blink_box: false,
		});
	}

	checkIfEnter(e) {
		if (e.keyCode === 13) {
			this.submit();
		}
	}

	submit() {
		const mailchimp_url = "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?email=" + encodeURIComponent(this.email || "") + (this.priv8 ? "&priv8=true" : "");

		if (this.in_progress) return;

		let invalid = false;

		if (!this.email_test.test(this.email)) {
			this.setState({
				invalid_email: true,
			});
			invalid = true;
		} else {
			this.setState({
				invalid_email: false,
			});
		}

		if (!this.consented) {
			this.setState({
				blink_box: true,
			});
			invalid = true;
		} else {
			this.setState({
				blink_box: false,
			});
		}

		this.setState({
			invalid,
		});

		if (this.invalid) return false;

		this.in_progress = true;
		fetch(mailchimp_url)
			.then(response => response.json())
			.then(
				response => {
					if (response["status"] === "pending") {
						this.setState({
							in_progress: false,
							submitted: true,
							success: "Great! Now please check your email and confirm.",
						})
					} else if (response["detail"]) {
						this.setState({
							in_progress: false,
							error: response["detail"],
						})
					}
				}
			)
			.catch(error => {
				this.setState({
					in_progress: false,
					error: "Sorry, an error occurred.",
				})
				console.error(error);
			});
	}

	render() {
		return (
			<div className="newsletter-core">
				<div style={{ display: this.state.submitted ? 'none' : '' }}>
					<input type="email" i18n-placeholder="@@EmailAddress" placeholder="Email address" onKeyUp={this.checkIfEnter.bind(this)} className={"input-large center-block vgap-thin newsletter-signup__input" + (this.state.invalid_email ? " invalid" : "")} onChange={this.inputListener.bind(this)} onKeyDown={this.inputListener.bind(this)} />
					<div className="gap-bot-thin" style={{ display: this.state.showFull ? '' : 'none' }}>
						<label className={"gdpr-consent" + (this.state.blink_box ? ' blink_box' : '')}>
							<input type="checkbox" onChange={this.checkboxListener.bind(this)} />
							<span i18n="@@Newsletter__Consent">I consent to receiving further instructions at the email address I submitted above.</span>
						</label>
					</div>
					<button onClick={this.submit.bind(this)} className={"btn-primary btn-fixed center-block newsletter-signup__button" + (this.props.priv8 ? " btn-secondary" : " btn-primary") + (this.props.largePadding ? " section-button" : "") + (this.state.in_progress ? " loading" : "")} i18n="@@Newsletter__Subscribe">
						<span>Subscribe</span>
					</button>
				</div>
				<div style={{ display: this.state.error ? 'block' : 'none' }}>
					<p id="error" innertext={this.state.error} />
				</div>
				<div style={{ display: this.state.success ? 'block' : 'none' }}>
					<p id="success" innertext={this.state.success} />
				</div>
			</div>
		)
	}
}

export default Component
