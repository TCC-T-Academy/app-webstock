import { GestaoUsuariosService } from './../gestao-usuarios.service';
import { IUsuarioNovo } from './../../interfaces/interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  role: string = '';

  usuarioNovo: IUsuarioNovo = { nome:"", email:"", role:"", senha:""}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GestaoUsuariosService,
    private notifier: NotificationService){
  }

  ngOnInit(): void {
    var routeParams = this.route.snapshot.paramMap
    let email: string | null
    email = routeParams.get('email')
    if (email != null) {
      this.service.consultarUsuarioByEmail(email).subscribe(data => this.usuarioNovo = data);
    } else {
      this.router.navigate(['usuarios']);
    }
  }

  alterar(usuarioNovo: IUsuarioNovo){
    console.log(usuarioNovo)
    this.service.alterarUsuarioByEmail(this.usuarioNovo.email, this.usuarioNovo).subscribe(() =>
      this.notifier.showSuccess("Usuário alterado com sucesso!") )
  }

}
