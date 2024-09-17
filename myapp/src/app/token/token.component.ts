import { Component } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
password='';
username='';
jwtt:string="";
constructor(private tokenService:TokenService){}
onSubmit(){
  this.tokenService.sendTokenRequest().subscribe(
    (data)=>{console.log(data),
      this.jwtt=data.jwt
      console.log(this.jwtt);
    }
  )
}
onAuth(){
  this.tokenService.sendAuthReq(this.jwtt).subscribe(
    (data)=>{console.log(data)
      alert(data);
    }
  )
}
}
