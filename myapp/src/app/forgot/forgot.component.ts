import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {

  email: string='';

  onSubmit(): void {
    if (this.email) {
      // Handle forgot password logic here (e.g., send email to backend)
      console.log('Password reset link sent to:', this.email);
    }
  }

}
