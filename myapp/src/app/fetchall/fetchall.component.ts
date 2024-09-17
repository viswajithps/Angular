import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-fetchall',
  templateUrl: './fetchall.component.html',
  styleUrls: ['./fetchall.component.css']
})
export class FetchallComponent {
  products: Product[] = [];
  pro:Product|null=null;
 id:string="";
  constructor(private productService:ProductService){}

  onSubmit(){
    //console.log(this.product);
  
   this.productService.fetchProduct().subscribe(
    // (data)=>{
      
    //   console.log(typeof(data))

    //   console.log(data.length);},
    
    (data) => {
      this.products = data;
    },

    //(error)=>{console.error(error);},
    
  );
  // alert("Product Added Successfully");
  // this.product=new Product('','','',0,0);
    
    
  }
  onGet(){

    this.productService.fetchProductById(this.id).subscribe(
      (data)=>{
        this.pro=data
      }
    )

  }

}
