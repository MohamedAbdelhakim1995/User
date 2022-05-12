import { Component, Inject, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductAPIService } from 'src/app/Services/product-api.service';
import { MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ProductComponent } from '../product/product.component';
 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 // CurrntId:number;
  currProduct :IProduct={} as IProduct;
 
  constructor(private proAPIservise:ProductAPIService
    ,private dialogRef: MatDialogRef<ProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number)
    { 
     
    }
  ngOnInit(): void {
    /* this.CurrntId=Number(this.activatedRoute.snapshot.paramMap.get("pid"));
    this.proAPIservise.GetProductByID(this.CurrntId).subscribe(prd=>{this.currProduct=prd;});  */
   this.proAPIservise.GetProductByID(this.data).subscribe(prd=>{this.currProduct=prd});

  }
  close(){
    this.dialogRef.close();
  }
}
