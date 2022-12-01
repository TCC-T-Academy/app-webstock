import { IPrevisao } from 'src/interfaces/interface';
import { MatTableDataSource } from '@angular/material/table';
import { PrevisaoService } from '../previsao.service';

  /**
   * Data source for the PrevisaoTest view. This class should
   * encapsulate all logic for fetching and manipulating the displayed data
   * (including sorting, pagination, and filtering).
   */
  export class PrevisaoDataSource extends MatTableDataSource<IPrevisao> {
    //data: PrevisaoTestItem[] = EXAMPLE_DATA;
    //paginator: MatPaginator | undefined;
    //sort: MatSort | undefined;
    idItem: string = ""  
  
    constructor(private service:PrevisaoService) {
      super();
      this.consultarPrevisoes();
    }

    consultarPrevisoesPorIdItem(){
      this.service.consultarPrevisoesPorIdItem(parseInt(this.idItem)).subscribe(data =>this.data = data)
    }

    consultarPrevisoes(){
      this.service.consultarPrevisoes().subscribe(data =>this.data = data)
    }
  }

 
  