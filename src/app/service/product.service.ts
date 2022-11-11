import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product {
  id?: number | string;
  name: string;
  description: string;
  category: string;
  moreDes: string;
  price: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _api = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this._api + '/product');
  }
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(this._api + '/product/' + id);
  }
}
