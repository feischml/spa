import { Component, OnInit, ViewChild, ViewContainerRef , AfterViewInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http, Headers } from "@angular/http";
import { RecaptchaComponent } from "ng-recaptcha";
import { TranslateService } from "@ngx-translate/core";
import { constants } from '../app.constants';
import { Observable } from 'rxjs/Observable';
import { SmoothScrollToDirective } from 'ng2-smooth-scroll';

@Component({
  selector: 'app-contactus',
  providers: [ SmoothScrollToDirective ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit, AfterViewInit {

  public contactForm: FormGroup;
  private reCaptchaResponse: string = '';
  public spinning: boolean;
  public siteKey: string;
  public observ: Observable<string>;

  @ViewChild('captchaRef') reCaptcha: RecaptchaComponent;

  constructor(private formBuilder: FormBuilder,
              private http: Http,
              private translate: TranslateService,
              private myScroll: SmoothScrollToDirective = new SmoothScrollToDirective()) {
    this.contactForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      message: ['', Validators.required]
    });
    this.siteKey = constants.reCaptchaToken;
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.myScroll.scrollTo = "#contactus";
    this.myScroll.offset = 80;
    this.myScroll.onClick();
  }

  public resolved(captchaResponse: string) {
    this.reCaptchaResponse = captchaResponse;
  }

  public submit(form: FormGroup) {

    let message = form.controls.message.value;
    let name = form.controls.name.value;
    let email = form.controls.email.value;

    if (this.reCaptchaResponse == '') {
      this.observ = this.translate.get("MESSAGES.ROBOT");
      return;
    }

    this.callServer(message, email, name, this.reCaptchaResponse);
    this.refreshForm(form);

  }

  private refreshForm(form: FormGroup) {
    form.reset();
    this.reCaptchaResponse = '';
    this.reCaptcha.reset();
  }

  private callServer(message: string, email: string, name: string, reCaptcha: string) {
    this.startSpinner();
    this.http.get(constants.serverURL + "/validate_captcha", { params: { reCaptcha, message, email, name } })
      .subscribe(
      res => {
        let response = res.json();
        if (response.validation == false){
          this.observ = this.translate.get("MESSAGES.ROBOT");
        }
        else
          if (response.validation == true && response.email == true)
            this.observ = this.translate.get("MESSAGES.SENT");
          else
            if (response.validation == true && response.email == false)
              this.observ = this.translate.get("MESSAGES.ERROR");
        this.stopSpinner();
      },
      err => {
        this.observ = this.translate.get("MESSAGES.ERROR");
        this.stopSpinner();
      }
      );
  }

  private startSpinner() {
    this.spinning = true;
  }

  private stopSpinner() {
    this.spinning = false;
  }

}
