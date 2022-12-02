import { Component, Input } from '@angular/core';
import { ILog } from 'src/interfaces/interface';
import { LogService } from '../log.service';
import { LogDatasource } from './log-datasource';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  @Input() logs: any;
  idItem:string = ""
  dataSource:LogDatasource

  displayedColumns = ['tipoMovimentacao', 'origemDestino', 'data' , 'quantidade', 'estoqueMomento'];

  /*logs:ILog [] = [
    {
      idItem: 0,
      tipoMovimentacao: "",
      origemDestino: "",
      data: new Date(),
      quantidade: 0,
      estoqueMomento: 0
    }
  ]*/

  constructor(private service:LogService){
    this.dataSource = new LogDatasource(service);
  }
  /*ngOnChanges(changes: SimpleChanges): void {
    console.warn(this.iditem)
    this.consultarLogsPorIdItem()
  }

  ngOnInit(): void {
    console.warn(this.iditem)
    this.consultarLogsPorIdItem()
  }*/

  consultarLogsPorIdItem(){
    this.dataSource.idItem = this.idItem
  }

}
