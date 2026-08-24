import type { NoticiaPage } from './noticia';
import { NoticiaRequester } from './noticiaRequest';

const noticiaRequester = new NoticiaRequester('http://localhost:9995/api/v1/noticias');

export async function getNoticiasAtivas(page: number = 0, size: number = 20): Promise<NoticiaPage> {
    return noticiaRequester.fetchNoticiasAtivas(page, size);
}
