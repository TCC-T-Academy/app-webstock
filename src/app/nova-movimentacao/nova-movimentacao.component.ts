import { Component } from '@angular/core';
import { INovaMovimentacao } from 'src/interfaces/interface';
import { MovimentacaoService } from '../movimentacao.service';


@Component({
  selector: 'app-nova-movimentacao',
  templateUrl: './nova-movimentacao.component.html',
  styleUrls: ['./nova-movimentacao.component.css']
})

export class NovaMovimentacaoComponent {

  nMov:INovaMovimentacao = {idItem:0,idUsuario:0,origemDestino:"",quantidade:0};
  inOut: string=""; 
  tipos: string[] = ["Entrada","Saida"]
  
  constructor(private service:MovimentacaoService){

  }
  
  enviar(mov:INovaMovimentacao){
    mov.idUsuario = 1
    console.log(mov)

    if(this.inOut = this.tipos[0]){
      this.service.entradaItem(mov).subscribe(data => console.log(data))
    }else if(this.inOut = this.tipos[1]){
      this.service.saidaItem(mov).subscribe(data => console.log(data))
    }

  }

}
