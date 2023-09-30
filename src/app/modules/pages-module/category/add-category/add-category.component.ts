import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CategoryService } from 'src/app/services/category.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private _snackBar: SnackbarService,
    private spinner: NgxUiLoaderService,
    private router: Router,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddCategoryComponent>) { }

  ngOnInit(): void {
    this.loadForm()
    if (this.data != '') {
      this.loadData()
    }

  }
  loadForm() {
    this.myForm = this.fb.group({
      categoryName: ['', Validators.required],
    });
  }

  loadData() {
    this.myForm.controls['categoryName'].setValue(this.data.name)
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.spinner.start();
      var categoryData: any = {
        name: this.myForm.value.categoryName
      }

      if (this.data != '') {
        categoryData.id = this.data.id
        this.categoryService.updateCategory(categoryData).subscribe({
          next: (response: any) => {
            this.spinner.stop();
            this._snackBar.success(response.message)
            this.dialogRef.close();


          },
          error: (error) => {
            this.spinner.stop();
          },
          complete: () => { },
        });
      }
      else {
        this.categoryService.addCategory(categoryData).subscribe({
          next: (response: any) => {
            this.spinner.stop();
            this._snackBar.success(response.message)
            this.dialogRef.close();
          },
          error: (error) => {
            this.spinner.stop();
          },
          complete: () => { },
        });
      }
    }
  }

}
