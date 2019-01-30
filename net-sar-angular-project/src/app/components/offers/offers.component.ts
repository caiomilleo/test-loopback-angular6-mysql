import { Component, OnInit } from "@angular/core";
import { Clothes } from "src/app/models/clothes";
import { DataApiService } from "src/app/services/data-api.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.component.html",
  styleUrls: ["./offers.component.css"]
})
export class OffersComponent implements OnInit {
  private clothes: Clothes;
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.getListClothes();
  }

  getListClothes() {
    this.dataApi.getOffers().subscribe((clothes: Clothes) => {
      this.clothes = clothes
    });
  }
}
