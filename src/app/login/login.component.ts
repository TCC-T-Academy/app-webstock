import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    private decodeToken: DecodeTokenService,
    private router: Router){}
   

  fazerLogin(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token => {
        localStorage.setItem('token', JSON.stringify(token))
        if(token != ""){
          this.router.navigate([''])
        }
      }
    )
    
    

    console.log(form.email, form.senha)
  }


  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario) 
  }

}
