import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Http } from "@angular/http";
import { RecaptchaComponent } from "ng-recaptcha";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;
  private reCaptchaResponse: string = '';
  private serverresponse: string;

  @ViewChild('captchaRef') reCaptcha: RecaptchaComponent;

  constructor(formBuilder: FormBuilder,
              private http: Http,
              viewRef: ViewContainerRef) {
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

      //ToDo: send data to backend for verification:
      // https://www.google.com/recaptcha/api/siteverify -> backend service

      // If response is ok, then enable sending the message -> backend service
      //console.log(`Resolved captcha with response ${captchaResponse}:`);
      //this.reCaptcha.

      let message = form.controls.message.value;
      let name = form.controls.name.value;
      let email = form.controls.email.value;
      
      if ( this.reCaptchaResponse == ''){
        this.serverresponse = 'Are you a robot?';
        return;
      }

      if ( this.simulateServer(message, email, name, this.reCaptchaResponse) == true){
        this.serverresponse = 'Message sent!';
      } else {
        this.serverresponse = 'Are you sure you are not a robot?';
      }

      this.refreshForm(form);
      
  }

  private refreshForm(form: FormGroup){
    form.reset();
    this.reCaptchaResponse = '';
    this.reCaptcha.reset();
  }

  private simulateServer(message: string, email: string, name: string, reCaptcha: string){

    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber % 2 === 0; 

  }

}
