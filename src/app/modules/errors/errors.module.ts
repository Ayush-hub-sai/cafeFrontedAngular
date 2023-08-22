import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorsRoutingModule } from './errors-module.routing';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
@NgModule({
    declarations: [
        Error404Component,
        Error500Component
    ],
    imports: [
        CommonModule,
        ErrorsRoutingModule,
        RouterModule.forChild([{ path: "", component: Error404Component }]),

    ]
})
export class ErrorsModule { }
