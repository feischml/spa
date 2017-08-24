import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SquashComponent } from './squash/squash.component';
import { SquashinclujComponent } from './squashincluj/squashincluj.component';
import { ClubsComponent } from './clubs/clubs.component';
import { CoachesComponent } from './coaches/coaches.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SquashComponent,
    SquashinclujComponent,
    ClubsComponent,
    CoachesComponent,
    ComingsoonComponent,
    FooterComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
