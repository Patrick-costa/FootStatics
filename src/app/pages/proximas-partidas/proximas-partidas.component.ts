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

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.carregarProximasPartidas();
    this.carregarPartidasAnteriores();
  }

  carregarPartidasAnteriores(){
    this.campeonatoService.carregarPartidasAnterioresEquipe(this.id).subscribe({
      next: (res)=> {
        res = Object.values(res);
        this.partidasAnteriores = res;
        console.log(this.partidasAnteriores)
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  carregarProximasPartidas(){
    this.campeonatoService.carregarProximasPartidas(this.id).subscribe({
      next: (res) => {
        res = Object.values(res);
        this.proximasPartidas = res;
        console.log(this.proximasPartidas)
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

}
