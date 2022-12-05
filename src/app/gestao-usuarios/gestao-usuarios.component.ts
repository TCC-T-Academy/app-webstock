import { GestaoUsuariosService } from './../gestao-usuarios.service';
import { UsuariosDatasource } from './usuarios-datasource';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gestao-usuarios',
  templateUrl: './gestao-usuarios.component.html',
  styleUrls: ['./gestao-usuarios.component.css']
})
export class GestaoUsuariosComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  usuarios: UsuariosDatasource;

  displayedColumns = ['id', 'email', 'nome',  'perfil'];

  constructor(private service:GestaoUsuariosService){
    this.usuarios = new UsuariosDatasource(service);
  }

  ngAfterViewInit(): void {
    this.usuarios.sort = this.sort;
    this.usuarios.paginator = this.paginator;
  }

}
