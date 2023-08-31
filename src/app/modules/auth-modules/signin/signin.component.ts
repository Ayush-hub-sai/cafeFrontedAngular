import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/services/snackbar.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = "password";
  hidePasTex: boolean = true;
  constructor(
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
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

}
