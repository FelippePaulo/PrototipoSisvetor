/**
 * Categoria temática da notícia.
 *
 * Utilizada para classificar e organizar as notícias do portal,
 * permitindo a navegação e o filtro por vetor ou agravo de interesse.
 */
export enum CategoriaVetor {
    TODOS = "TODOS",
    DENGUE = "DENGUE",
    CHAGAS = "CHAGAS",
}

/**
 * Classificação editorial da notícia.
 *
 * Define a natureza do conteúdo publicado, permitindo
 * diferenciar notícias informativas, eventos e capacitações.
 */
export enum TipoNoticia {
    INFORMATIVO = "INFORMATIVO",
    EVENTO = "EVENTO",
    CAPACITACAO = "CAPACITACAO",
}

/**
 * Tipo do arquivo associado ao conteúdo da notícia.
 *
 * Define o formato do recurso utilizado na apresentação
 * do conteúdo, como imagem, vídeo ou documento.
 */
export enum TipoArquivo {
    IMAGEM = "IMAGEM",
    VIDEO = "VIDEO",
    DOCUMENTO = "DOCUMENTO",
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
    tipoNoticia: TipoNoticia;
    destaque: boolean;
    tags: NoticiaTag[];
    conteudos: NoticiaConteudo[];
    createdAt?: string;
    updatedAt?: string;
}


