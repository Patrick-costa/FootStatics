import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';
@Component({
  selector: 'app-partidas-anteriores',
  templateUrl: './partidas-anteriores.component.html',
  styleUrls: ['./partidas-anteriores.component.scss']
})
export class PartidasAnterioresComponent implements OnInit, OnDestroy {

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private campeonatoService: CampeonatoService
  ) { }

  id: number;
  proximasPartidas: any[];
  partidasAnteriores: any[];
  campeonatosTime: any[];
  filtro: string = 'campeonato-brasileiro';
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.carregarPartidasAnteriores();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  definirCampeonatoAtual(campeonato: any){
    this.filtro = campeonato[0];
  }

  carregarPartidasAnteriores() {
    const sub = this.campeonatoService.carregarPartidasAnterioresEquipe(this.id).subscribe({
      next: (res) => {
        this.campeonatosTime = Object.keys(res);
        this.definirCampeonatoAtual(this.campeonatosTime);
        res = Object.values(res);
        this.partidasAnteriores = res;
        console.log(this.partidasAnteriores);
        

      },
      error: (e) => {
        console.log(e)
      }
    });

    this.subs.push(sub);
  }

  escolherFiltro(opcao: string){
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
