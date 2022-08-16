import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AoVivoComponent } from './pages/ao-vivo/ao-vivo.component';
import { ArtilhariaComponent } from './pages/artilharia/artilharia.component';
import { HomeComponent } from './pages/home/home.component';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { RodadasAnterioresComponent } from './pages/rodadas-anteriores/rodadas-anteriores.component';
import { TabelaComponent } from './pages/tabela/tabela.component';

const routes: Routes = [
  {
    path: '',
    component: PartidasComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tabela',
    component: TabelaComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'partidas',
    component: PartidasComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'ao-vivo',
    component: AoVivoComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'artilharia',
    component: ArtilhariaComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'rodadas-anteriores',
    component: RodadasAnterioresComponent,
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//  loadChildren: () => import('./pages/player/player.module').then(x => x.PlayerModule),
