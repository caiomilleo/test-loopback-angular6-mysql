import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public app_name = "Clothes Store";
  public isLogged = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logoutUser();
  }

  onCheckUser(): void {
    if (this.authService.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }
}
