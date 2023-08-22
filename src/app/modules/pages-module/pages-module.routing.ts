import { Routes } from "@angular/router";
import { PagesModuleComponent } from "./pages-module.component";

export const PagesRoutes: Routes = [
    {
        path: "", component: PagesModuleComponent, children: [
            // {
            //     path: "sellers",
            //     loadChildren: () =>
            //         import(
            //             "src/app/modules/pages-module/store_mgmt/store-mgmt.module"
            //         ).then((m) => m.store_mgmtModule),
            // },
        ]
    }
]