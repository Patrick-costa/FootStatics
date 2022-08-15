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
    AoVivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
