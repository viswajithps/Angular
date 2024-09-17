import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
private token!:string;
  constructor(private http:HttpClient) { }

  sendTokenRequest():Observable<{jwt:string}>{
    let jsonRequestBody:any={username:'foo',password:'foo'};

    let url='http://localhost:8787/authenticate';
    return this.http.post<{jwt:string}>(url,jsonRequestBody);
  }

  sendAuthReq(token:string):Observable<string>{
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    let url='http://localhost:8787/greet';
    return this.http.get(url,{headers,responseType:'text'});
  }

  
}
