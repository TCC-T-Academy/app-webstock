import { AfterViewInit, Component } from '@angular/core';
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

export class LoginComponent implements AfterViewInit{

  constructor(
    private auth: AuthService,
    private decodeToken: DecodeTokenService,
    private router: Router,
    private gestaoUsuarioService: GestaoUsuariosService){}

  ngAfterViewInit(): void {
    let token:any | undefined = localStorage.getItem('token');
    let user:any | undefined = localStorage.getItem('usuarioLogado');

    if(token && user){
      token = JSON.stringify(token);
      user = JSON.stringify(user);
    }
    
    if(token != ""){
      let jwtObj:any = jwt(token);
      if(jwtObj.user_name == user.email){
        this.router.navigate(['estoque'])
      }
    }
  }
   

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
  }


  verToken(){
    let usuario = this.decodeToken.decodeTokenJWT()
    console.log(usuario) 
  }

}
