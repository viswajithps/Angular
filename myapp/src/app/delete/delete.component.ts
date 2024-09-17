import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
id:string=''
  constructor(private productService:ProductService){}


  onSubmit(){
    this.productService.deleteProduct(this.id).subscribe(
      (data)=>{
        alert(data);
        console.log(data);
      }    )
      
  }

}
