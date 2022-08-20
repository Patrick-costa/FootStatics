import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';
@Component({
  selector: 'app-partidas-anteriores',
  templateUrl: './partidas-anteriores.component.html',
  styleUrls: ['./partidas-anteriores.component.scss']
})
export class PartidasAnterioresComponent implements OnInit {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private campeonatoService: CampeonatoService
  ) { }

  id: number;
  proximasPartidas: any[];
  partidasAnteriores: any[];
  campeonatosTime: any[];
  filtro: string = '';

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.carregarPartidasAnteriores();
  }

  carregarPartidasAnteriores() {
    this.campeonatoService.carregarPartidasAnterioresEquipe(this.id).subscribe({
      next: (res) => {
        this.campeonatosTime = Object.keys(res);
        res = Object.values(res);
        this.partidasAnteriores = res;
        console.log(this.partidasAnteriores)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  converterNomes(nome: string) {
    switch (nome) {
      case 'campeonato-brasileiro':
        return 'Brasileirão Serie A';
      case 'copa-libertadores-da-america':
        return 'Libertadores';
      case 'copa-do-brasil':
        return 'Copa do Brasil';
      case 'campeonato-brasileiro-serie-b':
        return 'Brasileirão Serie B';
    }
    return '';
  }
}
