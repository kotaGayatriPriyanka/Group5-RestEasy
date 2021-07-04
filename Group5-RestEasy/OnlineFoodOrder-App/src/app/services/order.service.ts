import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Address } from '../model/address';
import { orderDetails } from '../model/orderDetails';
import { Search } from '../model/search';
import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  //addOrderDetails
  private baseUrl = 'http://localhost:8082/api/orderdetails/';
  bearerToken: any;
  constructor(private http: HttpClient,private service:CredentialsService) { this.meth()}

  meth(){
    this.bearerToken= this.service.getToken();
    console.log("cartservice Token"+this.bearerToken)
   }
   //to add the orderdetails
   addOrderDetails(orders:Address): Observable<any> {
    this.meth();
    return this.http.post<any>(`${this.baseUrl}addOrderDetails`,orders,
    {
      headers: new HttpHeaders().set('Authorization',
      `Bearer ${this.bearerToken}`)      
      },);
  }
}
