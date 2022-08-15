import { Campeonato } from "../models/campeonato";
import { campeonatoApi } from "../models/api/campeonatoApi";

export function CampeonatoParaCampeonato(campeonato: campeonatoApi): Campeonato{
    
    return {
        id: campeonato.campeonato_id,
        edicao: {
            id: campeonato.edicao_atual.edicao_id,
            nome: campeonato.edicao_atual.nome,
            temporada: campeonato.edicao_atual.temporada
        },
        nomeAbreviado: campeonato.nome_popular,
        imagemUrl: campeonato.logo,
        rodada: campeonato.rodada_atual.rodada
    }
}