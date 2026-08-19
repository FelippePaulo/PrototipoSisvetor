import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router";
import { TipoConteudo, type CategoriaVetor } from "~/lib/api/enum";
import { pertenceCategoria } from "~/lib/utils";
import { useNoticiasAtivas, ordenarPorMaisRecente } from "~/lib/hooks/useNoticiasAtivas";

interface ListaNoticiasProps {
    categoria: CategoriaVetor;
}

export function ListaNoticias({ categoria }: ListaNoticiasProps) {

    const { noticias: noticiasAtivas, carregando } = useNoticiasAtivas();

    const noticias = noticiasAtivas
        .filter((noticia) => noticia.tipoConteudo === TipoConteudo.INFORMATIVO)
        .filter((noticia) => pertenceCategoria(noticia.categoriaVetor, categoria))
        .sort(ordenarPorMaisRecente)
        .slice(0, 5);

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            {/* Cabeçalho */}

            <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-sky-100 p-2 text-sky-700">

                    <Newspaper size={22} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                    Últimas Notícias
                </h3>

            </div>

            {/* Lista */}

            {carregando ? (

                <div className="flex h-40 items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-sky-700"></span>
                </div>

            ) : noticias.length === 0 ? (

                <p className="py-4 text-slate-600">
                    Nenhuma notícia publicada até o momento.
                </p>

            ) : (

                <div className="divide-y divide-slate-200">

                    {noticias.map((noticia) => (

                        <Link
                            key={noticia.id}
                            to={`/noticias/${noticia.caminhoURL}`}
                            className="group flex w-full cursor-pointer flex-col py-4 text-left transition-colors hover:bg-slate-50"
                        >

                            <span className="text-sm text-slate-500">
                                {formatarData(noticia.createdAt)}
                            </span>

                            <span className="mt-1 font-semibold text-slate-800 transition-colors group-hover:text-sky-700">
                                {noticia.titulo}
                            </span>

                            {noticia.resumo && (

                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                                    {noticia.resumo}
                                </p>

                            )}

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

                        </Link>

                    ))}

                </div>

            )}

            {/* Rodapé */}

            <div className="mt-6">

                <a
                    href="/noticias"
                    className="inline-flex items-center gap-2 font-medium text-sky-700 transition-colors hover:text-sky-900"
                >
                    Ver todas

                    <ArrowRight size={18} />

                </a>

            </div>

        </div>

    );

}

function formatarData(data?: string) {

    if (!data) return "";

    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

}
