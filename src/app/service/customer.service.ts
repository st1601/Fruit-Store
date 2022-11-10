import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Customer {
  id: number;
  name: string;
  description: string;
  image: string;
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _api = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAllCustomer() :Observable<Customer[]> {
    return this.http.get<Customer[]>(this._api + '/customer');
  }
}
