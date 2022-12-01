import { MatTableDataSource } from "@angular/material/table";
import { IMovimentacao } from "src/interfaces/interface";
import { MovimentacaoService } from "../movimentacao.service";


export class MovimentacaoDatasource extends MatTableDataSource<IMovimentacao> {
    //data: PrevisaoTestItem[] = EXAMPLE_DATA;
    //paginator: MatPaginator | undefined;
    //sort: MatSort | undefined;
    idItem: string = ""  
  
    constructor(private service:MovimentacaoService) {
      super();
      this.consultarMovimentacoes();
    }

    consultarPrevisoesPorIdItem(){
      this.service.consultarMovimentacoesPorIdItem(parseInt(this.idItem)).subscribe(data =>this.data = data)
    }

    consultarMovimentacoes(){
      this.service.consultarMovimentacoes().subscribe(data =>this.data = data)
    }
  }