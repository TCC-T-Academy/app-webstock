import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './estoque/estoque.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component';
import { ItemComponent } from './item/item.component';
import { ReservaComponent } from './reserva/reserva.component';
import { PrevisaoComponent } from './previsao/previsao.component';
import { ErroComponent } from './erro/erro.component';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    MovimentacaoComponent,
    ItemComponent,
    ReservaComponent,
    PrevisaoComponent,
    ErroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    BrowserModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
