import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss']
})
export class PartidasComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarPartidas();
  }

  carregarPartidas() {
    let id = JSON.parse(localStorage.getItem('id') || '{}');
    id = parseInt(id);
    let rodada = JSON.parse(localStorage.getItem('rodada') || '{}');
    rodada = parseInt(rodada);

    this.campeonatoService.carregarPartidas(id, rodada).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (er) => {
        console.log(er);
      }

    })
  }

}
