import { MatTableDataSource } from "@angular/material/table";
import { ILog } from "src/interfaces/interface";
import { LogService } from "../log.service";

export class LogDatasource extends MatTableDataSource<ILog>{

    idItem:string = "";

    constructor(private service:LogService){
        super();
        this.consultarLogsIdItem();
    }

    consultarLogsIdItem(){

        this.service.consultarLogsPorIdItem(parseFloat((this.idItem == "")?"0":this.idItem)).subscribe(res => {
            this.data = res;
        })
    }

}
