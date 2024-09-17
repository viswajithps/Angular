import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  productData:Product[]=[];
  product:Product=new Product('','','',0,0);

  
  // constructor(private service:DataService){
  //   this.productData=service.getProducts();
  //       console.log(this.productData);
        
        
  // }
  constructor(private productService:ProductService){}
  option=''
  
  count():number{
    return this.productData.filter(product => product.brand == this.option).length;
  }
  countTata():number{
    return this.productData.filter(products=>products.brand=="Tata").length;
  }

  countTvs():number{
    return this.productData.filter(products=>products.brand=="TVS").length;
  }

  countSamsung():number{
    return this.productData.filter(products=>products.brand=="Samsung").length;
  }

  countApple():number{
    return this.productData.filter(products=>products.brand=="Apple").length;
  }

  
  onSubmit(){
    console.log(this.product);
   // this.productData.push(this.product);
    //this.product=new Product('','','',0,0);
    //console.log(this.productData)
   // this.productService.saveProduct(this.product);
   this.productService.saveProduct(this.product).subscribe(
    (data)=>{console.log(data);},
    (error)=>{console.error(error);},
    
  );
  alert("Product Added Successfully");
  this.product=new Product('','','',0,0);
    
    
  }

}
