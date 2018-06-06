import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);


