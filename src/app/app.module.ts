import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { LoginComponent } from './modules/login/login.component';
import { AppNavComponent } from './modules/app-nav/app-nav.component';
import { InfoComponent } from './modules/info/info.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppNavComponent,
    LoginComponent,
    InfoComponent,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
