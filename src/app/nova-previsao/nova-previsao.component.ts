import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { INovaPrevisao } from 'src/interfaces/interface';
import { PrevisaoService } from '../previsao.service';

@Component({
  selector: 'app-nova-previsao',
  templateUrl: './nova-previsao.component.html',
  styleUrls: ['./nova-previsao.component.css']
})
export class NovaPrevisaoComponent implements OnInit {

  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();

  idItem:number | undefined;

  prev:INovaPrevisao = {
    quantidadePrevista: 0, dataPrevista: new Date(), ordem: "", finalizada: false,
    idUsuario: 0, idItem: 0,
  };
  disableCtrl: boolean = false
  constructor(private service:PrevisaoService){
    
  }
  ngOnInit(): void {}

  cadastrar(nPrev:INovaPrevisao){
    this.prev.ordem = nPrev.ordem;
    this.prev.quantidadePrevista = nPrev.quantidadePrevista;
    this.prev.idItem = nPrev.idItem;
    this.prev.idUsuario = 1;
    this.prev.dataPrevista = nPrev.dataPrevista;
    this.prev.finalizada = false;
    this.enviar(this.prev);
  }

  enviar(prev:INovaPrevisao){
    console.log(this.prev)

      this.service.cadastroPrevisao(this.prev)
      .subscribe(data => {
                    this.consultar.emit();
                    this.ngOnInit();
                    console.log(data)})

    }

  }
