import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovimentacao, INovaMovimentacao } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  movimentacoes:IMovimentacao [] = [{ dataMovimentacao:new Date(),
    origemDestino:"TESTE DE ALGO",
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

  constructor(private http: HttpClient) { }

  consultarMovimentacoes(){
    return this.http.get<[IMovimentacao]>("http://localhost:8081/movimentacoes");
  }

  consultarMovimentacoesPorIdItem(idItem:number){
    return this.http.get<[IMovimentacao]>(`http://localhost:8081/movimentacoes/${idItem}`);
  }

  entradaItem(mov:INovaMovimentacao){
    return this.http.post<IMovimentacao>(`http://localhost:8081/movimentacoes/entrada`,mov);
  }

  saidaItem(mov:INovaMovimentacao){
    return this.http.post<IMovimentacao>(`http://localhost:8081/movimentacoes/saida`,mov);
  }

 
}
