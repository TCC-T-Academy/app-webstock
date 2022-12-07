import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { INovaReserva } from 'src/interfaces/interface';
import { ReservaService } from '../reserva.service';
import { ReservaDataSource } from './nova-reserva-datasource';

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
    this.dataSource = new ReservaDataSource(service);   
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

    displayedColumns = ['id', 'data', 'ordem',  'quantidade', 'finalizada', 'item', 'idItem', 'usuario', 'excluir'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    dataSource: ReservaDataSource;
    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;    
    }
}
