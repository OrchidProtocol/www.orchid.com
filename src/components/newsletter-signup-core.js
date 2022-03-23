import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next';
import './newsletter-signup-core.scss'

class NewsletterSignupCore extends React.Component {
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
		const { t } = this.props;
		e.preventDefault();

		// temporarilly disable priv8 functionality, sign users up for the full newsletter but keep priv8 styling elsewhere
		// add back the commented code below when the next conference is happening.
		const mailchimp_url = "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?email=" + encodeURIComponent(e.target.email.value || ""); //+ (this.props.priv8 ? "&priv8=true" : "");

		if (this.in_progress) return;

		const tempState = {
			invalid_email: false,
			blink_box: false,
			invalid: false,
			in_progress: true,
		}

		if (e.target.email.value === "" || !this.email_test.test(e.target.email.value)) {
			tempState.invalid_email = true;
			tempState.invalid = true;
		} else {
			tempState.invalid_email = false;
		}

		if (e.target.consent && e.target.consent.value !== "on") {
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
		this.setState(tempState);
		fetch(mailchimp_url)
			.then(response => response.json())
			.then(
				response => {
					if (response["status"] === "pending") {
						this.setState({
							in_progress: false,
							submitted: true,
							success: t("Great! Now please check your email and confirm your subscription."),
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
					error: t("Sorry, an error occurred."),
				})
				console.error(error);
			});
	}

	render() {
		const { t } = this.props;
		return (
			<div className={"newsletter-core" + (this.props.priv8 ? ' priv8' : '') + (this.state.in_progress ? ' in_progress' : '') + (this.props.className ? ' ' + this.props.className : '')}>
				<form onSubmit={this.submit.bind(this)}>
					<div style={{ display: this.state.submitted ? 'none' : '' }}>
						<input type="email" name="email" required placeholder={t("Email address")} className={"input-large center-block vgap-thin newsletter-signup__input" + (this.state.invalid_email ? " invalid" : "")} />
						{!this.props.priv8 ? <div className="gap-bot-thin">
							<label className={"gdpr-consent" + (this.state.blink_box ? ' blink_box' : '')}>
								<input name="consent" required type="checkbox" />
								<span><Trans>I consent to receiving further instructions at the email address I submitted above.</Trans></span>
							</label>
						</div> : <></>}
						<button className={"btn-primary btn-fixed center-block newsletter-signup__button" + (this.props.priv8 ? " btn-secondary" : " btn-primary") + (this.props.largePadding ? " section-button" : "") + (this.state.in_progress ? " loading" : "")}>
							<span>{this.props.priv8 ? t('Register') : t('Subscribe')}</span>
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

export default NewsletterSignupCore;
