import { Router, RouterModule } from '@angular/router';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';
import { ContactusComponent } from './contactus/contactus.component'; 

export const routing = RouterModule.forRoot([
    { path: 'home', component: ContentcontainerComponent },
    // Contact Form
    { path: 'contactus', component: ContactusComponent },
    // Others
    { path: '**', component: ContentcontainerComponent }
]);