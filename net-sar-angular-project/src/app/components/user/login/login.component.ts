import { Component, OnInit } from "@angular/core";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private user: User = {
    email: "",
    password: ""
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin(form) {
    if (form.valid) {
      return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(["/user/profile"]);
        });
    }
  }
}
