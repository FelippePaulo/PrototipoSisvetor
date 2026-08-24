import { useEffect, useState } from "react";
import { getNoticiasAtivas } from "../api/noticiaController";
import type { Noticia } from "../api/noticia";

/**
 * Carrega as notícias ativas do backend para uso nos blocos da home.
 *
 * Não existe endpoint público que filtre por destaque/tipo de conteúdo, então busca um lote
 * maior de uma vez e deixa cada componente recortar o que precisa no cliente (mesma limitação
 * de escala das rotas /noticias e /noticias/:slug).
 */
export function useNoticiasAtivas() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        let cancelado = false;

        async function carregar() {
            try {
                const response = await getNoticiasAtivas(0, 100);
                if (!cancelado) {
                    setNoticias(response.content);
                }
            } catch (error) {
                console.error(error);
            } finally {
                if (!cancelado) {
                    setCarregando(false);
                }
            }
        }

        carregar();

        return () => {
            cancelado = true;
        };
    }, []);

    return { noticias, carregando };
}

/**
 * Ordena da mais recente para a mais antiga. Notícias sem `createdAt` (o backend devolve null
 * para registros cuja data de criação foi perdida em edições antigas) caem para o fim, com o id
 * como critério de desempate.
 */
export function ordenarPorMaisRecente(a: Noticia, b: Noticia): number {
    const tempo = (noticia: Noticia) =>
        noticia.createdAt ? new Date(noticia.createdAt).getTime() : 0;

    return tempo(b) - tempo(a) || b.id - a.id;
}
