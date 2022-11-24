import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReserva } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {
  reservas:IReserva [] = [
    {
      idReserva: 0,
      dataPrevista: new Date(),
      ordem: "",
      quantidadeReserva: 0,
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

  consultarReservas(){
    return this.http.get<[IReserva]>("http://localhost:8081/reservas");
  }
  consultarReservasPorIdItem(idItem: number){
    return this.http.get<[IReserva]>(`http://localhost:8081/reservas/iditem/${idItem}`);
  }

}
