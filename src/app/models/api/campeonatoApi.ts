export interface CampeonatoApi {
    campeonato_id: number,
    edicao_atual: {
        edicao_id: number,
        nome: string,
        nome_popular: string,
        slug: string,
        temporada: string,
    },
    fase_atual: {
        fase_id: number,
        nome: string,
        slug: string,
        tipo: string,
    },
    logo: string,
    nome: string,
    nome_popular: string,
    rodada_atual: {
        nome: string,
        slug: string,
        rodada:number, 
        status: string,
    }
    slug: string,
    status: string,
    tipo: string
}