import { Component, OnInit, ViewChild } from '@angular/core';
import { IMovimentacao } from '../../interfaces/interface'
import { MovimentacaoService } from '../movimentacao.service';
import { FormGroup, FormControl } from'@angular/forms';
import { ItemComponent } from '../item/item.component';
import { NovaMovimentacaoComponent } from '../nova-movimentacao/nova-movimentacao.component';

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

  displayedColumns = ['data', 'origem', 'tipo',  'quantidade', 'localizacao', 'idItem'];

  constructor(private service:MovimentacaoService){  
    this.consultarTodas()
  }

  consultarTodas(){
    this.service.consultarMovimentacoes().subscribe(data =>this.movimentacoes = data)
  }
  
  consultar(idItem:number = 0){
    if (idItem > 0){
      this.service.consultarMovimentacoesPorIdItem(idItem).subscribe(data =>this.movimentacoes = data)
    } else{
      this.service.consultarMovimentacoes().subscribe(data =>this.movimentacoes = data)
    }
  }

}
