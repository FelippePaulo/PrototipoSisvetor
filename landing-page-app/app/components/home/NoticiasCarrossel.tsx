import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { noticiasMock } from "~/mocks/noticias-mock";

export function NoticiasDestaque() {

    const noticias = noticiasMock.filter(
        (noticia) => noticia.ativa && noticia.destaque
    );

    const [indiceAtual, setIndiceAtual] = useState(0);

    const noticia = noticias[indiceAtual];

    const imagemPrincipal =
        noticia.conteudos[0]?.arquivos[0]?.arquivo.caminho ??
        "https://placehold.co/900x600";

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

                            <img
                                src={imagemPrincipal}
                                alt={noticia.titulo}
                                className="h-full w-full object-cover object-center"
                            />

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
                                {noticia.descricao}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2 ">
                                <span className="badge badge-primary w-fit border-cyan-300 bg-cyan-50 text-cyan-800 shadow-lg">
                                {noticia.categoriaVetor}
                            </span>

                                {noticia.tags.map((tag) => (

                                    <span
                                        key={tag.id}
                                        className="badge badge-outline"
                                    >
                                        {tag.tag}
                                    </span>

                                ))}

                            </div>

                            <button className="btn btn-primary mt-6 w-fit rounded-full px-8">

                                Mais detalhes

                                <ArrowRight size={18} />

                            </button>

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

export function formatarData(data?: string): string {
    if (!data) return "";

    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}