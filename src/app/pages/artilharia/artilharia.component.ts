import { Component, OnInit } from '@angular/core';
import { ArtilhariaApi } from 'src/app/models/api/artilhariaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-artilharia',
  templateUrl: './artilharia.component.html',
  styleUrls: ['./artilharia.component.scss']
})
export class ArtilhariaComponent implements OnInit {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarArtilharia();
  }
  
  artilharia: ArtilhariaApi[] = [];
  filtro: string = '';

  carregarArtilharia(){
    let storage = localStorage.getItem('id');
    let id = parseInt(storage);

    this.campeonatoService.carregarArtilharia(id).subscribe({
      next: (res) => {
        this.artilharia = res;
      },
      error: (er) => {
        console.log(er)
      }
    })
    
  }

  filtrar(evt: any){
    this.filtro = evt.srcElement.value;
  }

}
