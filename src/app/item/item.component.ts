import { Component, Input } from '@angular/core';
import { IItem } from 'src/interfaces/interface';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() itemImput = '';

item: IItem = {
  descricao: "",
  grupo: "",
  familia: "",
  unidade: "",
  estoqueSeguranca: 0
}

  constructor(private service:ItemService){
    this.consultarPorIdItem();
  }

  consultarPorIdItem(){
    this.service.consultarPorIdItem(1540).subscribe(data =>this.item = data)
  }
}
