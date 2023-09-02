import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstant } from 'src/app/shared/global-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  hide = true;
  signUpForm: any = FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private userService: UserService,
    // private dialog: MatDialogRef<SignupComponent>
  ) { }

  ngOnInit(): void {
    this.loadForm()
  }

  loadForm() {
    this.signUpForm = this.formbuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstant.nameRegex)]],
      email: [null, Validators.required],
      contactNumber: [null, Validators.required],
      password: []
    })
  }

  submitForm() {
    this.spinner.start()
    var formData = this.signUpForm.value
    var data = {
      name: formData.name,
      email: formData.email,
      contactNumber: formData.contactNumber,
      password: formData.password
    }
    this.userService.signup(data).subscribe({
      next: (response: any) => {
        if (response.status == 1) {
          this.spinner.stop()
          this._snackBar.success(response.message);
          this.router.navigate(['/auth/signIn'])
        }
        else {
          this._snackBar.error(response.message);
        }
      },
      error: (error) => {
        if (error.error) {
          this._snackBar.warning(error.error.message);
        }
        else {
          this._snackBar.error(error);
        }
        this.spinner.stop()
      },
      complete: () => {

      },
    });
  }

}
