import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next';

class Component extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			in_progress: false,
			error: false,
			success: false,
			js: false,
		}
		this.in_progress = false;
		this.email_test = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	}

	componentDidMount() {
		this.setState({
			js: true,
		})
	}

	setFormRef(ref) {
		if (ref) {
			this.form = ref;
		}
	}
	clearForm(e) {
		if (e) e.preventDefault();
		this.setState({
			in_progress: false,
			error: e !== undefined ? false : this.state.error,
			success: e !== undefined ? false : this.state.success,
		})
		this.form.name.value = '';
		this.form.email.value = '';
		this.form.subject.value = '';
		this.form.message.value = '';
	}

	async submit(e) {
		e.preventDefault();

		if (this.in_progress) return;

		this.in_progress = true;
		this.setState({
			in_progress: true,
		})
		try {

			/*let response =*/ await fetch("https://evy3f9g1ki.execute-api.us-west-2.amazonaws.com/Production/contact",
			{
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				method: "POST",
				body: JSON.stringify({
					"name": this.form.name.value,
					"email": this.form.email.value,
					"subject": this.form.subject.value,
					"message": this.form.message.value,
				})
			})
			//let data = await response.json();
			this.in_progress = false;
			this.setState({
				in_progress: false,
				success: true,
			})
			this.clearForm();
		} catch (e) {
			console.error(e);
			this.setState({
				in_progress: false,
				error: true,
			})
		}
	}

	render() {
		const { t } = this.props
		return (
			<form className={"contact-form-container" + (this.state.js ? " js" : "") + (this.state.in_progress ? " in_progress" : "")} onSubmit={this.submit.bind(this)} ref={this.setFormRef.bind(this)}>
				<div className="contact-form-input-wrapper">
					<input type="text" name="name" placeholder={t("@@ContactForm__NamePlaceholder")} required />
				</div>

				<div className="contact-form-input-wrapper">
					<input type="email" name="email" placeholder={t("@@ContactForm__EmailPlaceholder")} required />
				</div>

				<div className="contact-form-input-wrapper">
					<input type="text" name="subject" placeholder={t("@@ContactForm__SubjectPlaceholder")} required />
				</div>

				<div className="contact-form-input-wrapper">
					<textarea name="message" placeholder={t("@@ContactForm__MessagePlaceholder")} required />
				</div>

				<div className="contact-form-error contact-form-message">
					<Trans>Required fields are missing</Trans>
				</div>
				<div className={"contact-form-error contact-form-message" + (this.state.error ? ' active' : '')}>
					<Trans>There was an unknown error, your message may not have been sent</Trans>
				</div>
				<div className={"contact-form-success contact-form-message" + (this.state.success ? ' active' : '')}>
					<Trans>Your message has been sent</Trans>
				</div>

				<button className="btn-primary"><Trans>Submit</Trans></button>
				<button onClick={this.clearForm.bind(this)}><Trans>Clear</Trans></button>
			</form>
		)
	}
}

export default Component
