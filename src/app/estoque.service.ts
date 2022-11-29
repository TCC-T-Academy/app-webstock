import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IEstoque, IItem } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})

export class EstoqueService {

  estoque: IEstoque = {
    idEstoque: 0,
    localizacao: "",
    estoqueReal: 0,
    item: {
        idItem: 0,
        descricao: "",
        grupo: "",
        familia: "",
        unidade: "",
        estoqueSeguranca: 0
    }
  }


  constructor(private http: HttpClient) { }  

  consultarEstoquePorIdItem(idItem: number){
    return this.http.get<IEstoque>(`http://localhost:8081/estoque/${idItem}`)
  }

}



