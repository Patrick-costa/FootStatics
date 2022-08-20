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
  filtro: string = '';


  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.carregarProximasPartidas();
  }

  carregarProximasPartidas(){
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

  converterNomes(nome: string){
    switch(nome){
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
