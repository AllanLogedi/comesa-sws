// auth.guard.ts
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn) { // Implement isLoggedIn() in your AuthService
      
      return true;
    } else {
      this.router.navigate(['/public/index']); // Redirect to home if not authenticated
      return false;
    }
  }
}
