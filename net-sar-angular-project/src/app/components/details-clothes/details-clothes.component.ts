import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';
import { Clothes } from 'src/app/models/clothes';

@Component({
  selector: 'app-details-clothes',
  templateUrl: './details-clothes.component.html',
  styleUrls: ['./details-clothes.component.css']
})
export class DetailsClothesComponent implements OnInit {
  private clothes: Clothes
   

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    const clothes_id = this.route.snapshot.params['id'];
    this.getDetails(clothes_id);
  }

  getDetails(id: string) {
    this.dataApi.getClothesById(id).subscribe(clothes => (this.clothes = clothes));
  }

}
