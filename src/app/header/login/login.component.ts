import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

}