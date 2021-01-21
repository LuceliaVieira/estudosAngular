import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {

  // jsonExample: any = {

  //   mensagem: 'Esta conta atingiu o número máximo de parcelamento permitido|É necessário concluir o pagamento das negociações anteriores para iniciar um novo Parcele Fácil.',

  //   codigoErro: 16

  //   }

  jsonExample: any = {

    titulo: 'Esta conta atingiu o número máximo de parcelamento permitido',

    mensagem: 'É necessário concluir o pagamento das negociações anteriores para iniciar um novo Parcele Fácil.',

    codigoErro: 16

    }

    result: any[];
    titulo: string;
    mensagem: string;


  constructor() { }

  ngOnInit() {

    if(this.jsonExample.titulo === undefined){

      this.result = this.jsonExample.mensagem.split("|");

      if(this.result.length > 1){
        this.titulo = this.result[0]
        this.mensagem = this.result[1]

        console.log(this.titulo, this.mensagem);
      }
    } else{

      this.titulo = this.jsonExample.titulo;
      this.mensagem = this.jsonExample.mensagem;
    }
  }

}
