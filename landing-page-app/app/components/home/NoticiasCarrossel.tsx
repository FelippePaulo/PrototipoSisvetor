import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router";

import { getAllNoticiasAtivas } from "~/lib/api/noticiaController";
import { slugify } from "~/lib/utils";
import type { Noticia } from "~/lib/api/noticia";

export function NoticiasDestaque() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [indiceAtual, setIndiceAtual] = useState(0);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        async function carregar() {
            try {
                const response = await getAllNoticiasAtivas();
                // Pega até 5 notícias mais recentes para o carrossel
                setNoticias(response.content.slice(0, 5));
            } catch (error) {
                console.error("Erro ao carregar notícias:", error);
            } finally {
                setCarregando(false);
            }
        }
        carregar();
    }, []);

    if (carregando) {
        return (
            <section className="bg-slate-50 pb-4">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-20">
                    <span className="loading loading-spinner loading-lg text-sky-700" />
                </div>
            </section>
        );
    }

    if (noticias.length === 0) {
        return null;
    }

    const noticia = noticias[indiceAtual];

    const imagemPrincipal =
        noticia.conteudos[0]?.arquivos[0]?.arquivo?.url ??
        "https://placehold.co/900x600/1e3a5f/ffffff?text=SisVetor";

    function noticiaAnterior() {
        setIndiceAtual((indice) =>
            indice === 0 ? noticias.length - 1 : indice - 1
        );
    }

    function proximaNoticia() {
        setIndiceAtual((indice) => (indice + 1) % noticias.length);
    }

    return (
        <section className="bg-slate-50 pb-4">
            <div className="mx-auto max-w-7xl px-6">
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                    <div className="grid h-[320px] lg:grid-cols-[0.9fr_1.1fr]">
                        {/* Imagem */}
                        <div className="h-full overflow-hidden">
                            {imagemPrincipal ? (
                                <img
                                    src={imagemPrincipal}
                                    alt={noticia.titulo}
                                    className="h-full w-full object-cover object-center"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-100">
                                    <span className="text-4xl font-bold text-sky-300">
                                        SV
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Conteúdo */}
                        <div className="flex h-full flex-col px-8 py-4">
                            <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-tight text-slate-900">
                                {noticia.titulo}
                            </h3>

                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                                {noticia.descricao}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {noticia.tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800"
                                    >
                                        {tag.tag}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={`/noticias/${slugify(noticia.titulo)}`}
                                className="btn btn-primary mt-6 w-fit rounded-full px-8"
                            >
                                Mais detalhes
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Navegação */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <button
                        className="btn btn-circle btn-outline"
                        onClick={noticiaAnterior}
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <div className="flex gap-3">
                        {noticias.map((_, indice) => (
                            <button
                                key={indice}
                                onClick={() => setIndiceAtual(indice)}
                                className={`h-3 w-3 rounded-full transition-colors ${
                                    indice === indiceAtual
                                        ? "bg-sky-600"
                                        : "bg-slate-300"
                                }`}
                            />
                        ))}
                    </div>

                    <button
                        className="btn btn-circle btn-outline"
                        onClick={proximaNoticia}
                    >
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
