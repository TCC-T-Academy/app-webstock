import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PrevisaoService } from '../previsao.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PrevisaoDataSource } from './previsao-datasource';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css']
})

export class PrevisaoComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: PrevisaoDataSource;

  displayedColumns = ['id', 'data', 'ordem',  'quantidade', 'finalizada', 'item', 'idItem', 'usuario'];

  constructor(private service:PrevisaoService){
    this.dataSource = new PrevisaoDataSource(service);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;    
  }
}


