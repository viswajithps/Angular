import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string='';
  password: string='';

  onSubmit(): void {
    if (this.email && this.password) {
      // Handle login logic here
      console.log('Login attempted with:', this.email, this.password);
    }
  }

}
