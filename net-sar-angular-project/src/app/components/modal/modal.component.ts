import { Component, OnInit } from "@angular/core";
import { DataApiService } from "src/app/services/data-api.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(
    private dataApiService: DataApiService,
    private location: Location
  ) {}

  ngOnInit() {}

  onSaveClothes(form): void {
    if (form.value.clothesId == null) {
      this.dataApiService
        .saveClothes(form.value)
        .subscribe(clothes => location.reload());
    } else {
      this.dataApiService
        .updateClothes(form.value)
        .subscribe(clothes => location.reload());
    }
  }
}
