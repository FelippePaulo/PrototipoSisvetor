import { CategoriaVetor, ModalidadeEvento, TipoArquivo } from "~/lib/api/enum";
import type { Evento } from "~/lib/api/evento";

export const eventosMock: Evento[] = [
    {
        id: 1,

        caminhoURL: "workshop-nacional-sisvetor",

        nome: "Workshop Nacional SisVetor",

        descricao:
            "Evento voltado à apresentação das funcionalidades do SisVetor e ao compartilhamento de experiências entre gestores e equipes de vigilância.",

        publicoAlvo:
            "Gestores estaduais, municipais e profissionais da vigilância epidemiológica.",

        ativa: true,

        destaque: true,

        imagemDestaque: {
            id: 1,
            nome: "workshop-sisvetor.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 245831,
        },

        categoriaVetor: CategoriaVetor.DENGUE,

        dataInicio: "2026-08-20",

        dataFim: "2026-08-20",

        horaInicio: "09:00",

        horaFim: "17:00",

        modalidade: ModalidadeEvento.PRESENCIAL,

        local: "Brasília - DF",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/workshop",

        tags: [
            {
                id: 1,
                tag: "Workshop",
            } 
        ],

        createdAt: "2026-07-18T09:00:00",

        updatedAt: "2026-07-18T09:00:00",
    },

    {
        id: 2,

        caminhoURL: "webinar-doenca-chagas",

        nome: "Webinar - Vigilância da Doença de Chagas",

        descricao:
            "Apresentação das novas funcionalidades do SisVetor para apoio às ações de vigilância da Doença de Chagas.",

        publicoAlvo:
            "Profissionais das equipes estaduais e municipais.",

        ativa: true,

        destaque: false,

        imagemDestaque: {
            id: 2,
            nome: "webinar-chagas.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 218532,
        },

        categoriaVetor: CategoriaVetor.CHAGAS,

        dataInicio: "2026-09-12",

        horaInicio: "14:00",

        horaFim: "16:00",

        modalidade: ModalidadeEvento.ONLINE,

        linkEvento:
            "https://meet.google.com/abc-defg-hij",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/webinar-chagas",

        tags: [
            {
                id: 3,
                tag: "Webinar",
            } 
        ],

        createdAt: "2026-07-15T10:30:00",

        updatedAt: "2026-07-15T10:30:00",
    },

    {
        id: 3,

        caminhoURL: "oficina-planejamento-campo",

        nome: "Oficina de Planejamento das Ações de Campo",

        descricao:
            "Capacitação prática sobre planejamento, execução e monitoramento das atividades de campo utilizando o SisVetor.",

        publicoAlvo:
            "Coordenadores municipais, supervisores e técnicos de campo.",

        ativa: true,

        destaque: false,

        imagemDestaque: {
            id: 3,
            nome: "oficina-planejamento.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 231874,
        },

        categoriaVetor: CategoriaVetor.DENGUE,

        dataInicio: "2026-10-01",

        dataFim: "2026-10-02",

        horaInicio: "08:30",

        horaFim: "17:00",

        modalidade: ModalidadeEvento.HIBRIDO,

        local: "Rio de Janeiro - RJ",

        linkEvento:
            "https://meet.google.com/xyz-abcd-123",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/oficina-planejamento",

        tags: [
            {
                id: 5,
                tag: "Oficina",
            }    
        ],

        createdAt: "2026-07-10T15:45:00",

        updatedAt: "2026-07-10T15:45:00",
    },
];