import { useEffect, useState } from "react";
import { getDocumentosAtivos } from "../api/documentoController";
import type { Documento } from "../api/documento";

/** Carrega os documentos ativos do backend. Mesmo padrão de useNoticiasAtivas. */
export function useDocumentosAtivos() {
    const [documentos, setDocumentos] = useState<Documento[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        let cancelado = false;

        async function carregar() {
            try {
                const response = await getDocumentosAtivos(0, 100);
                if (!cancelado) setDocumentos(response.content);
            } catch (error) {
                console.error(error);
            } finally {
                if (!cancelado) setCarregando(false);
            }
        }

        carregar();
        return () => {
            cancelado = true;
        };
    }, []);

    return { documentos, carregando };
}
