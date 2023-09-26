import { NgModule } from "@angular/core";
import { MaterialComponentModule } from "src/app/material-component/material-component.module";
import { RouterModule } from "@angular/router";
import { ProductComponent } from "./product.component";
import { AddProductComponent } from "./add-product/add-product.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductComponent, AddProductComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: ProductComponent },
            { path: "addProduct", component: AddProductComponent },
            { path: "editProduct", component: AddProductComponent },
        ]),
        MaterialComponentModule,
        CommonModule,
        ReactiveFormsModule
    ],
})
export class ProductModule { }
