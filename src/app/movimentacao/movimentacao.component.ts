import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IMovimentacao } from '../../interfaces/interface'
import { MovimentacaoService } from '../movimentacao.service';
import { FormGroup, FormControl } from'@angular/forms';
import { ItemComponent } from '../item/item.component';
import { NovaMovimentacaoComponent } from '../nova-movimentacao/nova-movimentacao.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MovimentacaoDatasource } from './movimentacao-datasource';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})

export class MovimentacaoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: MovimentacaoDatasource;

  displayedColumns = ['dataMovimentacao', 'origemDestino', 'tipo',  'quantidade', 'idItem'];

  constructor(private service:MovimentacaoService){  
    this.dataSource = new MovimentacaoDatasource(service);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator; 
  }

  consultar(idItem:string){
    this.dataSource.idItem = idItem;
    if(idItem == ""){
      this.dataSource.consultarMovimentacoes();
    }else{
      this.dataSource.consultarPrevisoesPorIdItem();
    }
  }
}
