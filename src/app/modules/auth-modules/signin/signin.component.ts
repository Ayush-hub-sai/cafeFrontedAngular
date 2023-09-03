import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { NgxUiLoaderService } from "ngx-ui-loader"
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstant } from 'src/app/shared/global-constant';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {
  hide = "password";
  hidePasTex: boolean = true;
  loginForm: any = FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private userService: UserService,

  ) { }

  ngOnInit(): void {
    this.loadForm()
  }

  hideShow() {
    if (this.hide === "password") {
      this.hide = "text"
      this.hidePasTex = true
    }
    else {
      this.hide = "password"
      this.hidePasTex = false;
    }
  }

  signUP() {
    this.router.navigate(['/auth/signUp'])
  }

  loadForm() {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstant.nameRegex)]],
      password: [null, Validators.required],
    })
  }


  submitLogin() {
    this.spinner.start()
    var formData = this.loginForm.value
    var data = {
      email: formData.email,
      password: formData.password
    }
    this.userService.login(data).subscribe({
      next: (response: any) => {
        if (response.status == 1) {
          this.spinner.stop()
          console.log(response);
          localStorage.setItem("token",response.token)
          this._snackBar.success(response.message);
          this.router.navigate(['/dashboard'])
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
      complete: () => { },
    });
  }
}
