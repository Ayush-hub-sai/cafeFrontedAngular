import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BillService } from 'src/app/services/bill.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Email', 'ContactNumber', 'Download'];
  dataSource!: MatTableDataSource<any>; // Initialize as MatTableDataSource
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private billService: BillService,
  ) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getBill()
  }

  getBill() {
    this.spinner.start();

    this.billService.getBill().subscribe({
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

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
