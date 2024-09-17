import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchProduct():Observable<any>{
    let url="https://jsonplaceholder.typicode.com/posts";
    return this.http.get(url);
  }
}
