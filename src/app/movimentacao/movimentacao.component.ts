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
  movimentacoes: MovimentacaoDatasource;

  displayedColumns = ['data', 'origem', 'tipo',  'quantidade', 'localizacao', 'idItem'];

  constructor(private service:MovimentacaoService){  
    this.movimentacoes = new MovimentacaoDatasource(service);
  }

  ngAfterViewInit(): void {
    this.movimentacoes.sort = this.sort;
    this.movimentacoes.paginator = this.paginator; 
  }

  consultar(idItem:string){
    this.movimentacoes.idItem = idItem;
    if(idItem == ""){
      this.movimentacoes.consultarMovimentacoes();
    }else{
      this.movimentacoes.consultarPrevisoesPorIdItem();
    }
  }
}
