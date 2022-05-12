import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from 'src/app/Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
private httpOptions;
  constructor(private httpClient:HttpClient) { 
    this.httpOptions={
      Headers:new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
  GetAllProducts():Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/Product`)
  }
  GetProductByID(productid:number): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.BaseURL}/Product/${productid}`);
  }
  GetProductsByCatID(catID: number): Observable<IProduct[]>
  {
    if(catID==0){
      return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/Product`)
    }
    else{
    return this.httpClient.get<IProduct[]>(`${environment.BaseURL}/Product/Catid?catID=${catID}`);

    }
  }
}
