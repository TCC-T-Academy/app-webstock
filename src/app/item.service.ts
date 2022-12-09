import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem } from 'src/interfaces/interface';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item: IItem = 
    {
        descricao: "",
        grupo: "",
        familia: "",
        unidade: "",
        estoqueSeguranca: 0
    }

  constructor(private http: HttpClient, private auth:AuthService) { }

  consultarPorIdItem(idItem: number){
    
    if(isNaN(idItem)){
      throw Error("ID Inválido!")
    }

    return this.http.get<IItem>(`http://localhost:8081/itens/${idItem}`, {
      headers: this.auth.getHeaderWithToken()
    })
  }
}
