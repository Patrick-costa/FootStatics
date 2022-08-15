import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.capturarNomeCampeonato();
    this.capturarComponent();
  }

  campeonato!: string;

  rota: any;

  capturarComponent(){
    this.rota = this.activatedRoute.component.name;
    console.log(this.rota)
  }


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
