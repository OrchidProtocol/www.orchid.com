import {HttpClient, HttpParams} from "@angular/common/http";
import {Component, OnInit} from "@angular/core";

interface MailChimpResponse {
  result: string;
  msg: string;
}

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

    if (!this.consented) {
      this.blink_box = true;
      return false;
    } else {
      this.blink_box = false;
    }

    const mailchimp_add =
      "https://ik396c7x0k.execute-api.us-west-2.amazonaws.com/default/mailchimp?";
    const params = new HttpParams()
                     .set("email", encodeURI(this.email));
    const mailchimp_url = mailchimp_add + params.toString();

    this.error = "";

    this.http.jsonp<MailChimpResponse>(mailchimp_url, "c")
      .subscribe(
        response => {
          if (response) {
            if (response.result == "success") {
              this.submitted = true;
              this.success   = response.msg;
            }
            else if (response.result == "error") {
              this.error = response.msg;
            }
          }
        },
        error => {
          console.error(error);
          this.error = "Sorry, an error occurred.";
        });
  }

  ngOnInit() {}
}
