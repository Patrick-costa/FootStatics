export interface Campeonato {
    id: number,
    edicao: {
        id: number,
        nome: string,
        temporada: string,
    },
    nomeAbreviado: string,
    imagemUrl: string,
    rodada:number
}
