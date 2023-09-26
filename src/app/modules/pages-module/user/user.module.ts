import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { MaterialComponentModule } from "src/app/material-component/material-component.module";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UserComponent, AddUserComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: UserComponent },
            { path: "addUser", component: AddUserComponent },
            { path: "editUser", component: AddUserComponent },
        ]),
        MaterialComponentModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
})
export class UserModules { }
