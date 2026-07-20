import { ArrowRight, Newspaper } from "lucide-react";
import { TipoConteudo } from "~/lib/api/enum";
import { noticiasMock } from "~/mocks/noticias-mock";


export function ListaNoticias() {

    const noticias = noticiasMock
        .filter(
            (noticia) =>
                noticia.ativa &&
                noticia.tipoConteudo === TipoConteudo.INFORMATIVO
        )
        .sort(
            (a, b) =>
                new Date(b.createdAt ?? "").getTime() -
                new Date(a.createdAt ?? "").getTime()
        )
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

            <div className="divide-y divide-slate-200">

                {noticias.map((noticia) => (

                    <button
                        key={noticia.id}
                        type="button"
                        className="flex w-full cursor-pointer flex-col py-4 text-left transition-colors hover:bg-slate-50"
                    >

                        <span className="text-sm text-slate-500">
                            {formatarData(noticia.createdAt)}
                        </span>

                        <span className="mt-1 font-semibold text-slate-800 transition-colors hover:text-sky-700">
                            {noticia.titulo}
                        </span>

                        <div className="mt-4 flex flex-wrap gap-2">

                                <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                    {noticia.categoriaVetor}
                                </span>

                                {noticia.tags.map((tag) => (

                                    <span
                                        key={tag.id}
                                        className="badge badge-sm badge-outline"
                                    >
                                        {tag.tag}
                                    </span>

                                ))}

                            </div>

                    </button>

                ))}

            </div>

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