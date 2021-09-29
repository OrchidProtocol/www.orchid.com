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

	submit(e) {
		e.preventDefault();
		const mailchimp_url = "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?email=" + encodeURIComponent(e.target.email.value || "") + (this.priv8 ? "&priv8=true" : "");

		if (this.in_progress) return;

		const tempState = {
			invalid_email: false,
			blink_box: false,
			invalid: false,
		}

		if (e.target.email.value === "" || !this.email_test.test(e.target.email.value)) {
			tempState.invalid_email = true;
			tempState.invalid = true;
		} else {
			tempState.invalid_email = false;
		}

		if (e.target.consent.value !== "on") {
			tempState.blink_box = true;
			tempState.invalid = true;
		} else {
			tempState.blink_box = false;
		}

		if (tempState.invalid) {
			this.setState(tempState);
			this.in_progress = false;
			return false;
		}

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
				<form onSubmit={this.submit.bind(this)}>
					<div style={{ display: this.state.submitted ? 'none' : '' }}>
						<input type="email" name="email" required i18n-placeholder="@@EmailAddress" placeholder="Email address" className={"input-large center-block vgap-thin newsletter-signup__input" + (this.state.invalid_email ? " invalid" : "")} />
						<div className="gap-bot-thin">
							<label className={"gdpr-consent" + (this.state.blink_box ? ' blink_box' : '')}>
								<input name="consent" required type="checkbox" />
								<span i18n="@@Newsletter__Consent">I consent to receiving further instructions at the email address I submitted above.</span>
							</label>
						</div>
						<button className={"btn-primary btn-fixed center-block newsletter-signup__button" + (this.props.priv8 ? " btn-secondary" : " btn-primary") + (this.props.largePadding ? " section-button" : "") + (this.state.in_progress ? " loading" : "")} i18n="@@Newsletter__Subscribe">
							<span>Subscribe</span>
						</button>
					</div>
					<div style={{ display: this.state.error ? 'block' : 'none' }}>
						<p id="error">{this.state.error}</p>
					</div>
					<div style={{ display: this.state.success ? 'block' : 'none' }}>
						<p id="success">{this.state.success}</p>
					</div>
				</form>
			</div>
		)
	}
}

export default Component
