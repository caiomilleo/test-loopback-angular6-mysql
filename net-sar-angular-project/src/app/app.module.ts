import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./components/user/login/login.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { Page404Component } from "./components/page404/page404.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { HomeComponent } from "./components/home/home.component";
import { ModalComponent } from "./components/modal/modal.component";
import { ListClothesComponent } from "./components/admin/list-clothes/list-clothes.component";
import { OffersComponent } from "./components/offers/offers.component";
import { DetailsClothesComponent } from "./components/details-clothes/details-clothes.component";

import { NgxSpinnerModule } from "ngx-spinner";
import { AdminComponent } from "./components/admin/admin.component";

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavbarComponent,
    OffersComponent,
    DetailsClothesComponent,
    ListClothesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
