import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SquashComponent } from './squash/squash.component';
import { SquashinclujComponent } from './squashincluj/squashincluj.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';

// import routing
import { routing } from './app.routing';

// import smooth scroll
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

// import Rercapcha
import { RecaptchaModule } from 'ng-recaptcha';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    SmoothScrollToDirective,
    SmoothScrollDirective,
    AppComponent,
    HeaderComponent,
    SquashComponent,
    SquashinclujComponent,
    ClubsComponent,
    CoachesComponent,
    ComingsoonComponent,
    FooterComponent,
    ContactusComponent,
    ContentcontainerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  exports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
