import { Component, EventEmitter, Output } from '@angular/core';
import { INovaPrevisao } from 'src/interfaces/interface';
import { NovaPrevisaoComponent } from '../nova-previsao/nova-previsao.component';
import { PrevisaoService } from '../previsao.service';
import { PrevisaoDataSource } from '../previsao/previsao-datasource';

@Component({
  selector: 'app-previsao-atualizar',
  templateUrl: './previsao-atualizar.component.html',
  styleUrls: ['./previsao-atualizar.component.css']
})
export class PrevisaoAtualizarComponent {

  disableCtrl: boolean = false

  prev:INovaPrevisao = {
    quantidadePrevista: 0, dataPrevista: new Date(), ordem: "", finalizada: false,
    idUsuario: 0, idItem: 0, idPrevisao: 0,
  };
  constructor(private service:PrevisaoService, private novaPrevisaoC:NovaPrevisaoComponent){
    this.dataSource = new PrevisaoDataSource(service);
  }
  ngOnInit(): void {}

  dataSource: PrevisaoDataSource;
  previsao: number | undefined;
  altera(nPrev:INovaPrevisao){
    console.log(nPrev);
    this.prev.ordem = nPrev.ordem;
    this.prev.quantidadePrevista = nPrev.quantidadePrevista;
    this.prev.idItem = nPrev.idItem;
    this.prev.idUsuario = 1;
    this.prev.dataPrevista = nPrev.dataPrevista;
    this.prev.finalizada = false;
    this.previsao  = nPrev.idPrevisao!;
      this.alterar(this.previsao, this.prev);


  }
  alterar(idPrevisao: number, prev:INovaPrevisao){


    this.service.alteraPrevisao(idPrevisao, this.prev)
    .subscribe(data => {
                  this.consultar.emit();
                  this.ngOnInit();
                  this.novaPrevisaoC.dataSource.consultarPrevisoes()},
                  )

  }
  @Output("consultar") consultar: EventEmitter<any> = new EventEmitter();
  
}
