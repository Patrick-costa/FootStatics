import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Campeonato } from '../models/campeonato';
import { CampeonatoApi } from '../models/api/campeonatoApi';
import { TabelaApi } from '../models/api/tabelaApi';
import { ArtilhariaApi } from '../models/api/artilhariaApi';
import { PartidasApi } from '../models/api/partidasApi';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private httpClient: HttpClient) { }

  carregarCampeonatos(){
    return this.httpClient.get<CampeonatoApi[]>(`${environment.url}/campeonatos`)
  }

  carregarTabela(id: number){
    return this.httpClient.get<TabelaApi[]>(`${environment.url}/campeonatos/${id}/tabela`)
  }

  carregarPartidas(idCampeonato: number, idRodada: number){
    return this.httpClient.get<[]>(`${environment.url}/campeonatos/${idCampeonato}/rodadas/${idRodada}`)
  }

  carregarPartidasAoVivo(){
    return this.httpClient.get<[]>(`${environment.url}/ao-vivo`)
  }

  carregarArtilharia(id: number){
    return this.httpClient.get<ArtilhariaApi[]>(`${environment.url}/campeonatos/${id}/artilharia`)
  }

  carregarPartidasAnteriores(id: number){
    return this.httpClient.get<[]>(`${environment.url}/campeonatos/${id}/partidas`)
  }

  carregarProximasPartidas(idEquipe: number){
    return this.httpClient.get<PartidasApi[]>(`${environment.url}/times/${idEquipe}/partidas/proximas`)
  }

  carregarPartidasAnterioresEquipe(idEquipe: number){
    return this.httpClient.get<PartidasApi[]>(`${environment.url}/times/${idEquipe}/partidas/anteriores`)
  }
}