import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItem } from 'src/interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { 
    
  }

  consultarItensPorId(idItem:number){
    return this.http.get<IItem>(`http://localhost:8081/itens/${idItem}`);
  }
}
