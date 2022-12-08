import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { IEstoque, IItem } from 'src/interfaces/interface';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() changing: Subject<IEstoque> = new Subject();
  @Input() item: IItem = {
    descricao:"teste",
    familia:"teste",
    estoqueSeguranca:0,
    grupo:"",
    unidade:"",
    idItem:0
  };

  dataSource:MatTableDataSource<IItem>;
  
  displayedColumns:string[] = ['id','descricao','familia', 'grupo','unidade']

  constructor(){
    this.dataSource = new MatTableDataSource();
    this.dataSource.data.push(this.item);
  }

  ngOnInit(): void {
    
  }

}
