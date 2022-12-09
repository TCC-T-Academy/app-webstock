import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IEstoque, IItem } from 'src/interfaces/interface';
import { AuthService } from './login/auth.service';

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


  constructor(private http: HttpClient, private auth: AuthService) { }  

  consultarEstoque(){
    return this.http.get<[IEstoque]>("http://localhost:8081/estoque", {
    headers: this.auth.getHeaderWithToken()
  });
  }
  consultarEstoquePorIdItem(idItem: number){
    if(isNaN(idItem)){
      throw Error("ID Inválido!")
    }
    return this.http.get<IEstoque>(
      `http://localhost:8081/estoque/${idItem}`, {
        headers: this.auth.getHeaderWithToken()
    });
  }

  consultarEstoqueBaixo(){
    return this.http.get<IEstoque[]>(
      `http://localhost:8081/estoque/baixo`,{
        headers: this.auth.getHeaderWithToken()
    });
  }

}



