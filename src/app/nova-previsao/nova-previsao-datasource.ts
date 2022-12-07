import { IPrevisao } from 'src/interfaces/interface';
import { MatTableDataSource } from '@angular/material/table';
import { PrevisaoService } from '../previsao.service';



  export class PrevisaoDataSource extends MatTableDataSource<IPrevisao> {

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

    excluir(idItem:number){
      this.service.excluir(idItem).subscribe(() =>
      console.log("Previsão apagada"),
      () => this.consultarPrevisoes());      
  }
}