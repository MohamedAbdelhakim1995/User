import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from 'src/app/Models/ICategory'
@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {
  private httpOptions;
  constructor(private httpclient:HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       
      })} 
  }
GetAllCategories():Observable<ICategory[]>
  {
    return this.httpclient.get<ICategory[]>(`${environment.BaseURL}/Category`)
  }

GetCategoryByID(Categoryid:number):Observable<ICategory>
  {
    return this.httpclient.get<ICategory>(`${environment.BaseURL}/Category/${Categoryid}`);
  }

}
