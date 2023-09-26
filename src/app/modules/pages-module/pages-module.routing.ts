import { Routes } from "@angular/router";
import { PagesModuleComponent } from "./pages-module.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const PagesRoutes: Routes = [
    {

        path: "",
        component: PagesModuleComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            {
                path: "bill",
                loadChildren: () =>
                    import(
                        "src/app/modules/pages-module/bill/bill.module"
                    ).then((m) => m.BillModule),
            },
            {
                path: "category",
                loadChildren: () =>
                    import(
                        "src/app/modules/pages-module/category/category.module"
                    ).then((m) => m.CategoryModule),
            },
            {
                path: "product",
                loadChildren: () =>
                    import(
                        "src/app/modules/pages-module/product/product.module"
                    ).then((m) => m.ProductModule),
            },
            {
                path: "user",
                loadChildren: () =>
                    import(
                        "src/app/modules/pages-module/user/user.module"
                    ).then((m) => m.UserModules),
            }
        ]
    }
]