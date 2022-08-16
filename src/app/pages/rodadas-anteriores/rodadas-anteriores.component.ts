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
    this.carregarService();
  }

  partidas: any = [];
  rodada: string;
  campeonato: string;
  aviso: string;

  definirCampeonato(){
    this.campeonato = localStorage.getItem('campeonato')
  }

  definirRodada(numeroRodada: number){
    this.rodada = numeroRodada + '° Rodada' 
  }

  carregarService(){
    try{
      this.carregarPartidasAnteriores();

    } catch(e){
      console.log(e)
    } finally{
      this.aviso = 'Rodada inexistente';
      console.log(this.aviso)
    }
  }

  carregarPartidasAnteriores(){
    let id = JSON.parse(localStorage.getItem('id') || '{}');
    id = parseInt(id);
    this.campeonatoService.carregarPartidasAnteriores(id).subscribe({
      next: (res) => {
        this.partidas = res;
        this.partidas = this.partidas.partidas['fase-unica'];
        this.carregarRodadas(15);
      },
      error: (er) => {
        console.log(er);
      }
    })
  }

  carregarRodadas(id: number){
    this.partidas = this.partidas[id + 'a-rodada']
    this.definirRodada(id);
    this.definirCampeonato();
  }

}
