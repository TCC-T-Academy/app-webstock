import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReserva } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class ReservaService {
  reservas:IReserva [] = [
    {
      id_reserva: 0,
      data_prevista: new Date(),
      ordem: "",
      quantidade_reserva: 0,
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
}
