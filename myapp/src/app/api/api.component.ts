import { Component } from '@angular/core';
import { Api } from '../api';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  ap:Api[]=[];

  constructor(private apiService:ApiService){}


  onSubmit(){
    this.apiService.fetchProduct().subscribe(
      (data)=>{
        this.ap=data;
      }
    )
  }

}
