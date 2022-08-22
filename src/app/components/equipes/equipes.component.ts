import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TabelaApi } from 'src/app/models/api/tabelaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit, OnDestroy {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarStorage();
    this.carregarTabela();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }

  id!: number;
  tabela!: TabelaApi[];
  subs: Subscription[] = [];

  carregarStorage(){
    this.id = parseInt(JSON.parse(localStorage.getItem('id') || '{}'));
  }
  
  atualizar(){
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  carregarTabela(){
    const sub = this.campeonatoService.carregarTabela(this.id).subscribe({
      next: (res) => {
        this.tabela = res;
        console.log(this.tabela)
      },
      error: (er) => {
        console.log(er);
      }
    });

    this.subs.push(sub);
  }


}
