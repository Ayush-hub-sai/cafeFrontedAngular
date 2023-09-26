import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    private _snackBar: SnackbarService,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("token")
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {
            if (this.router.url === '/auth/signIn') {
            }
            else {
              localStorage.clear()
              this.router.navigate(['/auth/signIn'])
            }
          }
        }
        return throwError(err)
      })
    );

  }
}
