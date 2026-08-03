import type { CategoriaVetor, TipoArquivo, TipoConteudo } from "./enum";

/**
 * Representa uma notícia publicada no Portal SisVetor.
 */
export interface Noticia {
    id: number;
    /**
     * Caminho utilizado na URL amigável.
    */
    caminhoURL: string;
    titulo: string;
    resumo: string;
    imagemDestaque: Arquivo;
    ativa: boolean;
    categoriaVetor: CategoriaVetor;
    tipoConteudo: TipoConteudo;
    destaque: boolean;
    tags: NoticiaTag[];
    conteudo: BlocoConteudoNoticia[];
    createdAt?: string;
    updatedAt?: string;
}

/**
 * Tag utilizada para classificar e facilitar a pesquisa
 * de notícias relacionadas.
 */
export interface NoticiaTag {
    id: number;
    tag: string;
}

export interface Arquivo {
    id: number;
    nome: string;
    tipoArquivo: TipoArquivo;
    caminho: string;
    tamanho: number;
}

export interface BlocoConteudoNoticia {
    id: number;
    ordem: number;
    titulo: string;
    texto: string;
    arquivos: Arquivo[];
}



