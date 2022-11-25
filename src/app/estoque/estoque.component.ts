import { Component } from '@angular/core';
import { IEstoque, IItem, ILog } from 'src/interfaces/interface';
import { EstoqueService } from '../estoque.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  idItem: string = ""

  estoque: IEstoque = {
    idEstoque: 0,
    localizacao: "",
    estoqueReal: 0,
    item: {
        idItem: 0,
        descricao: "",
        grupo: "",
        familia: "",
        unidade: "",
        estoqueSeguranca: 0
    }
  }

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

  itemEstoque: IItem = this.estoque.item;


constructor(private service:EstoqueService, private service2:LogService){
}


  ngOnInit(): void {
  }

  chamarFuncoes(){
    this.consultarLogsPorIdItem(),
    this.consultarEstoquePorIdItem()
  }


  consultarLogsPorIdItem(){
    this.service2.consultarLogsPorIdItem(parseFloat(this.idItem)).subscribe(data =>this.logs = data)
  }

consultarEstoquePorIdItem(){
   this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe(data =>this.estoque = data),
   this.service.consultarEstoquePorIdItem(parseFloat(this.idItem)).subscribe(data =>this.estoque.item = data.item)
}

}