import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;
  name: string = '';

  constructor(formBuilder: FormBuilder) {
    this.contactForm = formBuilder.group({
      name: ['',Validators.required],
      email: ['',Validators.compose([Validators.required,Validators.email])],
      message: ['',Validators.required]
  });

  }

  ngOnInit() {
  }

}
