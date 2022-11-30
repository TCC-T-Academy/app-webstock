import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'estoque',
    component: EstoqueComponent
  },
  {
    path:'movimentacoes',
    component: MovimentacaoComponent
  },
  {
    path:'reservas',
    component: ReservaComponent
  },
  {
    path:'previsoes',
    component: PrevisaoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
