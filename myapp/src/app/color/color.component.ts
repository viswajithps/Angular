import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnChanges,OnInit ,OnDestroy,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  title:string="Hello";

  constructor(){
    console.log('constructor() is called....Child');
  }
  ngOnDestroy(): void {
    console.log('Constructor() is called.....Child');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit(.... from Child');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked(.... from Child');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked(.... from Child')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit(.... from Child')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck() is called.............. from Child');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange() is called');
  }

  ngOnInit(): void {
    console.log('ngInit() called');
  }

  keyCapture(event:any){
      this.title=event.key;
  }

  sendMessage(){
    console.warn('Click event Fired');
  }

  color='white';
  fcolor='black';

  colourBlue():void{
    this.color='blue';
    this.fcolor='white';
  }
  colorWhite():void{
    this.color='white';
    this.fcolor='black';
  }

}
