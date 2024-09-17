import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  name: string ='';
  email: string='';
  password: string='';

  onSubmit(): void {
    if (this.name && this.email && this.password) {
      // Handle signup logic here
      console.log('Signup attempted with:', this.name, this.email, this.password);
    }
  }

}
