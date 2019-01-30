import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  public msgError = "";
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onRegister(form) {
    if (form.valid) {
      this.authService.registerUser(this.user).subscribe(
        user => {
          this.authService.setUser(user);
          const token = user.id;
          this.authService.setToken(token);
          this.router.navigate(["/user/profile"]);
        },
        res => {
          this.msgError = res.error.error.details.messages.email;
        }
      );
    }
  }
}
