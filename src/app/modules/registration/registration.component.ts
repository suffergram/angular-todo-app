import { Component, OnDestroy, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnDestroy {
  constructor(private authService: AuthService) {}
  private router: Router = inject(Router);
  private subscription: Subscription | null = null;

  onSubmit(form: NgForm) {
    const data = form.form.value;
    this.authService.register(data).subscribe(() => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
