import { NgModule } from "@angular/core";
import { MaterialComponentModule } from "src/app/material-component/material-component.module";
import { RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [CategoryComponent, AddCategoryComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: CategoryComponent },
            { path: "addCategory", component: AddCategoryComponent },
            { path: "editCategory", component: AddCategoryComponent },
        ]),
        MaterialComponentModule,
        CommonModule,
        ReactiveFormsModule
        
    ],
})
export class CategoryModule { }
