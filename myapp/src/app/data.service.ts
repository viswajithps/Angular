import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products:Product[]=[];
  constructor() {
  
        this.products[0]= new Product('S1021',"Tata","Dish TV",10,2500);

        this.products[1]= new Product('S1022',"Wipro","Bulbs",210,300);
        this.products[2]= new Product('S1023',"TVS","Belts",220,1500);
        this.products[3]= new Product('X1021',"Reliance","Dish TV",50,5500);
        this.products[4]= new Product('Y1026',"Samsung","TV",100,65000);
        this.products[5]= new Product('Z1021',"Apple","SmartWatch",430,85000);
        this.products[6]= new Product('S1025',"Tata","Car",1000,2500000);
        this.products[7]= new Product('S1029',"Tata","Salt",2500,20);
        this.products[8]= new Product('S1067',"TVS","Bike",220,150000);
        this.products[9]= new Product('S1070',"TVS","Scooter",520,75000);
        this.products[10]= new Product('Y1027',"Samsung","Smart watch",100,15000);
        this.products[11]= new Product('Y1028',"Samsung","Mobile",1000,200000);
        this.products[12]= new Product('Z1022',"Apple","Iphone",630,150000);
        this.products[13]= new Product('Z1024',"Apple","Ipad",7930,105000);


        
   }
   getProducts():Product[]{
    return this.products;
   }
}
