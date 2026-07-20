/**
 * Categoria temática da notícia.
 *
 * Utilizada para classificar e organizar as notícias do portal,
 * permitindo a navegação e o filtro por vetor ou agravo de interesse.
 */
export enum CategoriaVetor {
    TODOS = "Todos",
    DENGUE = "Dengue",
    CHAGAS = "Chagas",
}

/**
 * Classificação editorial da notícia.
 *
 * Define a natureza do conteúdo publicado, permitindo
 * diferenciar notícias informativas, eventos e capacitações.
 */
export enum TipoConteudo {
    INFORMATIVO = "INFORMATIVO",
    EVENTO = "EVENTO",
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
    DOCUMENTO = "DOCUMENTO"
}

export enum ModalidadeEvento {
    PRESENCIAL = "PRESENCIAL",
    ONLINE = "ONLINE",
    HIBRIDO = "HIBRIDO",
}
