import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { LoginComponent } from './modules/login/login.component';
import { AppNavComponent } from './modules/app-nav/app-nav.component';
import { InfoComponent } from './modules/info/info.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RegistrationComponent } from './modules/registration/registration.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    AppNavComponent,
    LoginComponent,
    RegistrationComponent,
    InfoComponent,
    HttpClientModule,
  ],
  exports: [RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
