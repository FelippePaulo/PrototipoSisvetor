import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowLeft, ArrowRight, Newspaper } from "lucide-react";

import type { CategoriaVetor } from "~/lib/api/enum";
import { pertenceCategoria } from "~/lib/utils";
import { useNoticiasAtivas, ordenarPorMaisRecente } from "~/lib/hooks/useNoticiasAtivas";

/** Tempo que cada notícia fica visível antes de passar para a próxima. */
const INTERVALO_TROCA_MS = 7000;

interface NoticiasDestaqueProps {
    categoria: CategoriaVetor;
}

export function NoticiasDestaque({ categoria }: NoticiasDestaqueProps) {

    const { noticias: noticiasAtivas, carregando } = useNoticiasAtivas();

    const noticiasDaCategoria = noticiasAtivas.filter((noticia) =>
        pertenceCategoria(noticia.categoriaVetor, categoria)
    );

    // Prioriza as notícias marcadas como destaque; se nenhuma estiver marcada, mostra as mais
    // recentes para a seção não ficar vazia.
    const destaques = noticiasDaCategoria.filter((noticia) => noticia.destaque);

    const noticias = (destaques.length > 0 ? destaques : noticiasDaCategoria)
        .slice()
        .sort(ordenarPorMaisRecente)
        .slice(0, 5);

    const [indiceAtual, setIndiceAtual] = useState(0);

    // A lista muda de tamanho quando o fetch termina e quando a categoria é trocada, então
    // garante um índice sempre válido.
    useEffect(() => {
        setIndiceAtual(0);
    }, [noticias.length, categoria]);

    useEffect(() => {
        if (noticias.length <= 1) return;

        const timeout = setTimeout(() => {
            setIndiceAtual((indice) => (indice + 1) % noticias.length);
        }, INTERVALO_TROCA_MS);

        return () => clearTimeout(timeout);
    }, [indiceAtual, noticias.length]);

    if (carregando) {
        return (
            <section className="bg-slate-50 py-5">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="flex h-[320px] items-center justify-center rounded-3xl bg-white shadow-xl">
                        <span className="loading loading-spinner loading-lg text-sky-700"></span>
                    </div>

                </div>

            </section>
        );
    }

    if (noticias.length === 0) {
        return null;
    }

    const indiceVisivel = Math.min(indiceAtual, noticias.length - 1);

    function noticiaAnterior() {
        setIndiceAtual((indice) =>
            indice === 0 ? noticias.length - 1 : indice - 1
        );
    }

    function proximaNoticia() {
        setIndiceAtual((indice) => (indice + 1) % noticias.length);
    }

    return (
        <section className="bg-slate-50 py-5">

            <div className="mx-auto max-w-7xl px-6">

                {/*
                <div className="pb-2">
                    <span className="badge badge-info badge-outline w-fit pd-">
                        Notícias em destaque
                    </span>
                </div>
                */}

                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

                    {/* Trilho deslizante: todos os slides lado a lado, deslocados por transform */}

                    <div
                        className="flex h-[320px] transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${indiceVisivel * 100}%)` }}
                    >

                        {noticias.map((noticia) => (

                            <div
                                key={noticia.id}
                                className="grid h-full w-full flex-shrink-0 lg:grid-cols-[0.9fr_1.1fr]"
                            >

                                {/* Imagem */}

                                <div className="h-full overflow-hidden bg-slate-100">

                                    {noticia.imagemDestaque ? (

                                        <img
                                            src={noticia.imagemDestaque.caminho}
                                            alt={noticia.imagemDestaque.nome ?? noticia.titulo}
                                            className="h-full w-full object-cover object-center"
                                        />

                                    ) : (

                                        <div className="flex h-full w-full items-center justify-center text-slate-300">
                                            <Newspaper size={48} />
                                        </div>

                                    )}

                                </div>

                                {/* Conteúdo */}

                                <div className="flex h-full flex-col px-8 py-4">

                                    <p className="mt-3 text-xs text-slate-500">
                                        {formatarData(noticia.createdAt)}
                                    </p>

                                    <h3 className="mt-3 line-clamp-2 text-xl font-bold leading-tight text-slate-900">
                                        {noticia.titulo}
                                    </h3>

                                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                                        {noticia.resumo}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">

                                        {noticia.categoriaVetor && (

                                            <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                                {noticia.categoriaVetor}
                                            </span>

                                        )}

                                        {noticia.tags?.map((tag) => (

                                            <span
                                                key={tag.id}
                                                className="badge badge-sm badge-outline"
                                            >
                                                {tag.tag}
                                            </span>

                                        ))}

                                    </div>

                                    <Link
                                        to={`/noticias/${noticia.caminhoURL}`}
                                        className="btn btn-primary mt-6 w-fit rounded-full px-8"
                                    >

                                        Mais detalhes

                                        <ArrowRight size={18} />

                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Navegação */}

                {noticias.length > 1 && (

                    <div className="mt-8 flex items-center justify-center gap-6">

                        <button
                            className="btn btn-circle btn-outline"
                            onClick={noticiaAnterior}
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <div className="flex gap-3">

                            {noticias.map((noticia, indice) => (

                                <button
                                    key={noticia.id}
                                    onClick={() => setIndiceAtual(indice)}
                                    className={`h-3 w-3 rounded-full transition-colors ${
                                        indice === indiceVisivel
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

                )}

            </div>

        </section>
    );
}

export function formatarData(data?: string): string {
    if (!data) return "";

    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}
