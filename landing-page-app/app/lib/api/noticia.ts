import type { CategoriaVetor, TipoArquivo, TipoConteudo } from "./enum";

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

export interface NoticiaArquivo {
    id: number;
    arquivo: Arquivo;
}

export interface NoticiaConteudo {
    id: number;
    titulo: string;
    descricao: string;
    conteudo: string;
    arquivos: NoticiaArquivo[];
}

/**
 * Representa uma notícia publicada no Portal SisVetor.
 *
 * A notícia possui informações editoriais, categoria temática,
 * tipo de publicação, conteúdo organizado em seções e arquivos
 * associados para apresentação no portal.
 */
export interface Noticia {
    id: number;
    nome: string;
    titulo: string;
    descricao: string;
    ativa: boolean;
    categoriaVetor: CategoriaVetor;
    tipoConteudo: TipoConteudo;
    destaque: boolean;
    tags: NoticiaTag[];
    conteudos: NoticiaConteudo[];
    createdAt?: string;
    updatedAt?: string;
}

