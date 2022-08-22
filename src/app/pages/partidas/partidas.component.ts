import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-partidas',
  templateUrl: './partidas.component.html',
  styleUrls: ['./partidas.component.scss']
})
export class PartidasComponent implements OnInit, OnDestroy {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarPartidas();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  partidas:any = [];
  rodada: string;
  subs: Subscription[] = [];

  carregarPartidas() {
    let id = JSON.parse(localStorage.getItem('id') || '{}');
    id = parseInt(id);
    let rodada = JSON.parse(localStorage.getItem('rodada') || '{}');
    rodada = parseInt(rodada);

    const sub = this.campeonatoService.carregarPartidas(id, rodada).subscribe({
      next: (res) => {
        this.partidas = res;
        this.rodada = this.partidas.nome;
      },
      error: (er) => {
        console.log(er);
      }

    });

    this.subs.push(sub)
  }

}
