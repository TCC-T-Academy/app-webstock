import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INovaMovimentacao } from 'src/interfaces/interface';
import { MovimentacaoService } from '../movimentacao.service';


@Component({
  selector: 'app-nova-movimentacao',
  templateUrl: './nova-movimentacao.component.html',
  styleUrls: ['./nova-movimentacao.component.css']
})

export class NovaMovimentacaoComponent implements OnInit{  

  @Output("consultarTodas") consultarTodas: EventEmitter<any> = new EventEmitter();

  nMov:INovaMovimentacao = {idItem:0,idUsuario:0,origemDestino:"",quantidade:0};
  inOut: string; 
  tipos: string[] = ["Entrada","Saida"]
  

  
  constructor(private service:MovimentacaoService){
    this.inOut = ""
  }

  ngOnInit(): void {}
  
  enviar(mov:INovaMovimentacao){
    mov.idUsuario = 1
    if(this.inOut == this.tipos[0]){
      
      this.service.entradaItem(mov)
      .subscribe(data => {
                    this.consultarTodas.emit();
                    this.ngOnInit();
                    console.log(data)})

    }else if(this.inOut == this.tipos[1]){
      
      this.service.saidaItem(mov).subscribe(data => {
        this.consultarTodas.emit();
        this.ngOnInit();
        console.log(data)
      })
    }

  }

}
