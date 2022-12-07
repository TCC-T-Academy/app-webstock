import { IReserva } from 'src/interfaces/interface';
import { MatTableDataSource } from '@angular/material/table';
import { ReservaService } from '../reserva.service';




  export class ReservaDataSource extends MatTableDataSource<IReserva> {

    idItem: string = ""  


  
    constructor(private service:ReservaService) {
      super();
      this.consultarReservas();
    }

    consultarPrevisoesPorIdItem(){
      this.service.consultarReservasPorIdItem(parseInt(this.idItem)).subscribe(data =>this.data = data)
    }

    consultarReservas(){
      this.service.consultarReservas().subscribe(data =>this.data = data)
    }

    excluir(idItem:number){
      this.service.excluir(idItem).subscribe(() =>
      this.consultarReservas())      
  }
}