import { style } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'myapp',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,DoCheck,AfterContentChecked,AfterViewInit,AfterViewChecked {

  title:string='myapp';
  constructor(){
    console.log('Constructor() is called.....Parent');
  }
  ngOnDestroy(): void {
    console.log('Destroy() is called.....Parent');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit(.... from Parent');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked(.... from Parent');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() is called.....Parent');
  }
  ngOnInit(): void {
    console.log('ngOnInit() is called.....Parent');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange() is called.....Parent');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() is called.....Parent');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck() is called.....Parent');
  }


  
  // title = 'Viswajith';
  // location="Trivandrum";
  // company="UST";


  // productid='AZ101#789';
  // Description='Dual Camera Dual Sim 512 GB';
  // available='true';
  // instock=this.available;
  // qty=200;
  // orderqty=0;
  // orderDate:Date=new Date;
  // isorderedQtyAvailable=(this.orderqty<this.qty)?true:false;
  // deliverColor="red";
  // evenColor="grey";
  // oddColor="cyan"

  // products=[{"productid":1234,"Description":"Mobile","price":"75000"},
  //   {"productid":1235,"Description":"Tab","price":"95000"},
  //   {"productid":1236,"Description":"Laptop","price":"100000"},
  //   {"productid":1237,"Description":"TV","price":"905000"}];

  // printOrder(input:any):void{
  //   console.log(input,'order placed');
  // }

  // exceed():void{
  //   this.deliverColor='green';
  // }
  
  
}
