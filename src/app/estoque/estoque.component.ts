import { Component } from '@angular/core';
import { IEstoque, IItem } from 'src/interfaces/interface';
import { EstoqueService } from '../estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {

  idItem: number = 0

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

  itemEstoque: IItem = this.estoque.item;


constructor(private service:EstoqueService){

}

consultarEstoquePorIdItem(){
   this.service.consultarEstoquePorIdItem(this.idItem).subscribe(data =>this.estoque = data),
   this.service.consultarEstoquePorIdItem(this.idItem).subscribe(data =>this.estoque.item = data.item)
}




}