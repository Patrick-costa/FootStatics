import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoMenuComponent } from './components/botao-menu/botao-menu.component';
import { PainelEsquerdoComponent } from './components/painel-esquerdo/painel-esquerdo.component';
import { HomeComponent } from './pages/home/home.component';
import { CardCampeonatoComponent } from './components/card-campeonato/card-campeonato.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TabelaComponent } from './pages/tabela/tabela.component';
import { PartidasComponent } from './pages/partidas/partidas.component';
import { PainelJogosComponent } from './components/painel-jogos/painel-jogos.component';
import { AoVivoComponent } from './pages/ao-vivo/ao-vivo.component';
import { ArtilhariaComponent } from './pages/artilharia/artilharia.component';
import { MaterialDesignModule } from './share/material-design/material-design.module';
import { PipeArtilhariaPipe } from './pipes/pipe-artilharia.pipe';
import { RodadasAnterioresComponent } from './pages/rodadas-anteriores/rodadas-anteriores.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EquipesComponent } from './components/equipes/equipes.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { ProximasPartidasComponent } from './pages/proximas-partidas/proximas-partidas.component';
import { PartidasAnterioresComponent } from './pages/partidas-anteriores/partidas-anteriores.component';
import { PartidasPipe } from './pipes/partidas.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    CardCampeonatoComponent,
    TabelaComponent,
    PartidasComponent,
    PainelJogosComponent,
    AoVivoComponent,
    ArtilhariaComponent,
    PipeArtilhariaPipe,
    RodadasAnterioresComponent,
    EquipesComponent,
    EquipeComponent,
    ProximasPartidasComponent,
    PartidasAnterioresComponent,
    PartidasPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
