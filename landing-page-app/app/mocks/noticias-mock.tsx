import { CategoriaVetor, TipoArquivo, TipoConteudo } from "~/lib/api/enum";
import type { Noticia } from "~/lib/api/noticia";

export const noticiasMock: Noticia[] = [
    {
        id: 3,

        caminhoURL: "portal-sisvetor",

        titulo:
            "Portal SisVetor reúne notícias, eventos e conteúdos técnicos em um único ambiente",

        resumo:
            "A nova versão do Portal SisVetor centraliza informações institucionais, documentos, eventos e notícias relacionadas à vigilância epidemiológica.",

        ativa: true,

        categoriaVetor: CategoriaVetor.TODOS,

        tipoConteudo: TipoConteudo.INFORMATIVO,

        destaque: true,

        imagemDestaque: {
            id: 1,
            nome: "portal-sisvetor.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 248356,
        },

        tags: [
            {
                id: 1,
                tag: "Vigilância",
            }  
        ],

        conteudo: [
            {
                id: 1,
                ordem: 1,
                titulo: "Introdução",

                texto:
                    "O Portal SisVetor reúne notícias, eventos e conteúdos técnicos em um único ambiente para apoiar as ações de vigilância epidemiológica.",

                arquivos: [],
            },

            {
                id: 2,
                ordem: 2,
                titulo: "Imagem",

                texto: "",

                arquivos: [
                        {
                            id: 10,
                            nome: "portal.jpg",
                            tipoArquivo: TipoArquivo.IMAGEM,
                            caminho: "https://placehold.co/900x600",
                            tamanho: 248356,
                        },
                    
                ],
            },

            {
                id: 3,
                ordem: 3,
                titulo: "Funcionalidades",

                texto:
                    "A plataforma oferece recursos para planejamento, execução e acompanhamento das atividades de campo, além de dashboards estratégicos.",

                arquivos: [],
            },
        ],

        createdAt: "2026-07-18T09:30:00",

        updatedAt: "2026-07-18T09:30:00",
    },

    {
        id: 1,

        caminhoURL: "sisvetor-amplia-funcionalidades",

        titulo:
            "SisVetor amplia funcionalidades para apoio às ações de vigilância",

        resumo:
            "Novas funcionalidades permitem maior integração entre planejamento, execução das atividades de campo e acompanhamento por meio de dashboards estratégicos.",

        ativa: true,

        categoriaVetor: CategoriaVetor.DENGUE,

        tipoConteudo: TipoConteudo.INFORMATIVO,

        destaque: true,

        imagemDestaque: {
            id: 2,
            nome: "destaque-dengue.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 248356,
        },

        tags: [
            {
                id: 3,
                tag: "Dashboards",
            }   
        ],

        conteudo: [
            {
                id: 4,
                ordem: 1,
                titulo: "Atualização",

                texto:
                    "O SisVetor recebeu novas funcionalidades voltadas ao planejamento das ações de vigilância.",

                arquivos: [],
            },

            {
                id: 5,
                ordem: 2,
                titulo: "Imagem",

                texto: "",

                arquivos: [
                    {
                            id: 20,
                            nome: "dengue.jpg",
                            tipoArquivo: TipoArquivo.IMAGEM,
                            caminho: "https://placehold.co/900x600",
                            tamanho: 248356,
                    },
                ],
            },

            {
                id: 6,
                ordem: 3,
                titulo: "Novidades",

                texto:
                    "As melhorias incluem evolução dos painéis estratégicos, gestão de territórios e novos recursos para apoio à tomada de decisão.",

                arquivos: [],
            },
        ],

        createdAt: "2026-07-16T09:30:00",

        updatedAt: "2026-07-16T09:30:00",
    },

    {
        id: 2,

        caminhoURL: "novo-modulo-chagas",

        titulo:
            "Novo módulo fortalece as ações de vigilância da Doença de Chagas",

        resumo:
            "Municípios iniciam a utilização do novo módulo da plataforma para apoio às equipes de campo.",

        ativa: true,

        categoriaVetor: CategoriaVetor.CHAGAS,

        tipoConteudo: TipoConteudo.INFORMATIVO,

        destaque: true,

        imagemDestaque: {
            id: 3,
            nome: "destaque-chagas.jpg",
            tipoArquivo: TipoArquivo.IMAGEM,
            caminho: "https://placehold.co/900x600",
            tamanho: 265814,
        },

        tags: [
            {
                id: 5,
                tag: "Capacitação",
            } 
        ],

        conteudo: [
            {
                id: 7,
                ordem: 1,
                titulo: "Novo módulo",

                texto:
                    "A nova versão amplia o suporte às atividades de vigilância da Doença de Chagas, permitindo melhor acompanhamento das ações executadas pelos municípios.",

                arquivos: [],
            },

            {
                id: 8,
                ordem: 2,
                titulo: "Vídeo demonstrativo",

                texto: "",

                arquivos: [
                    {
                            id: 30,
                            nome: "video-chagas.mp4",
                            tipoArquivo: TipoArquivo.VIDEO,
                            caminho: "/videos/chagas.mp4",
                            tamanho: 15423698,
                       
                    },
                ],
            },
        ],

        createdAt: "2026-07-15T14:10:00",

        updatedAt: "2026-07-15T14:10:00",
    },
];