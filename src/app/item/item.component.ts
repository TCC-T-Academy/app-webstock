import { Component } from '@angular/core';
import { IItem } from 'src/interfaces/interface';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item:IItem = {descricao:"",estoqueSeguranca: 0,familia:"",grupo:"",unidade:"" }

  constructor(private service:ItemService){
    
  }

  consultarPorId(){
    this.service.consultarItensPorId(1540).subscribe(data => this.item = data)
  }


}
