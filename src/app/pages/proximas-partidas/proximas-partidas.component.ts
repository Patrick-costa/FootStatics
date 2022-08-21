import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartidasApi } from 'src/app/models/api/partidasApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-proximas-partidas',
  templateUrl: './proximas-partidas.component.html',
  styleUrls: ['./proximas-partidas.component.scss']
})
export class ProximasPartidasComponent implements OnInit {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private campeonatoService: CampeonatoService
  ) { }

  id: number;
  proximasPartidas: any[];
  partidasAnteriores: any[];
  campeonatosTime: any[];
  filtro: string = 'campeonato-brasileiro';


  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.carregarProximasPartidas();
  }

  carregarProximasPartidas() {
    this.campeonatoService.carregarProximasPartidas(this.id).subscribe({
      next: (res) => {
        this.campeonatosTime = Object.keys(res);
        res = Object.values(res);
        this.proximasPartidas = res;
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  escolherFiltro(opcao: string) {
    this.filtro = opcao;
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
      case 'copa-sulamericana':
        return 'Copa Sulamericana';
      case 'campeonato-baiano':
        return 'Campeonato Baiano';
      case 'campeonato-brasileiro-serie-c':
        return 'Brasileirão Serie C';
      case 'campeonato-brasileiro-serie-d':
        return 'Brasileirão Serie D';
      case 'campeonato-carioca':
        return 'Campeonato Carioca';
      case 'campeonato-catarinense':
        return 'Campeonato Catarinense';
      case 'campeonato-cearense':
        return 'Campeonato Cearense';
      case 'campeonato-gaucho':
        return 'Campeonato Gaucho';
      case 'campeonato-goiano':
        return 'Campeonato Goiano';
      case 'campeonato-mineiro':
        return 'Campeonato Mineiro';
      case 'campeonato-paulista':
        return 'Campeonato Paulista';
      case 'copa-do-nordeste':
        return 'Copa do Nordeste';
    }
    return '';
  }

}
