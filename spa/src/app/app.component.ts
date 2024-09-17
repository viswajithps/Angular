import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spa';

  constructor(private router:Router){

  }

  renderHome(home:string){
      this.router.navigate([home]);
  }

  renderAboutus(aboutus:string){
    this.router.navigate([aboutus]);
  }

  renderRegister(register:string){
    this.router.navigate([register]);
  }
}
