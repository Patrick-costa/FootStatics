import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.capturarNomeCampeonato();
  }

  campeonato!: string;

  capturarNomeCampeonato() {
    let storage = localStorage.getItem('campeonato');
    if (storage) {
      this.campeonato = storage;
    } else {
      this.campeonato = 'Escolha o campeonato'
    }
  }

  botaoClick(evt: any) {

  }
}
