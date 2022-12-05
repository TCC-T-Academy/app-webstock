import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILog } from 'src/interfaces/interface';
import { AuthService } from './login/auth.service';


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

  constructor(private http: HttpClient, private auth: AuthService) { }

  consultarLogsPorIdItem(idItem: number){
    if(isNaN(idItem)){
      throw Error("ID Inválido!")
    }
    return this.http.get<[ILog]>(`http://localhost:8081/log/${idItem}`, {
      headers: this.auth.getHeaderWithToken()
  });
  }

}
