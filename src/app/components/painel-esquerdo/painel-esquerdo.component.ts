import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-painel-esquerdo',
  templateUrl: './painel-esquerdo.component.html',
  styleUrls: ['./painel-esquerdo.component.scss']
})
export class PainelEsquerdoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.capturarNomeCampeonato();
    this.capturarComponent();
    this.redirecionar();
  }

  campeonato!: string;

  rota: any;

  redirecionar() {
    let storage = localStorage.getItem('campeonato');
    if (!storage) {
      this.router.navigateByUrl('/home');
    }
  }

  validarAcesso() {
    const campeonato = localStorage.getItem('campeonato');

    if (!campeonato) {
      swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Escolha um campeonato',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

  capturarComponent() {
    this.rota = this.activatedRoute.component.name;
    console.log(this.rota)
  }


  capturarNomeCampeonato() {
    let storage = localStorage.getItem('campeonato');
    if (storage) {
      this.campeonato = storage;
    } else {
      this.campeonato = 'Escolha o campeonato'
    }
  }

  botaoClick(evt: any) {

  }
}
