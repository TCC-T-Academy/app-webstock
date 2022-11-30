import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { PrevisaoTestComponent } from './previsao-test/previsao-test.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
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
  },
  {
    path:'previsoes2',
    component: PrevisaoTestComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
