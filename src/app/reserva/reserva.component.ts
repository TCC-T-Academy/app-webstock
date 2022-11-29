import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { IReserva } from 'src/interfaces/interface';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements OnInit  {
  
  idItem: string = ""

  
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

  constructor(private service:ReservaService){
    
  }
  ngOnInit(): void {
    this.service.consultarReservas().subscribe(data => this.reservas = data)
  }

  consultarReservas(){
    this.service.consultarReservas().subscribe(data =>this.reservas = data)
  }

  consultarReservasPorIdItem(){
    this.service.consultarReservasPorIdItem(parseInt(this.idItem)).subscribe(data =>this.reservas = data)
  }

}
