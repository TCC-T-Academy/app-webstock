import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovimentacao, INovaMovimentacao } from 'src/interfaces/interface';
import { AuthService } from './login/auth.service';

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
    usuario:{nome:"", idUsuario: 0, email: "", role: ""}
  }] 

  constructor(private http: HttpClient, private auth:AuthService) { }

  consultarMovimentacoes(){
    return this.http.get<[IMovimentacao]>("http://localhost:8081/movimentacoes", {
      headers: this.auth.getHeaderWithToken()
    });
  }

  consultarMovimentacoesPorIdItem(idItem:number){
    if(isNaN(idItem)){
      throw Error("ID Inválido!")
    }
    
    return this.http.get<[IMovimentacao]>(`http://localhost:8081/movimentacoes/${idItem}`, {
      headers: this.auth.getHeaderWithToken()
    });
  }

  entradaItem(mov:INovaMovimentacao){
    return this.http.post<IMovimentacao>(`http://localhost:8081/movimentacoes/entrada`,mov, {
      headers: this.auth.getHeaderWithToken()
    });
  }

  saidaItem(mov:INovaMovimentacao){
    return this.http.post<IMovimentacao>(`http://localhost:8081/movimentacoes/saida`,mov, {
      headers: this.auth.getHeaderWithToken()
    });
  }

 
}
