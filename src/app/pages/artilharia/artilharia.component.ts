import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArtilhariaApi } from 'src/app/models/api/artilhariaApi';
import { CampeonatoService } from 'src/app/services/campeonato-service.service';

@Component({
  selector: 'app-artilharia',
  templateUrl: './artilharia.component.html',
  styleUrls: ['./artilharia.component.scss']
})
export class ArtilhariaComponent implements OnInit, OnDestroy {

  constructor(private campeonatoService: CampeonatoService) { }

  ngOnInit(): void {
    this.carregarArtilharia();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe())
  }
  
  artilharia: ArtilhariaApi[] = [];
  filtro: string = '';
  subs: Subscription[] = [];

  carregarArtilharia(){
    let storage = localStorage.getItem('id');
    let id = parseInt(storage);

    const sub = this.campeonatoService.carregarArtilharia(id).subscribe({
      next: (res) => {
        this.artilharia = res;
      },
      error: (er) => {
        console.log(er)
      }
    });

    this.subs.push(sub);
    
  }

  filtrar(evt: any){
    this.filtro = evt.srcElement.value;
  }

}
