import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabelaApi } from 'src/app/models/api/tabelaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit, OnDestroy {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.capturarIdCampeonato();
    
    setTimeout(() => {
      this.carregarTabela();
    },200)
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  id!: number;
  tabela!: TabelaApi[];
  subs: Subscription[] = [];

  capturarIdCampeonato(){
    let local = JSON.parse(localStorage.getItem('id') || '{}');
    this.id = parseInt(local);
  }

  carregarTabela(){
    const sub = this.campeonatoService.carregarTabela(this.id).subscribe({
      next: (res) => {
        this.tabela = res;
      },
      error: (er) => {
        console.log(er);
      }
    });

    this.subs.push(sub)
  }


}
