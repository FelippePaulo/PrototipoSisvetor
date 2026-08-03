import { ArrowRight, Download, FileText } from "lucide-react";
import { documentosMock } from "~/mocks/documentos-mock";


export function ListaDocumentos() {

    const documentos = documentosMock
        .filter((documento) => documento.ativo)
        .sort(
            (a, b) =>
                new Date(b.createdAt ?? "").getTime() -
                new Date(a.createdAt ?? "").getTime()
        )
        .slice(0, 3);

    return (

        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

            {/* Cabeçalho */}

            <div className="mb-6 flex items-center gap-3">

                <div className="rounded-xl bg-indigo-100 p-2 text-indigo-700">

                    <FileText size={22} />

                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                    Documentos Técnicos
                </h3>

            </div>

            {/* Lista */}

            <div className="divide-y divide-slate-200">

                {documentos.map((documento) => (

                    <button
                        key={documento.id}
                        type="button"
                        className="flex w-full cursor-pointer flex-col py-4 text-left transition-colors hover:bg-slate-50"
                    >

                        <span className="text-sm text-slate-500">
                            {formatarData(documento.createdAt)}
                        </span>

                        <span className="mt-1 font-semibold text-slate-800 transition-colors hover:text-indigo-700">
                            {documento.titulo}
                        </span>

                        <div className="mt-4 flex flex-wrap gap-2">

                            <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                {documento.categoriaVetor}
                            </span>

                            {documento.tags.map((tag) => (

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
                    href="/documentos"
                    className="inline-flex items-center gap-2 font-medium text-sky-700 transition-colors hover:text-sky-900"
                >

                    Ver todos

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