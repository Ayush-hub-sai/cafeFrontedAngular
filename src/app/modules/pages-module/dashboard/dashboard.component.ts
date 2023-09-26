import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private dashService: DashboardService,
  ) { }

  ngOnInit(): void {
    this.dashboardData()
  }
  dashData: any;
  dashboardData() {
    this.spinner.start()

    this.dashService.getDashboardDetails().subscribe({
      next: (response: any) => {
        this.spinner.stop()
        this.dashData = response
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
