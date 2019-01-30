import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../models/user";
import { isNullOrUndefined } from "util";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
  registerUser(user: User) {
    const url_api = "http://localhost:3000/api/Users";
    return this.http.post<User>(url_api, user);
  }

  loginuser(email: string, password: string): Observable<any> {
    const url_api = "http://localhost:3000/api/Users/login?include=user";
    return this.http.post<User>(
      url_api,
      { email, password },
      { headers: this.headers }
    );
  }

  setUser(user: User): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  getCurrentUser(): User {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: User = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    let accessToken = localStorage.getItem("accessToken");
    const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
    return this.http.post<User>(url_api, { headers: this.headers });
  }
}
