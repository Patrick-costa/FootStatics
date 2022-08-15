import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-jogos',
  templateUrl: './painel-jogos.component.html',
  styleUrls: ['./painel-jogos.component.scss']
})
export class PainelJogosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  nomeCampeonato: string;

  @Input()
  data: string;

  @Input()
  hora: string;

  @Input()
  escudoVisitante: string;

  @Input()
  placarVisitante: number;

  @Input()
  escudoMandante: string;

  @Input()
  placarMandante: number;

  @Input()
  abreviacaoMandante: string;

  @Input()
  abreviacaoVisitante: string;

  @Input()
  rodada: string;

  @Input()
  status: string;

  @Input()
  aovivo:boolean = false;

}
