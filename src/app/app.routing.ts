import { Router, RouterModule } from '@angular/router';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';
import { ContactusComponent } from './contactus/contactus.component'; 
import { ProfilesComponent } from 'app/profiles/profiles.component';
import { CoachingComponent } from './coaching/coaching.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RankingsComponent } from './rankings/rankings.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: ContentcontainerComponent },
    // Contact Form
    { path: 'contactus', component: ContactusComponent },
    // Profiles
    { path: 'profiles', component: ProfilesComponent },
    // Coaching
    { path: 'coaching', component: CoachingComponent },
    // Calendar
    { path: 'calendar', component: CalendarComponent },
    // Rankings
    { path: 'rankings', component: RankingsComponent },
    // Others
    { path: '**', component: ContentcontainerComponent }
] , {useHash: true});