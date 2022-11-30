import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { IPrevisao } from 'src/interfaces/interface';
import { PrevisaoService } from '../previsao.service';
import { PrevisaoTestDataSource, PrevisaoTestItem } from './previsao-test-datasource';

@Component({
  selector: 'app-previsao-test',
  templateUrl: './previsao-test.component.html',
  styleUrls: ['./previsao-test.component.css']
})
export class PrevisaoTestComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IPrevisao>;
  dataSource: PrevisaoTestDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['idPrevisao', 'dataPrevista', 'ordem', 'quantidade', 'finalizada', 'item', 'idItem', 'usuario'];

  constructor(private service:PrevisaoService) {
    this.dataSource = new PrevisaoTestDataSource(service);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
