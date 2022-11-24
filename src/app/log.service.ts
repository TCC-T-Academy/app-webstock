import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILog } from 'src/interfaces/interface';


@Injectable({
  providedIn: 'root'
})

export class LogService {
  logs: ILog [] = [
    {
      idItem: 0,
      tipoMovimentacao: "",
      origemDestino: "",
      data: new Date(),
      quantidade: 0,
      estoqueMomento: 0
    }
  ]

  constructor(private http: HttpClient) { }

  consultarLogsPorIdItem(idItem: number){
    return this.http.get<[ILog]>(`http://localhost:8081/log/${idItem}`);
  }

}
