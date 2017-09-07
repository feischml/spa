import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { RecaptchaComponent } from "ng-recaptcha";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-contactus',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

    contactForm: FormGroup;
    private reCaptchaResponse: string = ''; 
    private serverresponse: string;
    private spinning: boolean;

    @ViewChild('captchaRef') reCaptcha: RecaptchaComponent;

    constructor( formBuilder: FormBuilder,
                 private http: Http,
                 viewRef: ViewContainerRef,
                 public translate: TranslateService ) {
        this.contactForm = formBuilder.group({
            name: ['',Validators.required],
            email: ['',Validators.compose([Validators.required,Validators.email])],
            message: ['',Validators.required]
        });
    }

  ngOnInit() { }

  private resolved(captchaResponse: string){
      this.reCaptchaResponse = captchaResponse;
  }

  private submit(form: FormGroup){

      //Site key for testing: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
      //Secret key for testing: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe

      let message = form.controls.message.value;
      let name = form.controls.name.value;
      let email = form.controls.email.value;
      
      if ( this.reCaptchaResponse == ''){
          this.serverresponse = 'Are you a robot?';
          return;
      }

      this.callServer(message, email, name, this.reCaptchaResponse);
      this.refreshForm(form);
      
    }

    private refreshForm(form: FormGroup){
        form.reset();
        this.reCaptchaResponse = '';
        this.reCaptcha.reset();
    }

    private callServer(message: string, email: string, name: string, reCaptcha: string){
      this.startSpinner();
      this.http.get("http://localhost:3100/validate_captcha",{ params: { reCaptcha, message, email, name } })
        .subscribe( 
          res => {
            let response = res.json();
            if (response.validation == false)
              this.serverresponse = "Are you sure you are not a robot?";
            else 
              if (response.validation == true && response.email == true)
                this.serverresponse = "Message sent!";
              else
                if (response.validation == true && response.email == false)
                  this.serverresponse = "Some error occured, please retry.";
            this.stopSpinner();
          }, 
          err => {
            this.serverresponse = "Some error occured, please retry.";
            this.stopSpinner();
          }
        );
    }

    private startSpinner(){
        this.spinning = true;
    }

    private stopSpinner(){
        this.spinning = false;
    }

}
