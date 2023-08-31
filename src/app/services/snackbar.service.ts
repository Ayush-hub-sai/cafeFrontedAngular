import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  action: string = 'Close'
  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

  private defaultConfig: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ["mat-snack-bar-container"]
  };

  success(message: string) {
    this.defaultConfig.panelClass = ["mat-snack-bar-container", "success"];
    const config = { ...this.defaultConfig };
    this.show(message, config);
  }

  error(message: string) {
    this.defaultConfig.panelClass = ["mat-snack-bar-container", "error"];
    const config = { ...this.defaultConfig };
    this.show(message, config);
  }

  warning(message: string) {
    this.defaultConfig.panelClass = ["mat-snack-bar-container", "warning"];
    const config = { ...this.defaultConfig };
    this.show(message, config);
  }

  private show(message: string, config?: MatSnackBarConfig) {
    config = config || this.defaultConfig;
    this.zone.run(() => {
      this.snackBar.open(message, this.action, config);
    });
  }

  // showSuccess(message: string, action: string = 'Close') {
  //   const config = { ...this.defaultConfig };
  //   this.snackBar.open(message, action, config);
  // }
  // showError(message: string, action: string = 'Close') {
  //   const config = {
  //     ...this.defaultConfig,
  //     panelClass: ['error-snackbar']
  //   };
  //   this.snackBar.open(message, action, config);
  // }

}
