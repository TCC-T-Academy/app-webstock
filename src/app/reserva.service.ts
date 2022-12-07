import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INovaReserva, IReserva } from 'src/interfaces/interface';
import { AuthService } from './login/auth.service';

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

  constructor(private http: HttpClient, private auth:AuthService) { }

  consultarReservas(){
    return this.http.get<[IReserva]>("http://localhost:8081/reservas", {
      headers: this.auth.getHeaderWithToken()
  });
  }
  consultarReservasPorIdItem(idItem: number){
    if(isNaN(idItem)){
      throw Error("ID Inválido!")
    }
    return this.http.get<[IReserva]>(`http://localhost:8081/reservas/${idItem}`, {
      headers: this.auth.getHeaderWithToken()
  });
  }
  cadastroReserva(reserva:INovaReserva){
    return this.http.post<IReserva>(`http://localhost:8081/reservas`,reserva, {
      headers: this.auth.getHeaderWithToken()
  });
  }
  alteraReserva(idReserva:number ,reserva:INovaReserva){
    return this.http.put<IReserva>(`http://localhost:8081/reservas/${idReserva}`, reserva, {
      headers: this.auth.getHeaderWithToken()
    });
  }
  excluir(idItem:number){
    return this.http.delete<string>(`http://localhost:8081/reservas/${idItem}`, {
      headers: this.auth.getHeaderWithToken()
    });
  }

}
