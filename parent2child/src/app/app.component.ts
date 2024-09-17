import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent2child';

  EnterName="John Doe";
  EnterAge="22";
  EnterStatus="Single";
  parentData1="";
  parentData2="";
  parentData3="";
  value!:string;

  transferData(){
    this.parentData1=this.EnterName;
    this.parentData2=this.EnterAge;
    this.parentData3=this.EnterStatus;
    console.log(this.parentData1);
  }

  sendData(value:string){
    this.value=value
  }

}
