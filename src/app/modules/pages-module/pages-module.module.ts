import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesModuleComponent } from './pages-module.component';
import { PagesRoutes } from './pages-module.routing';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        PagesModuleComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes)
    ]
})
export class PagesModule { }
