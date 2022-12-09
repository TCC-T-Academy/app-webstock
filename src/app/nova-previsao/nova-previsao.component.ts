import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { INovaPrevisao } from 'src/interfaces/interface';
import { NotificationService } from '../notification.service';
import { PrevisaoService } from '../previsao.service';
import { PrevisaoDataSource } from './nova-previsao-datasource';

@Component({
  selector: 'app-nova-previsao',
  templateUrl: './nova-previsao.component.html',
  styleUrls: ['./nova-previsao.component.css']
})
export class NovaPrevisaoComponent implements OnInit {

  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();

  idItem:number | undefined;

  prev:INovaPrevisao = {
    quantidadePrevista: 0, dataPrevista: new Date(), ordem: "", finalizada: false,
    idUsuario: 0, idItem: 0,
  };
  
  disableCtrl: boolean = false

  constructor(private service:PrevisaoService, private notifier:NotificationService){
     this.dataSource = new PrevisaoDataSource(service);

  }
  ngOnInit(): void {}

  cadastrar(nPrev:INovaPrevisao){
    let idPrevisao = 1;
    this.prev.ordem = nPrev.ordem;
    this.prev.quantidadePrevista = nPrev.quantidadePrevista;
    this.prev.idItem = nPrev.idItem;
    let usuario = JSON.parse(localStorage.getItem("usuarioLogado")!);
    this.prev.idUsuario = usuario.idUsuario;
    this.prev.dataPrevista = nPrev.dataPrevista;
    this.prev.finalizada = false;
    this.enviar(this.prev);


  }

  enviar(prev:INovaPrevisao){
    console.log(this.prev)

      this.service.cadastroPrevisao(this.prev)
      .subscribe(data => {
                    this.consultar.emit();
                    this.ngOnInit();
                    if(data.idPrevisao){
                      if(data.idPrevisao > 0){
                        this.notifier.showSuccess("Previsao criada com sucesso!")
                      }
                    }
                    this.dataSource.consultarPrevisoes();
                    })

    }


    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    dataSource: PrevisaoDataSource;

    displayedColumns = ['id', 'data', 'ordem',  'quantidade', 'finalizada', 'item', 'idItem', 'usuario', 'editar', 'excluir'];

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;    
    }
    editar:INovaPrevisao = {
      finalizada: false, quantidadePrevista: 0, dataPrevista: new Date(), ordem: "", idUsuario: 0, idItem: 0
    };
    escrever(r:INovaPrevisao, idItem:number) {

      this.editar = r;
      this.editar.idItem = idItem;
      //this.teste.idItem = parseInt(item);
      this.book = { obj: this.editar  }
      }

  book = { obj: this.editar }

  }
