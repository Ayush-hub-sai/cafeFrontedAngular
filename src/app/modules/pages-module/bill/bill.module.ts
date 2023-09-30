import { NgModule } from "@angular/core";
import { BillComponent } from "./bill.component";
import { AddBillComponent } from "./add-bill/add-bill.component";
import { RouterModule } from "@angular/router";
import { MaterialComponentModule } from "src/app/material-component/material-component.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [BillComponent, AddBillComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: BillComponent },
            { path: "addBill", component: AddBillComponent },
            { path: "editBill", component: AddBillComponent },
        ]),
        MaterialComponentModule,
        CommonModule,
        ReactiveFormsModule

    ],
})
export class BillModule { }
