import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  userForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddProductComponent>,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadForm()
    // if (this.data.id != undefined) {
    this.loadData()
    // }
  }
  loadForm() {
    this.userForm = this.formBuilder.group({
      name: [null],
      categoryName: [null],
      description: [null],
      price: [null],
      status: [null],

    });
  }
  loadData() {
    this.userForm.patchValue({
      name: this.data.name,
      categoryName: this.data.categoryName,
      description: this.data.description,
      price: this.data.price,
      status: this.data.status,
    });
  }
  saveChanges() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
