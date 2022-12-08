import { IUsuarioNovo } from './../../interfaces/interface';
import { Component, OnInit } from '@angular/core';
import { GestaoUsuariosService } from '../gestao-usuarios.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(
    private service: GestaoUsuariosService,
    private notifier: NotificationService){
  }

  role: string = '';

  usuario: IUsuarioNovo = {
    nome: "", email: "", role: "", senha: ""
  }

  cadastrar(novoUsuario: IUsuarioNovo) {
    this.usuario.email = novoUsuario.email;
    this.usuario.nome = novoUsuario.nome;
    this.usuario.role = novoUsuario.role;
    this.usuario.senha = novoUsuario.senha;
    this.enviar(this.usuario);
  }

  enviar(usuario: IUsuarioNovo){
    console.log(this.usuario)
    this.service.cadastrarUsuario(this.usuario).subscribe(data => {

      this.ngOnInit();

      console.log(data)})
    this.notifier.showSuccess("Usuário cadastrado com sucesso!")
  }

  ngOnInit(): void {

  }

}
