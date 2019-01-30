import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html"
})
export class AdminComponent implements OnInit {
  constructor(private spinnerService: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner();
  }

  spinner(): void {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }
}
