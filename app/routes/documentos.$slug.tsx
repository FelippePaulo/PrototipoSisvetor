import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { getDocumentosAtivos } from '../lib/api/documentoController';
import type { Documento } from '../lib/api/documento';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { formatarData, formatarTamanho } from './documentos';

export function meta() {
  return [
    { title: "Documento - Sisvetor" },
    { name: "description", content: "Detalhes do documento" },
  ];
}

export default function DocumentoDetalhes() {
    const { slug } = useParams();
    const [documento, setDocumento] = useState<Documento | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregar() {
            try {
                // Sem endpoint público por caminhoURL — filtra no cliente, como nas demais rotas.
                const response = await getDocumentosAtivos(0, 100);
                const encontrado = response.content.find((d) => d.caminhoURL === slug) || null;
                setDocumento(encontrado);
                if (!encontrado) setErro(true);
            } catch (error) {
                console.error(error);
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        if (slug) carregar();
    }, [slug]);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 flex-col">
                {carregando ? (
                    <div className="flex flex-1 items-center justify-center bg-slate-50">
                        <span className="loading loading-spinner loading-lg text-indigo-700"></span>
                    </div>
                ) : erro || !documento ? (
                    <div className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-16">
                        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                            <FileText className="mx-auto text-slate-400" size={40} />
                            <h1 className="mt-4 text-xl font-bold text-slate-900">Documento não encontrado</h1>
                            <p className="mt-2 text-slate-600">
                                Ele pode ter sido removido ou o endereço está incorreto.
                            </p>
                            <Link to="/documentos" className="btn btn-primary mt-6 rounded-full px-8">
                                Voltar para documentos
                            </Link>
                        </div>
                    </div>
                ) : (
                    <article className="flex-1 bg-slate-50 py-10">
                        <div className="mx-auto max-w-4xl px-6">
                            <Link
                                to="/documentos"
                                className="inline-flex items-center gap-2 text-sm font-medium text-indigo-700 transition-colors hover:text-indigo-900"
                            >
                                <ArrowLeft size={16} />
                                Voltar para documentos
                            </Link>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {documento.categoriaVetor && (
                                    <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                        {documento.categoriaVetor}
                                    </span>
                                )}
                                {documento.tags?.map((tag) => (
                                    <span key={tag.id} className="badge badge-sm badge-outline">
                                        {tag.tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                                {documento.titulo}
                            </h1>

                            {documento.createdAt && (
                                <p className="mt-3 text-sm text-slate-500">
                                    Publicado em {formatarData(documento.createdAt)}
                                </p>
                            )}

                            {documento.resumo && (
                                <p className="mt-6 whitespace-pre-line text-lg leading-8 text-slate-600">
                                    {documento.resumo}
                                </p>
                            )}

                            <div className="my-10 border-t border-slate-200" />

                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                <h2 className="mb-4 text-2xl font-bold text-slate-900">Arquivo</h2>

                                {documento.arquivo?.caminho ? (
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="rounded-xl bg-indigo-100 p-3 text-indigo-700">
                                            <FileText size={26} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-800">
                                                {documento.arquivo.nome}
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                {documento.arquivo.tipoArquivo}
                                                {documento.arquivo.tamanho
                                                    ? ` · ${formatarTamanho(documento.arquivo.tamanho)}`
                                                    : ""}
                                            </p>
                                        </div>
                                        <a
                                            href={documento.arquivo.caminho}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn gap-2 rounded-full bg-indigo-700 px-8 text-white hover:bg-indigo-800"
                                        >
                                            <Download size={16} />
                                            Baixar
                                        </a>
                                    </div>
                                ) : (
                                    <p className="text-slate-600">
                                        Nenhum arquivo disponível para download neste documento.
                                    </p>
                                )}
                            </div>
                        </div>
                    </article>
                )}
            </main>

            <Footer />
        </div>
    );
}
