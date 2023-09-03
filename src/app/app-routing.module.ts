import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth",
    pathMatch: "full",
  },
  {
    path: "auth",
    loadChildren: () =>
      import("src/app/modules/auth-modules/auth-modules.module").then(
        (m) => m.AuthModule
      ),
  },
  {
    path: "error",
    loadChildren: () =>
      import("src/app/modules/errors/errors.module").then(
        (m) => m.ErrorsModule
      ),
  },
  {
    path: "",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("src/app/modules/pages-module/pages-module.module").then(
        (m) => m.PagesModule
      ),
    canActivate: [AuthGuardService],
    data: {
      expectedRole: ['admin', 'user ']
    }
  },

  { path: "**", redirectTo: "error/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
