import { IReserva } from 'src/interfaces/interface';
import { ReservaService } from '../reserva.service';
import { MatTableDataSource } from '@angular/material/table';

  /**
   * Data source for the PrevisaoTest view. This class should
   * encapsulate all logic for fetching and manipulating the displayed data
   * (including sorting, pagination, and filtering).
   */
  export class ReservaDataSource extends MatTableDataSource<IReserva> {
    //data: PrevisaoTestItem[] = EXAMPLE_DATA;
    //paginator: MatPaginator | undefined;
    //sort: MatSort | undefined;
    idItem: string = ""  
  
    constructor(private service:ReservaService) {
      super();
      service.consultarReservas().subscribe(res => this.data = res);
    }

    consultarReservasPorIdItem(){
      this.service.consultarReservasPorIdItem(parseInt(this.idItem)).subscribe(data =>this.data = data)
    }

    consultarReservas(){
      this.service.consultarReservas().subscribe(data =>this.data = data)
    }
  }

 
  