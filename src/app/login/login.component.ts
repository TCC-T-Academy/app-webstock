import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DecodeTokenService } from '../decode.token.service';
import { AuthService } from './auth.service';
import jwt from "jwt-decode";
import { GestaoUsuariosService } from '../gestao-usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(
    private auth: AuthService,
    private decodeToken: DecodeTokenService,
    private router: Router,
    private gestaoUsuarioService: GestaoUsuariosService){}
   

  fazerLogin(form: any){
    this.auth.logar(form.email, form.senha).subscribe(
      token => {
        let t = JSON.stringify(token)
        localStorage.setItem('token', t)
        if(token != ""){
          let user:any = jwt(t)
        this.gestaoUsuarioService.consultarUsuarioByEmail(user.user_name).subscribe(res => {localStorage.setItem("usuarioLogado", JSON.stringify(res))})
          this.router.navigate(['estoque'])
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
