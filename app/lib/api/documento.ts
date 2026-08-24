import type { CategoriaVetor } from "./enum";
import type { Arquivo, NoticiaTag } from "./noticia";

/**
 * Representa um documento publicado no Portal SisVetor.
 *
 * O documento corresponde a um conteúdo disponibilizado para
 * consulta ou download, como manuais, notas técnicas,
 * protocolos, apresentações e formulários.
 */
export interface Documento {
    id: number;

    /**
     * Caminho utilizado na URL amigável.
     */
    caminhoURL: string;

    titulo: string;

    resumo: string;

    ativo: boolean;

    destaque: boolean;

    categoriaVetor: CategoriaVetor;

    /**
     * Documento disponibilizado para download.
     */
    arquivo: Arquivo;

    tags: NoticiaTag[];

    createdAt?: string;

    updatedAt?: string;
}