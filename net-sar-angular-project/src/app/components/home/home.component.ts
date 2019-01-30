import { Component, OnInit } from "@angular/core";
import { DataApiService } from "src/app/services/data-api.service";
import { Clothes } from "src/app/models/clothes";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private clothes: Clothes;
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.getListClothes();
  }

  getListClothes() {
    this.dataApi.getNotOffers().subscribe((clothes: Clothes) => {
      this.clothes = clothes;
    });
  }
}
