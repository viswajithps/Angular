import { Component } from '@angular/core';
import { FormBuilder,Validator,FormArray, Validators } from '@angular/forms';
import { Product } from '../Product';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
//suppliers: any;
//[x: string]: any;

  product=new Product('','','',0,0)

  constructor(private formBuilder:FormBuilder){}

  productForm=this.formBuilder.group({
    productid:[,[Validators.required,Validators.minLength(8)]],
    brand:[''],
    description:this.formBuilder.group({
      age:[0],
      seasons:[''],
    }),
    qty:[0],
    price:[0],
    suppliers:this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  onSubmit(){
    console.log(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['suppliers'].value);

    this.product.productId=this.productForm.controls['productid'].value!;
    console.log(this.product);
  }

  get suppliers(){
    return this.productForm.get('suppliers') as FormArray
  }
  addNewSupplier(){
    console.warn(this.suppliers);
    this.suppliers.push(this.formBuilder.control(''));
  }

}
