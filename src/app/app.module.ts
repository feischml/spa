import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoachComponent } from './coaches/coach/coach.component';
import { FeatureComponent } from './feature/feature.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileComponent } from './profiles/profile/profile.component';

// import routing
import { routing } from './app.routing';

// import smooth scroll
import { SmoothScrollToDirective, SmoothScrollDirective } from "ng2-smooth-scroll";

// import translate module
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

// import Rercapcha
import { RecaptchaModule } from 'ng-recaptcha';
import { PagerService } from 'app/service/pager.service';

// import Material
//import {MatProgressSpinnerModule} from '@angular/material';

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
    ContentcontainerComponent,
    CoachComponent,
    FeatureComponent,
    ProfilesComponent,
    ProfileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    //MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [ HttpClient ]
      }
    }),
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  exports: [
    TranslateModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PagerService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
