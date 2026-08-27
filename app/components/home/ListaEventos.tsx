import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router";
import type { CategoriaVetor } from "~/lib/api/enum";
import { pertenceCategoria } from "~/lib/utils";
import { useEventosAtivos } from "~/lib/hooks/useEventosAtivos";

interface ListaEventosProps {
    categoria: CategoriaVetor;
}

export function ListaEventos({ categoria }: ListaEventosProps) {

    const { eventos: eventosAtivos, carregando } = useEventosAtivos();

    const eventos = eventosAtivos
        .filter((evento) => pertenceCategoria(evento.categoriaVetor, categoria))
        .slice()
        .sort((a, b) => (a.dataInicio ?? "").localeCompare(b.dataInicio ?? ""))
        .slice(0, 3);

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            {/* Cabeçalho */}

            <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-700">

                    <CalendarDays size={22} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                    Próximos Eventos
                </h3>

            </div>

            {/* Lista */}

            {carregando ? (

                <div className="flex h-40 items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-emerald-700"></span>
                </div>

            ) : eventos.length === 0 ? (

                <p className="py-4 text-slate-600">
                    Nenhum evento programado para este programa.
                </p>

            ) : (

                <div className="divide-y divide-slate-200">

                    {eventos.map((evento) => (

                        <Link
                            key={evento.id}
                            to={`/eventos/${evento.caminhoURL}`}
                            className="group flex w-full cursor-pointer flex-col py-4 text-left transition-colors hover:bg-slate-50"
                        >

                            <span className="text-sm text-slate-500">
                                {formatarData(evento.dataInicio)}
                            </span>

                            <span className="mt-1 font-semibold text-slate-800 transition-colors group-hover:text-emerald-700">
                                {evento.nome}
                            </span>

                            <span className="mt-2 text-sm text-slate-500">

                                {evento.modalidade}

                                {evento.local && ` • ${evento.local}`}

                            </span>

                            <div className="mt-4 flex flex-wrap gap-2">

                                {evento.categoriaVetor && (

                                    <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                        {evento.categoriaVetor}
                                    </span>

                                )}

                                {evento.tags?.map((tag) => (

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

                <Link
                    to="/eventos"
                    className="inline-flex items-center gap-2 font-medium text-sky-700 transition-colors hover:text-sky-900"
                >

                    Ver todos

                    <ArrowRight size={18} />

                </Link>

            </div>

        </div>

    );

}

function formatarData(data?: string) {

    if (!data) return "";

    // LocalDate ("2026-08-20"): monta manualmente para não sofrer deslocamento de fuso.
    const [ano, mes, dia] = data.split("-").map(Number);
    if (!ano || !mes || !dia) return "";

    return new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

}
