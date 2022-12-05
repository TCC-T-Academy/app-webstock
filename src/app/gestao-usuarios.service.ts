import { HttpClient } from '@angular/common/http';
import { IUsuario } from './../interfaces/interface';
import { Injectable } from '@angular/core';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GestaoUsuariosService {

  usuarios: IUsuario[] = [
    {
      idUsuario: 0,
      email: "",
      nome: "",
      perfil: "",
      senha: ""
    }
  ]

  constructor(private http:HttpClient, private auth:AuthService) {

  }

  consultarUsuarios(){
    return this.http.get<[IUsuario]>("http://localhost:8081/usuarios", {
      headers:this.auth.getHeaderWithToken()
    });
  }
}
