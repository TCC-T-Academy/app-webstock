import { Component, OnInit } from '@angular/core';
import { ILog } from 'src/interfaces/interface';
import { LogService } from '../log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  idItem: number = 1600

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

  constructor(private service:LogService){
      
  }

  ngOnInit(): void {
    this.consultarLogsPorIdItem()
  }

  consultarLogsPorIdItem(){
    this.service.consultarLogsPorIdItem(this.idItem).subscribe(data =>this.logs = data)
  }

}
