import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GNDataService {

  private url = 'https://kol2tai.herokuapp.com';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url+'/api/shop/items');
  }

  getById(id: any){
    return this.http.get(this.url + '/api/shop/items/' + id);
  }
}
