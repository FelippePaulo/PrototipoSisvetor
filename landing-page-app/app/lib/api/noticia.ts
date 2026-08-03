/**
 * Tag utilizada para classificar e facilitar a pesquisa
 * de notícias relacionadas.
 */
export interface NoticiaTag {
    id: number;
    tag: string;
}

/**
 * Modelo de arquivo (reflete ArquivoSemProprietarioDtoOutput do backend).
 */
export interface Arquivo {
    id: number;
    nome: string;
    descricao?: string;
    url: string;
    tipoArquivo: string;
    nomeArquivo: string;
}

/**
 * Relação entre conteúdo e arquivo.
 */
export interface NoticiaArquivo {
    id: number;
    arquivo: Arquivo;
}

/**
 * Conteúdo de uma seção da notícia (reflete NoticiaConteudoDtoOutput do backend).
 */
export interface NoticiaConteudo {
    id: number;
    nome: string;
    descricao: string;
    conteudo: string;
    ordem: number;
    arquivos: NoticiaArquivo[];
}

/**
 * Representa uma notícia publicada no Portal SisVetor.
 * Alinhada com NoticiaDtoOutput do backend.
 */
export interface Noticia {
    id: number;
    nome: string;
    titulo: string;
    descricao: string;
    ativa: boolean;
    tags: NoticiaTag[];
    conteudos: NoticiaConteudo[];
}

/**
 * Página paginada de notícias (reflete Page<NoticiaDtoOutput> do Spring).
 */
export interface NoticiaPage {
    content: Noticia[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
}


