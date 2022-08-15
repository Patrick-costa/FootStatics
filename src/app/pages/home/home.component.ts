import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CampeonatoParaCampeonato } from 'src/app/Common/campeonatoHelper';
import { Campeonato } from 'src/app/models/campeonato';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private http: HttpClient,
    private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarCampeonatos();
  }

  campeonatos!: Campeonato[];
  teste!: Campeonato;

  carregarCampeonatos() {
    this.campeonatoService.carregarCampeonatos().subscribe(x => {
      this.campeonatos = x.map(y => CampeonatoParaCampeonato(y));
      console.log(this.campeonatos)
    })
  }

  escolherCampeonato(id: number, campeonato: string, rodada: number){
    localStorage.setItem('id', id.toString());
    localStorage.setItem('campeonato', campeonato);
    localStorage.setItem('rodada', rodada.toString())
    window.location.reload();
  }
}
