import { ArrowRight, CalendarDays } from "lucide-react";
import { eventosMock } from "~/mocks/eventos-mock";

export function ListaEventos() {

    const eventos = eventosMock
        .filter((evento) => evento.ativa)
        .sort(
            (a, b) =>
                new Date(a.dataInicio).getTime() -
                new Date(b.dataInicio).getTime()
        )
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

            <div className="divide-y divide-slate-200">

                {eventos.map((evento) => (

                    <button
                        key={evento.id}
                        type="button"
                        className="flex w-full cursor-pointer flex-col py-4 text-left transition-colors hover:bg-slate-50"
                    >

                        <span className="text-sm text-slate-500">
                            {formatarData(evento.dataInicio)}
                        </span>

                        <span className="mt-1 font-semibold text-slate-800 transition-colors hover:text-emerald-700">
                            {evento.titulo}
                        </span>

                        <span className="mt-2 text-sm text-slate-500">

                            {evento.modalidade}

                            {evento.local && ` • ${evento.local}`}

                        </span>

                        <div className="mt-4 flex flex-wrap gap-2">

                                <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                    {evento.categoriaVetor}
                                </span>

                                {evento.tags.map((tag) => (

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
                    href="/eventos"
                    className="inline-flex items-center gap-2 font-medium text-emerald-700 transition-colors hover:text-emerald-900"
                >

                    Ver todos

                    <ArrowRight size={18} />

                </a>

            </div>

        </div>

    );

}

function formatarData(data: string) {

    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

}