import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  productD:Product[]=[];
  product:Product=new Product('','','',0,0);
  pro:Product|null=null;

  constructor(private productService:ProductService){}

  onSubmit(){
    this.productService.updateProduct(this.product.productId,this.product).subscribe(
      (data)=>{
        console.log(data);
        this.pro=data;
      }
    )

  }

}
