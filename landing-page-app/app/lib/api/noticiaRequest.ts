export class NoticiaRequester {
    private baseUrl: string;

    constructor(baseUrl: string = '/api/noticias') {
        this.baseUrl = baseUrl;
    }

    async fetchNoticiasAtivas() {
        const response = await fetch(`${this.baseUrl}/ativo`, {
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
