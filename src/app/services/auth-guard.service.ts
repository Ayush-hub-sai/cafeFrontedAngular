import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authService: AuthService,
    public router: Router,
    private snackBar: SnackbarService
  ) {

  }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let expectRoleArray: any = route.data;
    expectRoleArray = expectRoleArray.expectedRole
    const token: any = localStorage.getItem("token")
    let tokenPayload: any

    try {
      tokenPayload = jwtDecode(token)
    } catch (error) {
      localStorage.clear()
      this.router.navigate(['/auth/signIn'])
    }

    let checkRole = false
    for (let i = 0; i < expectRoleArray.length; i++) {
      if (expectRoleArray[i] == tokenPayload.role) {
        checkRole = true
      }
    }

    if (tokenPayload.role == 'user' || tokenPayload.role == 'admin') {
      if (this.authService.isAuthenticated() && checkRole) {
        return true
      }

      this.snackBar.error("Un authorized")
      this.router.navigate(['/dashboard'])
      return false
    }
    else {
      localStorage.clear()
      this.router.navigate(['/auth/signIn'])
      return false
    }

  }
}
