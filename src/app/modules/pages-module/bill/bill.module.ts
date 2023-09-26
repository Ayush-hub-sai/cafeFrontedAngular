import { NgModule } from "@angular/core";
import { BillComponent } from "./bill.component";
import { AddBillComponent } from "./add-bill/add-bill.component";
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [BillComponent, AddBillComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: BillComponent },
            { path: "addBill", component: AddBillComponent },
            { path: "editBill", component: AddBillComponent },
        ]),
    ],
})
export class BillModule { }
