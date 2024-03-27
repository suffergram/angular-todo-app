import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private routes: Router,
    private location: Location
  ) {}

  baseUrl: string = `${environment.backendOrigin}/auth`;

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('todo_auth_token', res.token);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('todo_auth_token');
    if (this.location.path() === '') this.routes.navigate(['login']);
  }

  getUser() {
    const userTokenData = localStorage
      .getItem('todo_auth_token')
      ?.split('.')[1];

    if (userTokenData) {
      const jsonPayload = atob(userTokenData);
      return JSON.parse(jsonPayload);
    }

    return null;
  }

  get token() {
    return localStorage.getItem('todo_auth_token');
  }
}
