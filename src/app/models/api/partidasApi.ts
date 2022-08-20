export interface PartidasApi {
    campeonato: [
        {
            partida_id: number;
            campeonato: {
                campeonato_id: number,
                nome: string,
                slug: string
            },
            placar: string,
            time_mandante: {
                time_id: 56,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            time_visitante: {
                time_id: 18,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            placar_mandante: number
            placar_visitante: number
            status: string,
            slug: string,
            data_realizacao: string,
            hora_realizacao: string,
            data_realizacao_iso: string,
            estadio: {
                estadio_id: 327,
                nome_popular: string,
            }
        },
    ],
    copa: [
        {
            partida_id: number;
            campeonato: {
                campeonato_id: number,
                nome: string,
                slug: string
            },
            placar: string,
            time_mandante: {
                time_id: 56,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            time_visitante: {
                time_id: 18,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            placar_mandante: number
            placar_visitante: number
            status: string,
            slug: string,
            data_realizacao: string,
            hora_realizacao: string,
            data_realizacao_iso: string,
            estadio: {
                estadio_id: 327,
                nome_popular: string,
            }
        },
    ],
    libertadores: [
        {
            partida_id: number;
            campeonato: {
                campeonato_id: number,
                nome: string,
                slug: string
            },
            placar: string,
            time_mandante: {
                time_id: 56,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            time_visitante: {
                time_id: 18,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            placar_mandante: number
            placar_visitante: number
            status: string,
            slug: string,
            data_realizacao: string,
            hora_realizacao: string,
            data_realizacao_iso: string,
            estadio: {
                estadio_id: 327,
                nome_popular: string,
            }
        },
    ],
    'campeonato-brasileiro-serie-b': [
        {
            partida_id: number;
            campeonato: {
                campeonato_id: number,
                nome: string,
                slug: string
            },
            placar: string,
            time_mandante: {
                time_id: 56,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            time_visitante: {
                time_id: 18,
                nome_popular: string,
                sigla: string,
                escudo: string,
            },
            placar_mandante: number
            placar_visitante: number
            status: string,
            slug: string,
            data_realizacao: string,
            hora_realizacao: string,
            data_realizacao_iso: string,
            estadio: {
                estadio_id: 327,
                nome_popular: string,
            }
        },
    ]
}