import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-rodadas-anteriores',
  templateUrl: './rodadas-anteriores.component.html',
  styleUrls: ['./rodadas-anteriores.component.scss']
})
export class RodadasAnterioresComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarStorage();
    this.carregarPartidasAnteriores(this.idRodada);
  }

  partidas: any = [];
  idCampeonato: number;
  idRodada: number;
  nomeCampeonato: string;
  numPartidaSelecionada: number;
  partidaSelecionada: any = [];
  numPartidas: any = [];
  rodadaSelecionada: number;

  carregarStorage(){
    this.idCampeonato = parseInt(JSON.parse(localStorage.getItem('id') || '{}'));
    this.idRodada = parseInt(JSON.parse(localStorage.getItem('rodada') || '{}'));
    this.nomeCampeonato = localStorage.getItem('campeonato');
  }

  selecionarPartida(): number{
    return this.numPartidaSelecionada = this.idRodada -2;
  }

  carregarPartidasAnteriores(id: number) {
    this.campeonatoService.carregarPartidasAnteriores(this.idCampeonato).subscribe({
      next: (res) => {
        this.partidas = res;
        this.partidas = Object.values(this.partidas.partidas['fase-unica']);
        this.partidaSelecionada = this.partidas[id -2];
        this.rodadaSelecionada = this.idRodada -1;
        this.carregarNumPartidas();
      },
      error: (er) => {
        console.log(er);
      }
    })
  }

  carregarRodada(id:number){
    this.partidaSelecionada = this.partidas[id-1];
  } 

  carregarNumPartidas(){
    for(var i = 1; i < 39; i++){
      this.numPartidas[i-1] = i;
    }
  }




}
