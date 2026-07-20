import {
    CategoriaVetor,
    ModalidadeEvento,
    TipoArquivo,
    type Evento,
} from "~/lib/api/evento";

export const eventosMock: Evento[] = [
    {
        id: 1,
        nome: "workshop-sisvetor-dengue",

        titulo: "Workshop Nacional do SisVetor para Vigilância da Dengue",

        descricao:
            "Evento voltado à apresentação das funcionalidades do SisVetor e ao compartilhamento de experiências entre equipes estaduais e municipais.",

        publicoAlvo:
            "Gestores estaduais, municipais e profissionais da vigilância epidemiológica.",

        ativa: true,
        destaque: true,

        categoriaVetor: CategoriaVetor.DENGUE,

        dataInicio: "2026-08-20",
        dataFim: "2026-08-20",

        horaInicio: "09:00",
        horaFim: "17:00",

        modalidade: ModalidadeEvento.PRESENCIAL,

        local: "Brasília - DF",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/workshop-dengue",

        imagem: {
            id: 1,
            nome: "Workshop SisVetor",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 0,
        },

        createdAt: "2026-07-18",
    },

    {
        id: 2,
        nome: "webinar-chagas",

        titulo: "Webinar sobre Vigilância da Doença de Chagas",

        descricao:
            "Apresentação de estratégias para utilização do SisVetor no apoio às ações de vigilância e controle da Doença de Chagas.",

        publicoAlvo:
            "Profissionais das equipes estaduais e municipais.",

        ativa: true,
        destaque: false,

        categoriaVetor: CategoriaVetor.CHAGAS,

        dataInicio: "2026-09-12",

        horaInicio: "14:00",
        horaFim: "16:00",

        modalidade: ModalidadeEvento.ONLINE,

        linkEvento:
            "https://meet.google.com/abc-defg-hij",

        linkInscricao:
            "https://sisvetor.sds.unb.br/eventos/webinar-chagas",

        imagem: {
            id: 2,
            nome: "Webinar Chagas",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 0,
        },

        createdAt: "2026-07-15",
    },

    {
        id: 3,
        nome: "oficina-planejamento",

        titulo: "Oficina de Planejamento das Ações de Campo",

        descricao:
            "Capacitação prática para utilização dos recursos de planejamento, execução e monitoramento das atividades de campo no SisVetor.",

        publicoAlvo:
            "Coordenadores municipais e supervisores de campo.",

        ativa: true,
        destaque: false,

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

        imagem: {
            id: 3,
            nome: "Oficina Planejamento",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 0,
        },

        createdAt: "2026-07-10",
    },
];