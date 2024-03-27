import { Component, DoCheck } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app-nav.component.html',
  styleUrl: './app-nav.component.scss',
})
export class AppNavComponent implements DoCheck {
  constructor(private authService: AuthService, private routes: Router) {}

  public user = this.authService.getUser();
  public username = '';

  ngDoCheck(): void {
    this.user = this.authService.getUser();
    this.username = this.user?.email.split('@')[0];
  }

  public onLogOut() {
    this.authService.logout();
  }

  public onLogIn() {
    this.routes.navigate(['login']);
  }
}
