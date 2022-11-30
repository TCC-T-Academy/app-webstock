import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ReservaService } from '../reserva.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReservaDataSource } from './reserva-datasource';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})

export class ReservaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource: ReservaDataSource;

  displayedColumns = ['id', 'data', 'ordem',  'quantidade', 'finalizada', 'item', 'idItem', 'usuario'];

  constructor(private service:ReservaService){
    this.dataSource = new ReservaDataSource(service);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;    
  }

}