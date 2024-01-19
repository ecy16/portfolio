import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'contacts',component:ContactsComponent}
];
