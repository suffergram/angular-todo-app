import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const registrationGuard: CanActivateFn = (route, state): boolean => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!authService.getUser()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
