import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UsersDataService } from 'src/app/services/users-data.service';
import { AddUserComponent } from './add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'ContactNumber', 'Email', 'Status', 'Edit'];
  dataSource: MatTableDataSource<any>; // Initialize as MatTableDataSource
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private usersService: UsersDataService,
    private dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource<any>([]); // Initialize as empty MatTableDataSource
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getUser();
  }

  getUser() {
    this.spinner.start();

    this.usersService.getUser().subscribe({
      next: (response: any) => {
        this.spinner.stop();
        this.dataSource.data = response;
      },
      error: (error) => {
        if (error.error) {
          if (error.error?.message == '') {
            this._snackBar.warning("User is not Authorized");
          } else {
            this._snackBar.warning(error.error.message);
          }
        } else {
          this._snackBar.error(error);
        }
        this.spinner.stop();
      },
      complete: () => { },
    });
  }

  async openEditUserModal(user: any) {
    var data = {
      status: user.status == "true" ? "false" : user.status == "false" ? "true" : "true",
      id: user.id
    }
    await this.usersService.updateUserStatus(data).subscribe({
      next: (response: any) => {
        if (response.status == 1) {
          this.spinner.stop();
          this._snackBar.success(response.message);
          this.getUser()
        }
      },
      error: (error) => {
        this.spinner.stop();
      },
      complete: () => { },
    });
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
