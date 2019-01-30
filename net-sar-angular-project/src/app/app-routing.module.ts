import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/user/login/login.component";
import { RegisterComponent } from "src/app/components/user/register/register.component";
import { ProfileComponent } from "src/app/components/user/profile/profile.component";
import { Page404Component } from "src/app/components/page404/page404.component";
import { ListClothesComponent } from "./components/admin/list-clothes/list-clothes.component";
import { OffersComponent } from "./components/offers/offers.component";
import { DetailsClothesComponent } from "./components/details-clothes/details-clothes.component";

import { AuthGuard } from "./guards/auth.guard";
import { AdminComponent } from "./components/admin/admin.component";

const routes: Routes = [
  { path: "user/login", component: LoginComponent },
  { path: "user/register", component: RegisterComponent },

  {
    path: "",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "home", component: HomeComponent, canActivateChild: [AuthGuard] },
      { path: "offers", component: OffersComponent, canActivateChild: [AuthGuard] },
      {
        path: "clothes/:id",
        component: DetailsClothesComponent,
        canActivateChild: [AuthGuard]
      },
      {
        path: "admin/list-clothes",
        component: ListClothesComponent,
        canActivateChild: [AuthGuard]
      },

      {
        path: "user/profile",
        component: ProfileComponent,
        canActivateChild: [AuthGuard]
      }
    ]
  },
  { path: "**", component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
