import { useEffect, useState } from "react";
import { getEventosAtivos } from "../api/eventoController";
import type { Evento } from "../api/evento";

/** Carrega os eventos ativos do backend. Mesmo padrão de useNoticiasAtivas. */
export function useEventosAtivos() {
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        let cancelado = false;

        async function carregar() {
            try {
                const response = await getEventosAtivos(0, 100);
                if (!cancelado) setEventos(response.content);
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

    return { eventos, carregando };
}
