import { Component, DoCheck, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy, DoCheck {
  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;
  public user = this.authService.getUser();

  public onSubmit(form: NgForm) {
    const email = form.form.value.email;
    const password = form.form.value.password;

    this.authService.login(email, password).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  ngDoCheck(): void {
    this.user = this.authService.getUser();
  }

  public onLogOut() {
    this.authService.logout();
  }
}
