import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-gn',
  templateUrl: './shop-item-gn.component.html',
  styleUrls: ['./shop-item-gn.component.css']
})
export class ShopItemGNComponent implements OnInit {

  @Input() id: number;
  @Input() text: string

  constructor() { }

  ngOnInit(): void {
  }

}
