import { ContentObserver } from '@angular/cdk/observers';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { filter, Observable, Subject } from 'rxjs';
import { IEstoque, IItem, ILog } from 'src/interfaces/interface';
import { EstoqueService } from '../estoque.service';
import { LogService } from '../log.service';
import { LogDatasource } from '../log/log-datasource';
import { LogComponent } from '../log/log.component';
import { ReservaDataSource } from '../reserva/reserva-datasource';
import { EstoqueDatasource } from './estoque-datasource';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent{
  @ViewChild(MatExpansionPanel) expansion!: MatExpansionPanel;
  @ViewChild(LogComponent) logComponent!: LogComponent;
  changingValue :  Subject<IEstoque> = new Subject();

  headerName:string = ""

  dataSource: EstoqueDatasource;
  logsDataSource: LogDatasource;

  panelOpenState:Boolean = false;
  filter: string = "";

  displayedColumns1 = ['idItem','localizacao', 'estoqueReal', 'estoqueSeguranca' , 'dataFutura', 'estoqueFuturo', 'editar'];
  displayedColumns = ['localizacao', 'estoqueReal', 'estoqueSeguranca' , 'dataFutura', 'estoqueFuturo', 'editar'];

  idItem: string = ""
  showAll: Boolean = true;

  estoque: IEstoque = {
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

  logs:ILog [] = [
    {
      idItem: 0,
      tipoMovimentacao: "",
      origemDestino: "",
      data: new Date(),
      quantidade: 0,
      estoqueMomento: 0
    }
  ]

constructor(private service:EstoqueService, private logService:LogService){
  this.dataSource = new EstoqueDatasource(service);
  this.logsDataSource = new LogDatasource(logService);
  this.consultarTodos();
}
  ngAfterViewInit(): void {
    
  } 

  consultarPorIdItem(idItem?:any){
    if(idItem){
      this.idItem = idItem.toString();
    }    

    this.dataSource.idItem = this.idItem;

    this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe((res) => {
      //Apenas por que funciona
      this.dataSource.consultarEstoquePorIdItem();      
      this.estoque = res;
      this.showAll = false;

      this.logService.consultarLogsPorIdItem(parseFloat(this.idItem)).subscribe((res) => {
        this.logsDataSource.data = res;
        this.logsDataSource.idItem = this.idItem;
        this.logsDataSource.consultarLogsIdItem();
      })

    });

    
  }

  consultarTodos(){
    this.dataSource.consultarEstoque();
    this.showAll = true;
    this.idItem = "";
  }

  consultarEstoqueBaixo(){
    this.dataSource.consultarEstoqueBaixo();
    this.showAll = true;
    this.idItem = "";
  }


  openClose(state:Boolean,estoque:IEstoque):Boolean{    
    this.panelOpenState = state;
    if(this.panelOpenState){
      this.filter = (estoque.idEstoque) ? `${estoque.localizacao}` : "" ;
      this.dataSource.filter = this.filter;
      console.log(this.filter);
    }

    return this.panelOpenState;
  }

}