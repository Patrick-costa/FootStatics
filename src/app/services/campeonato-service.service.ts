import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Campeonato } from '../models/campeonato';
import { campeonatoApi } from '../models/api/campeonatoApi';
import { tabelaApi } from '../models/api/tabelaApi';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {

  constructor(private httpClient: HttpClient) { }

  carregarCampeonatos(){
    return this.httpClient.get<campeonatoApi[]>(`${environment.url}/campeonatos`)
  }

  carregarTabela(id: number){
    return this.httpClient.get<tabelaApi[]>(`${environment.url}/campeonatos/${id}/tabela`)
  }

  carregarPartidas(idCampeonato: number, idRodada: number){
    return this.httpClient.get<[]>(`${environment.url}/campeonatos/${idCampeonato}/rodadas/${idRodada}`)
  }

  carregarPartidasAoVivo(){
    return this.httpClient.get<[]>(`${environment.url}/ao-vivo`)
  }
}
