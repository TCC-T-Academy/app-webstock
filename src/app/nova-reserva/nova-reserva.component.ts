import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { IEstoque, INovaReserva, IReserva } from 'src/interfaces/interface';
import { EstoqueService } from '../estoque.service';
import { NotificationService } from '../notification.service';
import { ReservaAtualizarComponent } from '../reserva-atualizar/reserva-atualizar.component';
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

  constructor(private service:ReservaService, private serviceEstoque:EstoqueService, private notifier:NotificationService){    
    this.dataSource = new ReservaDataSource(service);  

  }


  ngOnInit(): void {}

  cadastrar(nReserva:INovaReserva){
    this.reserva.finalizada = false;
    this.reserva.quantidadeReserva = nReserva.quantidadeReserva;
    this.reserva.dataPrevista = nReserva.dataPrevista;
    this.reserva.ordem = nReserva.ordem;
    let usuario = JSON.parse(localStorage.getItem("usuarioLogado")!);
    this.reserva.idUsuario = usuario.idUsuario;
    this.reserva.idItem = nReserva.idItem;
    this.enviar(this.reserva);
  }

  enviar(reserva:INovaReserva){
    console.log(this.reserva)

      this.service.cadastroReserva(this.reserva)
      .subscribe(data => {
                    this.consultar.emit();
                    this.ngOnInit();
                    this.dataSource.consultarReservas();
                    this.verificaEstoqueFuturo(data);
                    console.log(data)},
                    )

    }


    displayedColumns = ['id', 'data', 'ordem',  'quantidade', 'finalizada', 'item', 'idItem', 'usuario', 'editar', 'excluir'];

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    dataSource: ReservaDataSource;
    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;    
    }

    verificaEstoqueFuturo(reserva: IReserva){
      let estoque: IEstoque = {
          idEstoque: 0,
          localizacao: "",
          estoqueReal: 0,
          item: {
              idItem: 0,
              descricao: "",
              grupo: "",
              familia: "",
              unidade: "",
              estoqueSeguranca: 0
          }
        }
      // let idItem: number = (typeof(reserva.item.idItem) == undefined)?0:reserva.item.idItem; 
      this.serviceEstoque.consultarEstoquePorIdItem(this.reserva.idItem).subscribe(res => {estoque = res;
        if(estoque.estoqueFuturo){
          if(estoque.estoqueFuturo <= estoque.item.estoqueSeguranca){
            this.notifier.showWarn(`Atenção! Estoque crítico a partir do dia ${this.reserva.dataPrevista}!`)
          }else{
            this.notifier.showSuccess(`Reserva criada com sucesso!`)
          }
        }
      
    })
      
    }
    teste:INovaReserva = {
      finalizada: false, quantidadeReserva: 0, dataPrevista: new Date(), ordem: "", idUsuario: 0, idItem: 0
    };
    escrever(r:INovaReserva, idItem:number) {

      this.teste = r;
      this.teste.idItem = idItem;
      //this.teste.idItem = parseInt(item);
      this.book = { obj: this.teste  }
    }

  book = { obj: this.teste }
  
}
