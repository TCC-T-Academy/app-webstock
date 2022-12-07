import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INovaMovimentacao } from 'src/interfaces/interface';
import { MovimentacaoService } from '../movimentacao.service';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-nova-movimentacao',
  templateUrl: './nova-movimentacao.component.html',
  styleUrls: ['./nova-movimentacao.component.css']
})

export class NovaMovimentacaoComponent implements OnInit{  

  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();

  nMov:INovaMovimentacao = {idItem:0,idUsuario:0,origemDestino:"",quantidade:0};
  inOut: string; 
  tipos: string[] = ["Entrada","Saída"]
  orgDest: string = "Origem:"
  disableCtrl: boolean = false
  itemPesquisa: string = ""
  

  
  constructor(private service:MovimentacaoService, private notifier:NotificationService){
    this.inOut = ""
  }

  ngOnInit(): void {}
  
  enviar(mov:INovaMovimentacao){
    mov.idUsuario = 1

    console.log(mov)

    if(this.inOut == this.tipos[0]){
      
      this.service.entradaItem(mov)
      .subscribe(data => {
                    this.consultar.emit("");
                    this.ngOnInit();
                    if(data.idMovimentacao){
                      this.notifier.showSuccess(`${this.tipos[0]} efetuada com sucesso!`)
                    }
                    console.log(data)})

    }else if(this.inOut == this.tipos[1]){
      
      this.service.saidaItem(mov).subscribe(data => {
          this.consultar.emit("");
          this.ngOnInit();
          if(data.idMovimentacao){
            this.notifier.showSuccess(`${this.tipos[1]} efetuada com sucesso!`)
          }
          console.log(data)
      })
    }

  }


  verSelecao(sel:string){
    this.orgDest = (sel == this.tipos[0])? "Origem:" : "Destino:";
    //this.disableCtrl = (sel == this.tipos[2])? true : false;
  }

  buscar(item:string){
    this.consultar.emit(parseFloat(item))
  }

}
