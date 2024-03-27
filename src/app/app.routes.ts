import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ListComponent } from './modules/list/list.component';
import { InfoComponent } from './modules/info/info.component';
import { listGuard } from './guards/list.guard';
import { RegistrationComponent } from './modules/registration/registration.component';
import { registrationGuard } from './guards/registration.guard';

export const routes: Routes = [
  { path: '', component: ListComponent, canActivate: [listGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [registrationGuard],
  },
  { path: 'info', component: InfoComponent },
];
