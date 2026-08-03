import type { NoticiaPage } from './noticia';
import { NoticiaRequester } from './noticiaRequest';

const noticiaRequester = new NoticiaRequester('http://localhost:9995/api/v1/noticias');

export async function getNoticiasAtivas(
    page: number = 0,
    size: number = 12
): Promise<NoticiaPage> {
    const noticias = await noticiaRequester.fetchNoticiasAtivas(page, size);
    return noticias;
}

export async function getAllNoticiasAtivas(): Promise<NoticiaPage> {
    // Busca um volume grande de notícias para permitir filtro local por slug
    return await noticiaRequester.fetchNoticiasAtivas(0, 100);
}
