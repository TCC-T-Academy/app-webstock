import { HttpClient } from '@angular/common/http';
import { IUsuarioPublico, IUsuarioNovo } from './../interfaces/interface';
import { Injectable } from '@angular/core';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GestaoUsuariosService {

usuarioNovo: IUsuarioNovo = {
    idUsuario: 0,
    nome: '',
    senha: '',
    email: '',
    role: ''
}


usuarioPublico: IUsuarioPublico = {
    idUsuario: 0,
    nome: "",
    email: "",
    role: ""
}
  constructor(private http:HttpClient, private auth:AuthService) {

  }

  consultarUsuarios(){
    return this.http.get<[IUsuarioPublico]>("http://localhost:8081/usuarios", {
      headers:this.auth.getHeaderWithToken()
    });
  }

  consultarUsuarioByEmail(email:string){
    return this.http.get<IUsuarioPublico>(`http://localhost:8081/usuarios/${email}`, {
      headers:this.auth.getHeaderWithToken()
    });
  }

  cadastrarUsuarios(usuario: IUsuarioNovo){
    return this.http.post<IUsuarioPublico>(`http://localhost:8081/usuarios/novo`,usuario,{
      headers:this.auth.getHeaderWithToken()
    });
  }


  cadastrarUsuario(novoUsuario: INovoUsuario){
    return this.http.post<IUsuario>("http://localhost:8081/usuarios/novo", {
      headers:this.auth.getHeaderWithToken()
    });
  }
}
