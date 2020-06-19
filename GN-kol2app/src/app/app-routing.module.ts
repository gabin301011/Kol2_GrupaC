import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopGNComponent} from "./components/shop-gn/shop-gn.component";
import {ShopDetailsGNComponent} from "./components/shop-details-gn/shop-details-gn.component";


const routes: Routes = [
  {
    path: "shop/items",
    component: ShopGNComponent,
  },
  {
    path: "shop/items/:id",
    component: ShopDetailsGNComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
