import { Routes } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

export const AuthModulesRoutes: Routes = [
    { path: "", redirectTo: "signIn", pathMatch: "full" },
    { path: "signIn", component: SigninComponent },
    { path: "signUp", component: SignupComponent }

]