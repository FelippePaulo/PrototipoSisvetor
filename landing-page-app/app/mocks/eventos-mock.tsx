import { CategoriaVetor, ModalidadeEvento, TipoArquivo } from "~/lib/api/enum";
import type { Evento } from "~/lib/api/evento";


export const eventosMock: Evento[] = [
    {
        id: 1,
        nome: "workshop-sisvetor-dengue",

        titulo: "Workshop Nacional do SisVetor para Vigilância da Dengue",

        descricao:
            "Encontro voltado à apresentação das funcionalidades do SisVetor e ao compartilhamento de experiências entre gestores e equipes de vigilância.",

        ativa: true,

        destaque: true,

        categoriaVetor: CategoriaVetor.DENGUE,

        dataInicio: "2026-08-20T09:00:00",

        dataFim: "2026-08-20T17:00:00",

        modalidade: ModalidadeEvento.PRESENCIAL,

        local: "Brasília - DF",

        publicoAlvo:
            "Gestores estaduais, municipais e profissionais da vigilância.",

        urlInscricao:
            "https://sisvetor.sds.unb.br/eventos/workshop-dengue",

        tags: [
            {
                id: 1,
                tag: "Workshop",
            },
            {
                id: 2,
                tag: "SisVetor",
            },
        ],

        conteudos: [
            {
                id: 1,
                titulo: "Banner",

                descricao: "",

                conteudo: "",

                arquivos: [
                    {
                        id: 1,
                        arquivo: {
                            id: 1,
                            nome: "Banner",

                            tipoArquivo: TipoArquivo.IMAGEM,

                            caminho: "https://placehold.co/900x600",

                            tamanho: 0,
                        },
                    },
                ],
            },
        ],

        createdAt: "2026-07-18",
    },

    {
        id: 2,
        nome: "webinar-chagas",

        titulo: "Webinar sobre Vigilância da Doença de Chagas",

        descricao:
            "Apresentação de estratégias para utilização do SisVetor no apoio às ações de vigilância da Doença de Chagas.",

        ativa: true,

        destaque: false,

        categoriaVetor: CategoriaVetor.CHAGAS,

        dataInicio: "2026-09-12T14:00:00",

        modalidade: ModalidadeEvento.ONLINE,

        publicoAlvo:
            "Profissionais das equipes estaduais e municipais.",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/webinar-chagas",

        tags: [
            {
                id: 3,
                tag: "Webinar",
            },
            {
                id: 4,
                tag: "Chagas",
            },
        ],

        conteudos: [
            {
                id: 2,
                titulo: "Banner",

                descricao: "",

                conteudo: "",

                arquivos: [
                    {
                        id: 2,
                        arquivo: {
                            id: 2,
                            nome: "Banner",

                            tipoArquivo: TipoArquivo.IMAGEM,

                            caminho: "https://placehold.co/900x600",

                            tamanho: 0,
                        },
                    },
                ],
            },
        ],

        createdAt: "2026-07-15",
    },

    {
        id: 3,
        nome: "oficina-planejamento",

        titulo: "Oficina de Planejamento das Ações de Campo",

        descricao:
            "Capacitação para utilização dos recursos de planejamento, execução e monitoramento das atividades de campo.",

        ativa: true,

        destaque: false,

        categoriaVetor: CategoriaVetor.DENGUE,

        dataInicio: "2026-10-01T08:30:00",

        dataFim: "2026-10-02T17:00:00",

        modalidade: ModalidadeEvento.HIBRIDO,

        local: "Rio de Janeiro - RJ",

        publicoAlvo:
            "Coordenadores municipais e supervisores de campo.",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/oficina-planejamento",

        tags: [
            {
                id: 5,
                tag: "Oficina",
            },
            {
                id: 6,
                tag: "Planejamento",
            },
        ],

        conteudos: [
            {
                id: 3,
                titulo: "Banner",

                descricao: "",

                conteudo: "",

                arquivos: [
                    {
                        id: 3,
                        arquivo: {
                            id: 3,
                            nome: "Banner",

                            tipoArquivo: TipoArquivo.IMAGEM,

                            caminho: "https://placehold.co/900x600",

                            tamanho: 0,
                        },
                    },
                ],
            },
        ],

        createdAt: "2026-07-10",
    },
];