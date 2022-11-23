import { Component } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { IReserva } from 'src/interfaces/interface';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
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

  constructor(private service:ReservaService){
    this.consultarReservas()
}

  consultarReservas(){
    this.service.consultarReservas().subscribe(data =>this.reservas = data)
}

}
