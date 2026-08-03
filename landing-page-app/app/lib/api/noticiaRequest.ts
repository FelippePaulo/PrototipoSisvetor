import type { NoticiaPage } from './noticia';

export class NoticiaRequester {
    private baseUrl: string;

    constructor(baseUrl: string = '/api/noticias') {
        this.baseUrl = baseUrl;
    }

    async fetchNoticiasAtivas(page: number = 0, size: number = 12): Promise<NoticiaPage> {
        const url = `${this.baseUrl}/ativo?page=${page}&size=${size}&sort=id,desc`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Erro ao buscar notícias ativas: ${response.statusText}`);
        }
        return response.json();
    }
}
