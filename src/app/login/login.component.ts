import { Component } from '@angular/core';
import { DecodeTokenService } from '../decode.token.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    private auth: AuthService,
    private decodeToken: DecodeTokenService){}
   

  fazerLogin(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token => {
        localStorage.setItem('token', JSON.stringify(token))
      }
    )
    console.log(form.email, form.senha)
  }


  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario) 
  }

}
