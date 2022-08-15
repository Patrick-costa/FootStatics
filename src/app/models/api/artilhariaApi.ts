export interface ArtilhariaApi{
    atleta: {
        atleta_id: number,
        nome_popular: string,
        posicao: []
    },
    time: {
        time_id: number,
        nome_popular: string,
        sigla: string,
        escudo: string,
    },
    gols: number,
}