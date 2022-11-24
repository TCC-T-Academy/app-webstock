import { Component } from '@angular/core';
import { PrevisaoService } from '../previsao.service';
import { IPrevisao } from 'src/interfaces/interface';

@Component({
  selector: 'app-previsao',
  templateUrl: './previsao.component.html',
  styleUrls: ['./previsao.component.css']
})

export class PrevisaoComponent {
  idItem: number = 0;

  previsoes:IPrevisao [] = [
    {
      idPrevisao: 0,
      dataPrevista: new Date(),
      ordem: "",
      quantidadePrevista: 0,
      finalizada: false,
      item: {
        descricao:"",
        estoqueSeguranca:0,
        familia:"",
        grupo:"",
        unidade:""
      },
      usuario: {
        email:"",
        perfil:"",
        senha:"",
        nome:""
      }
    }
  ]

  constructor(private service:PrevisaoService){
    if(this.idItem == 0 || ''){
      this.consultarPrevisoes()
    }     
  }

  pesquisarPorIdItem(idItem: number){
    this.consultarPrevisoesPorIdItem(idItem)
  }

  consultarPrevisoes(){
    this.service.consultarPrevisoes().subscribe(data =>this.previsoes = data)
  }

  consultarPrevisoesPorIdItem(idItem: number){
    this.service.consultarPrevisoesPorIdItem(idItem).subscribe(data =>this.previsoes = data)
  }
}


