import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService) {}
  user: User;

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }
}
