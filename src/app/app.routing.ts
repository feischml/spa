import { Router, RouterModule } from '@angular/router';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';
import { ContactusComponent } from './contactus/contactus.component'; 
import { ProfilesComponent } from 'app/profiles/profiles.component';

export const routing = RouterModule.forRoot([
    { path: 'home', component: ContentcontainerComponent },
    // Contact Form
    { path: 'contactus', component: ContactusComponent },
    // Profiles
    { path: 'profiles', component: ProfilesComponent},
    // Others
    { path: '**', component: ContentcontainerComponent }
]);