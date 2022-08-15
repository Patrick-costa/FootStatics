import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AoVivoComponent } from './pages/ao-vivo/ao-vivo.component';
import { ArtilhariaComponent } from './pages/artilharia/artilharia.component';
import { HomeComponent } from './pages/home/home.component';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { TabelaComponent } from './pages/tabela/tabela.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'tabela',
    component: TabelaComponent
  },
  {
    path: 'partidas',
    component: PartidasComponent
  },
  {
    path: 'ao-vivo',
    component: AoVivoComponent
  },
  {
    path: 'artilharia',
    component: ArtilhariaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
