import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ProductService } from 'src/app/services/product.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UsersDataService } from 'src/app/services/users-data.service';
import { AddProductComponent } from './add-product/add-product.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Description', 'Price', 'Status', 'categoryName', 'Edit'];
  dataSource: MatTableDataSource<any>; // Initialize as MatTableDataSource
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private productService: ProductService,
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

    this.productService.getProduct().subscribe({
      next: (response: any) => {
        this.spinner.stop();
        this.dataSource.data = response.data;
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
  openEditUserModal(user: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%'; // Set the desired width
    dialogConfig.height = 'auto'; // Set the desired height
    dialogConfig.data = user
    const dialogRef = this.dialog.open(AddProductComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
