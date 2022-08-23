import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CampeonatoParaCampeonato } from 'src/app/Common/campeonatoHelper';
import { Campeonato } from 'src/app/models/campeonato';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  constructor(private http: HttpClient,
    private campeonatoService: CampeonatoService,
    private route: Router) { }

  ngOnInit(): void {
    this.carregarCampeonatos();
    this.redirecionar();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  campeonatos!: Campeonato[];
  teste!: Campeonato;
  subs: Subscription[] = [];

  carregarCampeonatos() {
   const sub =  this.campeonatoService.carregarCampeonatos().subscribe(x => {
      this.campeonatos = x.map(y => CampeonatoParaCampeonato(y));
    });

    this.subs.push(sub);
  }

  escolherCampeonato(id: number, campeonato: string, rodada: number){
    localStorage.setItem('id', id.toString());
    localStorage.setItem('campeonato', campeonato);
    localStorage.setItem('rodada', rodada.toString())
  }

  redirecionar(){
    let id = localStorage.getItem('id');
    if(id){
      this.route.navigateByUrl('partidas');
    }
  }
}
