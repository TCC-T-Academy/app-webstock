import { Component, Input } from '@angular/core';
import { ILog } from 'src/interfaces/interface';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {

  @Input() logs: any;


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
  }
  /*ngOnChanges(changes: SimpleChanges): void {
    console.warn(this.iditem)
    this.consultarLogsPorIdItem()
  }

  ngOnInit(): void {
    console.warn(this.iditem)
    this.consultarLogsPorIdItem()
  }

  consultarLogsPorIdItem(){
    this.service.consultarLogsPorIdItem(this.iditem).subscribe(data =>this.logs = data)
  }*/

}
