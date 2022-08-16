import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-ao-vivo',
  templateUrl: './ao-vivo.component.html',
  styleUrls: ['./ao-vivo.component.scss']
})
export class AoVivoComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  partidas: any = [];
  aviso: string;

  ngOnInit(): void {
    this.carregarPartidasAoVivo();
    this.temporizarAviso();
  }

  temporizarAviso(){
    setTimeout(() => {
      this.aviso = 'Não existem jogos dos campeonatos cobertos passando no momento';
    }, 1000);
  }

  carregarPartidasAoVivo() {
    this.campeonatoService.carregarPartidasAoVivo().subscribe({
      next: (res) => {
        this.partidas = res;
      },
      error: (er) => {
        console.log(er);
      }
    })
  }

} 
