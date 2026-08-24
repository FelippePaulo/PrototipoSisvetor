import { CategoriaVetor, TipoArquivo } from "~/lib/api/enum";
import type { Documento } from "~/lib/api/documento";

export const documentosMock: Documento[] = [
    {
        id: 1,

        caminhoURL: "manual-usuario-sisvetor",

        titulo: "Manual do Usuário do SisVetor",

        resumo:
            "Guia completo para utilização das funcionalidades do Portal SisVetor e dos módulos do sistema.",

        ativo: true,

        destaque: true,

        categoriaVetor: CategoriaVetor.TODOS,

        arquivo: {
            id: 1,
            nome: "manual-sisvetor.pdf",
            tipoArquivo: TipoArquivo.DOCUMENTO,
            caminho: "/documentos/manual-sisvetor.pdf",
            tamanho: 5841234,
        },

        tags: [
            {
                id: 1,
                tag: "Manual",
            }
        ],

        createdAt: "2026-07-20T10:00:00",

        updatedAt: "2026-07-20T10:00:00",
    },

    {
        id: 2,

        caminhoURL: "nota-tecnica-dengue",

        titulo: "Nota Técnica - Vigilância da Dengue",

        resumo:
            "Orientações para o planejamento e execução das ações de vigilância da Dengue.",

        ativo: true,

        destaque: false,

        categoriaVetor: CategoriaVetor.DENGUE,

        arquivo: {
            id: 2,
            nome: "nota-tecnica-dengue.pdf",
            tipoArquivo: TipoArquivo.DOCUMENTO,
            caminho: "/documentos/nota-tecnica-dengue.pdf",
            tamanho: 3245890,
        },

        tags: [
            {
                id: 3,
                tag: "Nota Técnica",
            }
        ],

        createdAt: "2026-07-18T14:20:00",

        updatedAt: "2026-07-18T14:20:00",
    },

    {
        id: 3,

        caminhoURL: "protocolo-chagas",

        titulo: "Protocolo de Vigilância da Doença de Chagas",

        resumo:
            "Documento contendo procedimentos e recomendações para as ações de vigilância e controle da Doença de Chagas.",

        ativo: true,

        destaque: false,

        categoriaVetor: CategoriaVetor.CHAGAS,

        arquivo: {
            id: 3,
            nome: "protocolo-chagas.pdf",
            tipoArquivo: TipoArquivo.DOCUMENTO,
            caminho: "/documentos/protocolo-chagas.pdf",
            tamanho: 4689123,
        },

        tags: [
            {
                id: 5,
                tag: "Protocolo",
            }
        ],

        createdAt: "2026-07-15T09:45:00",

        updatedAt: "2026-07-15T09:45:00",
    },
];