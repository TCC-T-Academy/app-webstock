import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPrevisao } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class PrevisaoService {
  previsoes: IPrevisao [] = [
    {
      id_previsao: 0,
      data_prevista: new Date(),
      ordem: "",
      quantidade_prevista: 0,
      finalizada: false,
      item: {
        descricao:"",
        estoqueSeguranca:0,
        familia:"",
        grupo:"",
        unidade:""
      },
      usuario: {
        email:"",
        perfil:"",
        senha:"",
        nome:""
      }
    }
  ]

  constructor(private http: HttpClient) { }

  consultarPrevisoes(){
    return this.http.get<[IPrevisao]>("http://localhost:8081/previsoes");
  }

  // consultarPrevisoesPorIdItem(idItem: number){
  //   return this.http.get<[IPrevisao]>(`http://localhost:8081/previsoes/iditem/${idItem}`);
  // }
  consultarPrevisoesPorIdItem(idItem: number){
    return this.http.get<[IPrevisao]>(`http://localhost:8081/previsoes/iditem/${idItem}`);
  }
}
