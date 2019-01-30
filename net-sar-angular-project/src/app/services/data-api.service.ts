import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Clothes } from "../models/clothes";

@Injectable({
  providedIn: "root"
})
export class DataApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  clothes: Observable<any>;
  mClothes: Observable<any>;

  public selectedClothes: Clothes = {
    id: null,
    name: "",
    category: "",
    description: "",
    img: "",
    color: "",
    size: "",
    price: "",
    offer: 0
  };

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.authService.getToken()
  });

  getAllClothes() {
    const url_api = `http://localhost:3000/api/Clothes`;
    return this.http.get(url_api);
  }

  getClothesById(id: string) {
    const url_api = `http://localhost:3000/api/Clothes/${id}`;
    return this.http.get(url_api);
  }
  getNotOffers() {
    const url_api = `http://localhost:3000/api/Clothes?filter[where][offer]=0`;
    return this.http.get(url_api);
  }

  getOffers() {
    const url_api = `http://localhost:3000/api/Clothes?filter[where][offer]=1`;
    return this.http.get(url_api);
  }

  saveClothes(clothes: Clothes) {
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/Clothes?access_token=${token}`;
    return this.http.post<Clothes>(url_api, clothes, { headers: this.headers });
  }

  updateClothes(clothes) {
    const clothesId = clothes.clothesId;
    const token = this.authService.getToken();
    const url_api = `http://localhost:3000/api/Clothes/${clothesId}/?access_token=${token}`;
    return this.http.put<Clothes>(url_api, clothes, { headers: this.headers });
  }

  deleteClothes(id: string) {
    const token = this.authService.getToken();
    console.log(token);
    const url_api = `http://localhost:3000/api/Clothes/${id}/?access_token=${token}`;
    return this.http.delete<Clothes>(url_api, { headers: this.headers });
  }
}
