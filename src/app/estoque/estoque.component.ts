import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { filter } from 'rxjs';
import { IEstoque, IItem, ILog } from 'src/interfaces/interface';
import { EstoqueService } from '../estoque.service';
import { LogService } from '../log.service';
import { ReservaDataSource } from '../reserva/reserva-datasource';
import { EstoqueDatasource } from './estoque-datasource';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements AfterViewInit{
  @ViewChild(MatExpansionPanel) expansion!: MatExpansionPanel;


  dataSource: EstoqueDatasource;
  panelOpenState:Boolean = false;
  filter: string = "";

  displayedColumns = ['localizacao', 'estoqueReal', 'estoqueSeguranca' , 'dataFutura', 'estoqueFuturo'];

  idItem: string = ""

  // estoque: IEstoque = {
  //   idEstoque: 0,
  //   localizacao: "",
  //   estoqueReal: 0,
  //   item: {
  //       idItem: 0,
  //       descricao: "",
  //       grupo: "",
  //       familia: "",
  //       unidade: "",
  //       estoqueSeguranca: 0
  //   }
  // }
  // logs:ILog [] = [
  //   {
  //     idItem: 0,
  //     tipoMovimentacao: "",
  //     origemDestino: "",
  //     data: new Date(),
  //     quantidade: 0,
  //     estoqueMomento: 0
  //   }
  // ]

  // itemEstoque: IItem = this.estoque.item;


constructor(private service:EstoqueService, private service2:LogService){
  this.dataSource = new EstoqueDatasource(service,service2)
  
}
  ngAfterViewInit(): void {
    
  } 

  chamarFuncoes(){
    this.dataSource.idItem = this.idItem;
    this.dataSource.consultarEstoquePorIdItem();
  }

  openClose(state:Boolean,estoque:IEstoque):Boolean{    
    this.panelOpenState = state;
    if(this.panelOpenState){
      this.filter = (typeof(estoque.idEstoque) === undefined) ? "" : `${estoque.localizacao}`;
      this.dataSource.filter = this.filter;
      console.log(this.filter);
    }

    return this.panelOpenState;
  }


//   consultarLogsPorIdItem(){
//     this.service2.consultarLogsPorIdItem(parseFloat(this.idItem)).subscribe(data =>this.logs = data)
//   }

// consultarEstoquePorIdItem(){
//    this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe(data =>this.estoque = data),
//    this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe(data =>this.estoque.item = data.item)
// }

}