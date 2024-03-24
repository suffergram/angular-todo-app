import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ListComponent } from './modules/list/list.component';
import { InfoComponent } from './modules/info/info.component';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'info', component: InfoComponent },
];
