import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem } from 'src/interfaces/interface';

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

  constructor(private http: HttpClient) { }

  consultarPorIdItem(idItem: number){
    return this.http.get<IItem>(`http://localhost:8081/itens/${idItem}`)
  }
}
