import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CategoryComponent } from "./category.component";
import { AddCategoryComponent } from "./add-category/add-category.component";


@NgModule({
    declarations: [CategoryComponent, AddCategoryComponent],
    imports: [
        RouterModule.forChild([
            { path: "", component: CategoryComponent },
            { path: "addCategory", component: AddCategoryComponent },
            { path: "editCategory", component: AddCategoryComponent },
        ]),
    ],
})
export class CategoryModule { }
