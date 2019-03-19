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
  showFull: boolean  = false;

  get email() { return this._email; }

  set email(val: string) {
    this._email   = val;
    this.showFull = !!this._email;
    if (!this.showFull) this.consented = false;
  }

  constructor(private http: HttpClient) {}

  submit() {
    const magic_value = "b_3f36871a1dd2e1f2f4dc2fa96_5445cd6980";
    const mailchimp_add =
      "https://orchid.us17.list-manage.com/subscribe/post-json?u=3f36871a1dd2e1f2f4dc2fa96&amp;id=5445cd6980&";
    const params = new HttpParams()
                     .set("EMAIL", this.email)
                     .set(magic_value, "");
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
