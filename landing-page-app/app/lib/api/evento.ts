import type { CategoriaVetor, ModalidadeEvento } from "./enum";
import type { Arquivo, NoticiaTag } from "./noticia";

/**
 * Representa um evento divulgado no Portal SisVetor.
 *
 * Um evento pode corresponder a workshops, webinários,
 * reuniões técnicas, oficinas ou outras ações institucionais
 * relacionadas à vigilância epidemiológica.
 */
export interface Evento {
    id: number;
    /**
     * Caminho utilizado na URL amigável.
    */
    caminhoURL: string;
    nome: string;
    descricao: string;
    publicoAlvo: string;
    ativa: boolean;
    destaque: boolean;
    imagemDestaque: Arquivo;
    categoriaVetor: CategoriaVetor;
    dataInicio: string;
    dataFim?: string;
    horaInicio?: string;
    horaFim?: string;
    modalidade: ModalidadeEvento;
    local?: string;
    /**
     * Link para acesso ao evento
     * (Google Meet, Teams, Zoom, YouTube etc.).
     */
    linkEvento?: string;
    /**
     * Link para inscrição no evento.
     */
    linkInscricao?: string;
    /**
     * Imagem de destaque do evento.
     */
    tags: NoticiaTag[];
    createdAt?: string;
    updatedAt?: string;
}