import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-campeonato',
  templateUrl: './card-campeonato.component.html',
  styleUrls: ['./card-campeonato.component.scss']
})
export class CardCampeonatoComponent implements OnInit {

  constructor() { }

  @Input()
  imagemUrl = '';

  @Input()
  nome = '';

  @Input()
  rodadaAtual = '';



  ngOnInit(): void {
  }

}
