import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ShopGNComponent } from './components/shop-gn/shop-gn.component';
import { ShopItemGNComponent } from './components/shop-item-gn/shop-item-gn.component';
import { ShopDetailsGNComponent } from './components/shop-details-gn/shop-details-gn.component';
import {GNDataService} from "./service/gn-data.service";


@NgModule({
  declarations: [
    AppComponent,
    ShopGNComponent,
    ShopItemGNComponent,
    ShopDetailsGNComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GNDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
