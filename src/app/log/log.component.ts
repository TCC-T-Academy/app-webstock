import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { IEstoque, ILog } from 'src/interfaces/interface';
import { LogService } from '../log.service';
import { LogDatasource } from './log-datasource';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  @Input() logsDataSource:LogDatasource;

  displayedColumns = ['tipoMovimentacao', 'origemDestino', 'data' , 'estoqueMomento'];

  constructor(private service:LogService){
    this.logsDataSource = new LogDatasource(service);
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.warn(this.iditem)
  //   this.consultarLogsPorIdItem()
  // }

}
