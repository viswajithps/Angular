import { Component } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  email: string ='';
  password: string='';
  confirmPassword: string='';

  onSubmit(): void {
    if (this.email && this.password && this.confirmPassword && this.password === this.confirmPassword) {
      // Handle password reset logic here (e.g., send data to backend)
      console.log('Password reset requested for:', this.email);
      console.log('New Password:', this.password);
      // Implement your password reset logic here
    }
  }

}
