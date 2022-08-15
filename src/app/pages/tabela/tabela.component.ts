import { Component, OnInit } from '@angular/core';
import { tabelaApi } from 'src/app/models/api/tabelaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.capturarIdCampeonato();
    
    setTimeout(() => {
      this.carregarTabela();
    },200)
  }

  id!: number;
  tabela!: tabelaApi[];

  capturarIdCampeonato(){
    let local = JSON.parse(localStorage.getItem('id') || '{}');
    this.id = parseInt(local);
  }

  carregarTabela(){
    this.campeonatoService.carregarTabela(this.id).subscribe({
      next: (res) => {
        this.tabela = res;
        console.log(res);
      },
      error: (er) => {
        console.log(er);
      }
    })
  }


}
