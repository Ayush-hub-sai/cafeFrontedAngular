import { Routes } from "@angular/router";
import { PagesModuleComponent } from "./pages-module.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const PagesRoutes: Routes = [
    {

        path: "",
        component: PagesModuleComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            // {
            //     path: "paymentMethod",
            //     loadChildren: () =>
            //         import(
            //             "src/app/modules/pages-module/lookup/payment-method/payment-method.module"
            //         ).then((m) => m.PaymentMethodModule),
            // },
        ]
    }
]