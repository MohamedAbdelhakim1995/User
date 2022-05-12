import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/ICategory';
import { CategoryAPIService } from 'src/app/Services/category-api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  AllCategoryList: ICategory[] ;
  SelectedId:number=0;
  constructor(private catAPiService:CategoryAPIService) 
  { 
    this.AllCategoryList=[]
  }

  ngOnInit(): void {
    this.catAPiService.GetAllCategories().subscribe(catList=>{this.AllCategoryList=catList});
  }
  
}
