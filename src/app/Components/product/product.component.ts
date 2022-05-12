import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { ProductAPIService } from 'src/app/Services/product-api.service';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {MatDialog, MatDialogModule,MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  AllProductList: IProduct[]=[] ;
  PrdListOfCat:IProduct[]=[];
  @Input() SelCatID:number=0;
 
  currProduct:IProduct|undefined=undefined;
  constructor
  (
    private prdAPIService:ProductAPIService ,
    private dialog: MatDialog
  ) 
  {}
  
  ngOnInit(): void {
  
  this.prdAPIService.GetAllProducts().subscribe(prdList=>{this.AllProductList=prdList;
  // console.log(prdList) 
   }); 
  }
  
  ngOnChanges(changes: SimpleChanges): void
  {
    console.log(this.SelCatID);
    this.prdAPIService.GetProductsByCatID(this.SelCatID).subscribe(prdList=>{this.AllProductList=prdList;
      console.log(prdList);
     // console.log(this.SelCatID);
    });
  }
OpenProductDetails(id:number)
{
  const dialogConfig = new MatDialogConfig();
   dialogConfig.data=id;
   console.log(dialogConfig.data);
  this.dialog.open(ProductDetailsComponent,dialogConfig); 

 /*  const dialogRef=this.dialog.open(ProductDetailsComponent,
    {
      width:'500px',
      data:{
        name:this.prdAPIService.GetProductByID()
      }
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.showdata=result;
    })  */
}
  
}
