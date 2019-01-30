import { Component, OnInit } from "@angular/core";
import { DataApiService } from "src/app/services/data-api.service";
import { Clothes } from "src/app/models/clothes";

@Component({
  selector: "app-list-clothes",
  templateUrl: "./list-clothes.component.html",
  styleUrls: ["./list-clothes.component.css"]
})
export class ListClothesComponent implements OnInit {
  private clothes: Clothes;
  constructor(private dataApiService: DataApiService) {}

  ngOnInit() {
    this.getListClothes();
  }

  getListClothes() {
    this.dataApiService.getAllClothes().subscribe((clothes: Clothes) => {
      this.clothes = clothes;
    });
  }

  onDeleteClothes(id: string) {
    if (confirm("Are you sure to delete?")) {
      this.dataApiService.deleteClothes(id).subscribe(result => {
        if (result) {
          this.getListClothes();
        }
      });
    }
  }

  onPreUpdateClothes(clothes: Clothes) {
    this.dataApiService.selectedClothes = Object.assign({}, clothes);
    this.getListClothes();
  }

  resetForm(form?): void {
    this.dataApiService.selectedClothes = {
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
  }
}
