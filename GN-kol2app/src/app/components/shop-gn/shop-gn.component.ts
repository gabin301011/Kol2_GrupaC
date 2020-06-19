import { Component, OnInit } from '@angular/core';
import {GNDataService} from "../../service/gn-data.service";

@Component({
  selector: 'app-shop-gn',
  templateUrl: './shop-gn.component.html',
  styleUrls: ['./shop-gn.component.css']
})
export class ShopGNComponent implements OnInit {

  public items$: any;

  constructor(private service: GNDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }

}
