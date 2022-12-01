import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INovaReserva } from 'src/interfaces/interface';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})
export class NovaReservaComponent implements OnInit {

  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();

  idItem:number | undefined;

  reserva:INovaReserva = {
    finalizada: false, quantidadeReserva: 0, dataPrevista: new Date(), ordem: "", idUsuario: 0, idItem: 0
  };

  disableCtrl: boolean = false
  constructor(private service:ReservaService){    
  }
  ngOnInit(): void {}

  cadastrar(nReserva:INovaReserva){
    this.reserva.finalizada = false;
    this.reserva.quantidadeReserva = nReserva.quantidadeReserva;
    this.reserva.dataPrevista = nReserva.dataPrevista;
    this.reserva.ordem = nReserva.ordem;
    this.reserva.idUsuario = 1;
    this.reserva.idItem = nReserva.idItem;
    this.enviar(this.reserva);
  }

  enviar(reserva:INovaReserva){
    console.log(this.reserva)

      this.service.cadastroReserva(this.reserva)
      .subscribe(data => {
                    this.consultar.emit();
                    this.ngOnInit();
                    console.log(data)})

    }

}
