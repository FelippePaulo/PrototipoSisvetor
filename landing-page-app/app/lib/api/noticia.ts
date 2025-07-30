export interface NoticiaTag {
    id: number;
    tag: string;
}

export interface Arquivo {
    id: number;
    nome: string;
    tipo: string;
    caminho: string;
    tamanho: number;
}

export interface NoticiaArquivo {
    id: number;
    arquivo: Arquivo;
}

export interface NoticiaConteudo {
    id: number;
    nome: string;
    descricao: string;
    conteudo: string;
    ordem: number;
    arquivos: NoticiaArquivo[];
}

export interface Noticia {
    id: number;
    nome: string;
    titulo: string;
    descricao: string;
    ativa: boolean;
    tags: NoticiaTag[];
    conteudos: NoticiaConteudo[];
    createdAt?: string;
    updatedAt?: string;
}

export interface Paginacao {
    page?: number;
    size?: number;
    sort?: string;
}

export interface NoticiaPage {
    content: Noticia[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}
