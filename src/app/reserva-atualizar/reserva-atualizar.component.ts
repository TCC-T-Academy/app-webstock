import { Component, EventEmitter, Output, Input } from '@angular/core';
import { INovaReserva } from 'src/interfaces/interface';
import { NovaReservaComponent } from '../nova-reserva/nova-reserva.component';
import { ReservaService } from '../reserva.service';
import { ReservaDataSource } from '../reserva/reserva-datasource';

@Component({
  selector: 'app-reserva-atualizar',
  templateUrl: './reserva-atualizar.component.html',
  styleUrls: ['./reserva-atualizar.component.css']
})
export class ReservaAtualizarComponent {

  disableCtrl: boolean = false
  idReserva = "";
  idItem = "";
  quantidadeReserva = "";
  dataPrevista = new Date('null');
  ordem = "";


  reserva:INovaReserva = {
    finalizada: false, quantidadeReserva: 0, dataPrevista: new Date(), ordem: "", idUsuario: 0, idItem: 0
  };
  constructor(private service:ReservaService, private novaReservaC:NovaReservaComponent){
    this.dataSource = new ReservaDataSource(service);
  }
  ngOnInit() {
    // this.escreve(this.editar);
  }

  dataSource: ReservaDataSource;
  reservaId: number = 0;

  altera(nReserva:INovaReserva){
    this.reserva.finalizada = false;
    this.reserva.quantidadeReserva = nReserva.quantidadeReserva;
    this.reserva.dataPrevista = nReserva.dataPrevista;
    this.reserva.ordem = nReserva.ordem;
    this.reserva.idUsuario = 1;
    this.reserva.idItem = nReserva.idItem;
    this.reservaId = nReserva.idReserva!;
    this.alterar(this.reservaId, this.reserva);
  }
  alterar(idReserva: number, reserva:INovaReserva){


    this.service.alteraReserva(idReserva, reserva)
    .subscribe(data => {
                  this.consultar.emit();
                  this.ngOnInit();
                  this.novaReservaC.dataSource.consultarReservas()},
                  )

  }
  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();

  @Input() editar:any;

  escreve(editar:INovaReserva) {
    
    this.idReserva = editar.idReserva!.toString();
    this.idItem = editar.idItem.toString();
    this.quantidadeReserva = editar.quantidadeReserva.toString();
    this.dataPrevista = new Date(editar.dataPrevista);
    this.ordem = editar.ordem;

    console.log("777");
  }
  limpar() {
    this.idReserva = "";
    this.idItem = "";
    this.quantidadeReserva = "";
    this.dataPrevista = new Date('null');
    this.ordem = "";
    console.log("oi");
  }
}
