/**
 * Resolução da URL base do backend.
 *
 * A busca de dados deste app é toda client-side (`useEffect`), ou seja, quem chama a API é o
 * browser do usuário — não o container. Por isso a URL precisa ser a **pública** do backend
 * (ex.: https://backend.sisvetor.sds.unb.br) e nunca um hostname interno do Docker
 * (ex.: http://sisvetor-backend:9995), que o browser não enxerga.
 *
 * O valor é definido em tempo de execução, não de build: o loader do `root.tsx` lê
 * `process.env.API_URL` no servidor e injeta em `window.ENV`. Assim a mesma imagem Docker serve
 * qualquer ambiente, bastando trocar a variável — mesma filosofia do `config.json` da admin.
 *
 * Sem `API_URL` definida, cai no padrão de desenvolvimento, então `npm run dev` funciona sem
 * nenhuma configuração extra.
 */
export const API_URL_PADRAO = "http://localhost:9995";

declare global {
    interface Window {
        ENV?: { API_URL?: string };
    }
}

export function getApiUrl(): string {
    // Client: valor injetado pelo loader do root em window.ENV.
    if (typeof window !== "undefined" && window.ENV?.API_URL) {
        return window.ENV.API_URL;
    }

    // Server (SSR/loaders): lê direto da variável de ambiente.
    if (typeof process !== "undefined" && process.env?.API_URL) {
        return process.env.API_URL;
    }

    return API_URL_PADRAO;
}
