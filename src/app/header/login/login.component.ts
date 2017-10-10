import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MatDialogRef } from '@angular/material';
import { SocialUser } from 'angular4-social-login';
import { AuthService } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';
import { FacebookLoginProvider } from 'angular4-social-login';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    
    user: SocialUser;    

    constructor(public dialogRef: MatDialogRef<LoginComponent>,
                private authService: AuthService,
                public translate: TranslateService) { }

    ngOnInit(){
        this.authService.authState.subscribe((user) => 
            this.user = user
        );
    }

    private signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }

    private signInWithFacebook(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }
}