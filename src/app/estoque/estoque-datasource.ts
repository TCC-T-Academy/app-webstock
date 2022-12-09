import { MatTableDataSource } from "@angular/material/table";
import { IEstoque, ILog } from "src/interfaces/interface";
import { EstoqueService } from "../estoque.service";
import { LogService } from "../log.service";

export class EstoqueDatasource extends MatTableDataSource<IEstoque>{
    
    idItem: string = " " ;
    temp: IEstoque[] = [];

    constructor(private service:EstoqueService) {
        super();
        this.consultarEstoque();
      }
          
    consultarEstoquePorIdItem(){
        this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe((res) => {
            this.temp = []
            this.temp.push(res)
            this.data = this.temp;      
        })
    }

    consultarEstoqueBaixo(){
        this.service.consultarEstoqueBaixo().subscribe((res) => {
            this.data = res;      
        })
    }

    consultarEstoque(){
        this.service.consultarEstoque().subscribe(data =>this.data = data)
    }
}

