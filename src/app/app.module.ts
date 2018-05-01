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
//import { LoginComponent } from 'app/header/login/login.component';
import { CoachingComponent } from './coaching/coaching.component';
import { RankingsComponent } from './rankings/rankings.component';
import { CalendarComponent } from './calendar/calendar.component';

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
import { MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material'

// social sign-in
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

import { EmbedVideo } from 'ngx-embed-video';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("667065783677-t393d4phksuu3lr87ihg5o6k1vlaqflb.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("138375956799811")
  }
]);

export function provideConfig() {
  return config;
}

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
    ProfileComponent,
    //LoginComponent,
    CoachingComponent,
    RankingsComponent,
    CalendarComponent,
  ],
  //entryComponents: [
    //LoginComponent // MODALS HAVE TO BE ADDED HERE
  //],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    EmbedVideo.forRoot(),
    RecaptchaModule.forRoot(),
    ReactiveFormsModule,
    SocialLoginModule,
    HttpModule,
    routing
  ],
  exports: [
    TranslateModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    PagerService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
