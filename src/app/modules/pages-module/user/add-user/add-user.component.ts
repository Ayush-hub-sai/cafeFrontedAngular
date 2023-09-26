import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddUserComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadForm()
    if (this.data.id != undefined) {
      this.loadData()
    }
  }
  loadForm() {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
    });
  }
  loadData() {
    this.userForm.patchValue({
      name: this.data.name,
      email: this.data.email,
    });
  }
  saveChanges() {
    this.dialogRef.close();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
