import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TabelaApi } from 'src/app/models/api/tabelaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarStorage();
    this.carregarTabela();
  }

  id!: number;
  tabela!: TabelaApi[];

  carregarStorage(){
    this.id = parseInt(JSON.parse(localStorage.getItem('id') || '{}'));
  }

  carregarTabela(){
    this.campeonatoService.carregarTabela(this.id).subscribe({
      next: (res) => {
        this.tabela = res;
        console.log(this.tabela)
      },
      error: (er) => {
        console.log(er);
      }
    })
  }


}
