import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  js: boolean = false;

  success: boolean = false;
  successMessage: string = '';
  error: boolean = false;
  errorMessage: string = '';
  form_disabled: boolean = false;

  name: string = "";
  invalid_name: boolean = false;

  subject: string = "";
  invalid_subject: boolean = false;

  message: string = "";
  invalid_message: boolean = false;

  email: string = "";
  invalid_email: boolean = false;
  email_test: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() { }
  ngOnInit() {
    const doc = typeof document !== "undefined" && document;

    if (doc) {
      this.js = true;
    }
  }

  displayError(message) {
    this.error = true;
    this.errorMessage = message;
  }
  displaySuccess(message) {
    this.success = true;
    this.successMessage = message;
  }
  clear() {
    this.success = false;
    this.error = false;
    this.invalid_name = false;
    this.invalid_subject = false;
    this.invalid_message = false;
    this.invalid_email = false;
    this.name = '';
    this.subject = '';
    this.message = '';
    this.email = '';
  }

  async submitForm() {
    this.success = false;
    this.error = false;
    this.form_disabled = true;

    try {
      let response = null;
      let data = null;

      if (window && window.location.host.match(/localhost/i) !== null) {
        response = "Form disabled";
        data = "form disabled";
      } else {
        let response = await fetch("https://evy3f9g1ki.execute-api.us-west-2.amazonaws.com/Production/contact",
          {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
              "name": this.name,
              "email": this.email,
              "subject": this.subject,
              "message": this.message
            })
          })
        let data = await response.json();
      }
      this.form_disabled = false;
      this.clear();
      this.displaySuccess("Your message has been sent.")
    } catch (e) {
      console.error(e);
      this.form_disabled = false;
      this.displayError("There was an unknown error, your message may not have been sent");
    }

  }

  onSubmit() {
    if (this.validateForm()) {
      this.error = false;
      this.success = false;
      this.submitForm();
    } else {
      this.displayError('Required fields are missing');
    }
  }

  validateForm() {
    let failed_validation: boolean = false;

    if (this.validateEmail()) failed_validation = true;
    if (this.validateName()) failed_validation = true;
    if (this.validateSubject()) failed_validation = true;
    if (this.validateMessage()) failed_validation = true;

    return !failed_validation;
  }

  validateEmail() {
    const validEmail: boolean = this.email_test.test(this.email.toLowerCase());
    if (!validEmail) {
      this.invalid_email = true;
    } else this.invalid_email = false;

    return this.invalid_email;
  }

  validateName() {
    if (!this.name || this.name.length === 0) {
      this.invalid_name = true;
    } else this.invalid_name = false;

    return this.invalid_name;
  }

  validateSubject() {
    if (!this.subject || this.subject.length === 0) {
      this.invalid_subject = true;
    } else this.invalid_subject = false;

    return this.invalid_subject;
  }

  validateMessage() {
    if (!this.message || this.message.length === 0) {
      this.invalid_message = true;
    } else this.invalid_message = false;

    return this.invalid_message;
  }
}
