import { MatTableDataSource } from "@angular/material/table";
import { IEstoque, ILog } from "src/interfaces/interface";
import { EstoqueService } from "../estoque.service";
import { LogService } from "../log.service";

export class EstoqueDatasource extends MatTableDataSource<IEstoque>{
    
    idItem: string = " " ;
    temp: IEstoque[] = [];

    constructor(private service:EstoqueService, private service2:LogService) {
        super();
        this.consultarEstoque();
      }
      
  
      //chamarFuncoes(){
        //this.consultarLogsPorIdItem(),
        
      //}
    
    
    //   consultarLogsPorIdItem(){
    //     this.service2.consultarLogsPorIdItem(parseFloat(this.idItem)).subscribe(res => this.data = res)
    //   }
    
    consultarEstoquePorIdItem(){
        //this.data.pop();
        this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe((res) => {
            this.temp = []
            this.temp.push(res)
            this.data = this.temp;      
        })
       //this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe(data => this.estoque.item = data.item)
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

