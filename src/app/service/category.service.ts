import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private _api = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getAllCategory() :Observable<Category[]>{
    return this.http.get<Category[]>(this._api + '/category')
  }
}
