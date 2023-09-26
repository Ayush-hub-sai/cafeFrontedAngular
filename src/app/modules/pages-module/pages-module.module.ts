import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesModuleComponent } from './pages-module.component';
import { PagesRoutes } from './pages-module.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponentModule } from 'src/app/full-component/full-component.module';
import { MaterialComponentModule } from 'src/app/material-component/material-component.module';

@NgModule({
    declarations: [
        PagesModuleComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        FullComponentModule,
        RouterModule.forChild(PagesRoutes),
        MaterialComponentModule,
        // BrowserModule
    ]

})
export class PagesModule { }
