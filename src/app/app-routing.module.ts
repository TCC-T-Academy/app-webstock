import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';
import { AuthAdmService } from './auth.adm.service';
import { AuthUsuarioService } from './auth.usuario.service';
import { HomeComponent } from './home/home.component';
import { NovaPrevisaoComponent } from './nova-previsao/nova-previsao.component';
import { NovaReservaComponent } from './nova-reserva/nova-reserva.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate:[AuthUsuarioService]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'estoque',
    component: EstoqueComponent,
    canActivate:[AuthUsuarioService]
  },
  {
    path:'movimentacoes',
    component: MovimentacaoComponent,
    canActivate:[AuthUsuarioService]
  },
  {
    path:'reservas',
    component: ReservaComponent,
    canActivate:[AuthUsuarioService]
  },
  {
    path:'previsoes',
    component: PrevisaoComponent,
    canActivate:[AuthUsuarioService]
  },
  {
    path:'novaprevisao',
    component: NovaPrevisaoComponent,
    canActivate:[AuthAdmService]
  },
  {
    path:'novareserva',
    component: NovaReservaComponent,
    canActivate:[AuthAdmService]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
