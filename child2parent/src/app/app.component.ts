import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child2parent';

  item:Array<string>=[];

  
  childData(value:string){
    this.item.push(value);
    
  }
}
