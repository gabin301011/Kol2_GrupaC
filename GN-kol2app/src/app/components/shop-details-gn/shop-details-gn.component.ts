import { Component, OnInit } from '@angular/core';
import {GNDataService} from "../../service/gn-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop-details-gn',
  templateUrl: './shop-details-gn.component.html',
  styleUrls: ['./shop-details-gn.component.css']
})
export class ShopDetailsGNComponent implements OnInit {

  public text: string;
  public id: number;

  constructor(private service: GNDataService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string;
    this.activatedRoute.paramMap.subscribe(params =>{
      id = params.get("id");
    });
    if(id => 1 && id <= 3){
      this.service.getById(id).subscribe(response =>{
        this.text = response['text'];
      });
    } else {
      this.id = 1;
    }
  }

}
