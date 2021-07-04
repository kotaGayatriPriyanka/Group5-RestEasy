import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Search } from '../model/search';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl = 'http://localhost:8082/api/food';
  constructor(private http: HttpClient) { }
  foodArray: Array<Search> = [];
  totalprice: number = 0;
  totalquantity: number = 0;
  b: boolean = false;
  //to display all menu details
  getMenuList(rname: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/restuarantName/${rname}`)
  }
  getFoodByName(foodName: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/searchByFood/${foodName}`)
  }



}
