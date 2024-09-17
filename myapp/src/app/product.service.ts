import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http'
import { Product } from './Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  constructor(private http:HttpClient) { }
 id=0;

  saveProduct(product:Product):Observable<Object>{
    let url='http://localhost:8090/product/api1.0/create';
    return this.http.post(url,product);
  }

  fetchProduct():Observable<any>{
    let url="http://localhost:8090/product/api1.0/fetch";
    return this.http.get(url);
  }

  fetchProductById(id:string):Observable<Product>{
    let url="http://localhost:8090/product/api1.0/fetch";
    
    return this.http.get<Product>(`${url}/${id}`);
  }

  updateProduct(id:string,product:Product):Observable<Product>{
    let url="http://localhost:8090/product/api1.0/update";
    return this.http.put<Product>(`${url}/${id}`,product);
  }

  deleteProduct(id:string):Observable<any>{
    let url="http://localhost:8090/product/api1.0/delete";
    return this.http.delete(`${url}/${id}`,{responseType:'text'});
  }
}
