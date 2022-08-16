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
    PipeArtilhariaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialDesignModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
