import { Component, Input } from '@angular/core';
import { IItem } from 'src/interfaces/interface';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item: any;
  
  constructor(){
  }

  
}
