import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-ao-vivo',
  templateUrl: './ao-vivo.component.html',
  styleUrls: ['./ao-vivo.component.scss']
})
export class AoVivoComponent implements OnInit, OnDestroy {

  constructor(private campeonatoService: CampeonatoService) { }

  partidas: any = [];
  aviso: string;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.carregarPartidasAoVivo();
    this.temporizarAviso();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  temporizarAviso(){
    setTimeout(() => {
      this.aviso = 'Não existem jogos dos campeonatos cobertos passando no momento';
    }, 1000);
  }

  carregarPartidasAoVivo() {
    const sub = this.campeonatoService.carregarPartidasAoVivo().subscribe({
      next: (res) => {
        this.partidas = res;
      },
      error: (er) => {
        console.log(er);
      }
    });

    this.subs.push(sub);
  }

} 
