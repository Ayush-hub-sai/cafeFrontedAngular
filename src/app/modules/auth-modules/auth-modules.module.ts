import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModulesComponent } from './auth-modules.component';
import { AuthModulesRoutes } from './auth-modules.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentModule } from 'src/app/material-component/material-component.module';
@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        AuthModulesComponent
    ],
    imports: [
        CommonModule,
        MaterialComponentModule,
        RouterModule.forChild(AuthModulesRoutes)
    ]
})
export class AuthModule { }
