import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-newsletter-signup",
  templateUrl: "./newsletter-signup.component.html",
  styleUrls: ["./newsletter-signup.component.scss"],
})

export class NewsletterSignupComponent implements OnInit {
  _email: string     = "";
  consented: boolean = false;
  error: string      = "";
  success: string    = "";
  submitted: boolean = false;
  blink_box: boolean = false;
  showFull: boolean  = false;

  get email() { return this._email; }

  set email(val: string) {
    this._email   = val;
    this.showFull = !!this._email;
    if (!this.showFull) this.consented = false;
  }

  constructor(private http: HttpClient) {}

  submit() {
    const mailchimp_add = "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?email=";
    const mailchimp_url = mailchimp_add + encodeURIComponent(this.email || "");

    if (!this.consented) {
      this.blink_box = true;
      return false;
    } else {
      this.blink_box = false;
    }
    
    this.error = "";

    this.http.get(mailchimp_url)
      .subscribe(
        response => {
	  if (response["status"] == "pending") {
	    this.submitted = true;
	    this.success = "Great! Now please check your email and confirm."
	  } else if (response["detail"]) {
	    this.error = response["detail"];
	  }
        },
        error => {
          this.error = "Sorry, an error occurred.";
        });
  }

  ngOnInit() {}
}
