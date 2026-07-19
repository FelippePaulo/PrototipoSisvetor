import {
    CategoriaVetor,
    TipoArquivo,
    TipoNoticia,
    type Noticia,
} from "~/lib/api/noticia";

export const noticiasMock: Noticia[] = [
        {
        id: 3,
        nome: "portal-sisvetor",
        titulo: "Portal SisVetor reúne notícias, eventos e conteúdos técnicos em um único ambiente",
        descricao:
            "A nova versão do Portal SisVetor centraliza informações institucionais, documentos, eventos, capacitações e notícias relacionadas à vigilância epidemiológica.",
        ativa: true,
        categoriaVetor: CategoriaVetor.TODOS,
        tipoNoticia: TipoNoticia.INFORMATIVO,
        destaque: true,

        tags: [
            { id: 1, tag: "Vigilância" },
            { id: 2, tag: "Tecnologia" },
        ],

        conteudos: [
            {
                id: 1,
                titulo: "Imagem de destaque",
                descricao: "Imagem principal da notícia.",
                conteudo: "",

                arquivos: [
                    {
                        id: 1,
                        arquivo: {
                            id: 1,
                            nome: "destaque-dengue.jpg",
                            tipoArquivo: TipoArquivo.IMAGEM,
                            caminho: "https://placehold.co/900x600",
                            tamanho: 248356,
                        },
                    },
                ],
            },
            {
                id: 2,
                titulo: "Corpo da notícia",
                descricao: "Texto principal",

                conteudo: `
O SisVetor recebeu novas funcionalidades voltadas ao planejamento das ações de vigilância.

As melhorias incluem evolução dos painéis estratégicos, gestão de territórios, planejamento das atividades de campo e novos recursos para apoio à tomada de decisão.
                `,

                arquivos: [],
            },
        ],

        createdAt: "2026-07-18T09:30:00",
        updatedAt: "2026-07-18T09:30:00",
    },
    {
        id: 1,
        nome: "sisvetor-amplia-funcionalidades",
        titulo: "SisVetor amplia funcionalidades para apoio às ações de vigilância",
        descricao:
            "Novas funcionalidades permitem maior integração entre planejamento, execução das atividades de campo e acompanhamento por meio de dashboards estratégicos.",
        ativa: true,
        categoriaVetor: CategoriaVetor.DENGUE,
        tipoNoticia: TipoNoticia.INFORMATIVO,
        destaque: true,

        tags: [
            { id: 1, tag: "Dashboards" },
            { id: 2, tag: "Tecnologia" },
        ],

        conteudos: [
            {
                id: 1,
                titulo: "Imagem de destaque",
                descricao: "Imagem principal da notícia.",
                conteudo: "",

                arquivos: [
                    {
                        id: 1,
                        arquivo: {
                            id: 1,
                            nome: "destaque-dengue.jpg",
                            tipoArquivo: TipoArquivo.IMAGEM,
                            caminho: "https://placehold.co/900x600",
                            tamanho: 248356,
                        },
                    },
                ],
            },
            {
                id: 2,
                titulo: "Corpo da notícia",
                descricao: "Texto principal",

                conteudo: `
O SisVetor recebeu novas funcionalidades voltadas ao planejamento das ações de vigilância.

As melhorias incluem evolução dos painéis estratégicos, gestão de territórios, planejamento das atividades de campo e novos recursos para apoio à tomada de decisão.
                `,

                arquivos: [],
            },
        ],

        createdAt: "2026-07-18T09:30:00",
        updatedAt: "2026-07-18T09:30:00",
    },

    {
        id: 2,
        nome: "novo-modulo-chagas",
        titulo: "Novo módulo fortalece as ações de vigilância da Doença de Chagas",
        descricao:
            "Municípios iniciam a utilização do novo módulo da plataforma para apoio às equipes de campo.",
        ativa: true,
        categoriaVetor: CategoriaVetor.CHAGAS,
        tipoNoticia: TipoNoticia.INFORMATIVO,
        destaque: true,

        tags: [
            { id: 5, tag: "Capacitação" },
        ],

        conteudos: [
            {
                id: 3,
                titulo: "Imagem de destaque",
                descricao: "Imagem principal",

                conteudo: "",

                arquivos: [
                    {
                        id: 2,
                        arquivo: {
                            id: 2,
                            nome: "destaque-chagas.jpg",
                            tipoArquivo: TipoArquivo.VIDEO,
                            caminho: "https://placehold.co/900x600",
                            tamanho: 265814,
                        },
                    },
                ],
            },
            {
                id: 4,
                titulo: "Corpo da notícia",
                descricao: "Texto principal",

                conteudo: `
A nova versão amplia o suporte às atividades de vigilância da Doença de Chagas, permitindo melhor acompanhamento das ações executadas pelos municípios.
                `,

                arquivos: [],
            },
        ],

        createdAt: "2026-07-15T14:10:00",
        updatedAt: "2026-07-15T14:10:00",
    },
];