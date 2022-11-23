import { Component } from '@angular/core';
import { IMovimentacao } from '../../interfaces/interface'
import { MovimentacaoService } from '../movimentacao.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})

export class MovimentacaoComponent {

   movimentacoes:IMovimentacao [] = [{ dataMovimentacao:new Date(),
                                  origemDestino:"",
                                  tipo:"",
                                  quantidade:0,                                  
                                  estoque:{
                                      localizacao:"",
                                      item:{descricao:"",estoqueSeguranca:0,familia:"",grupo:"",unidade:""},
                                      estoqueReal:0
                                  } ,
                                  
                                  item:{descricao:"",estoqueSeguranca:0,familia:"",grupo:"",unidade:""},
                                  usuario:{email:"",perfil:"",senha:"",nome:""}
                                }] 

  constructor(private service:MovimentacaoService){
      this.consultarTodas()
  }

  consultarTodas(){
    this.service.consultarMovimentacoes().subscribe(data =>this.movimentacoes = data)
  }
  

}
