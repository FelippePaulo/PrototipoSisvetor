import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ArrowRight, Newspaper } from 'lucide-react';
import { getNoticiasAtivas } from '../lib/api/noticiaController';
import type { Noticia } from '../lib/api/noticia';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function meta() {
  return [
    { title: "Notícias - Sisvetor" },
    { name: "description", content: "Portal de notícias da Sisvetor" },
  ];
}

function formatarData(data?: string): string {
    if (!data) return "";
    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function Noticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [paginacao, setPaginacao] = useState({
        page: 0,
        size: 12,
        total: 0
    });
    const [carregando, setCarregando] = useState(false);

    async function carregarNoticias(page = 0) {
        setCarregando(true);
        try {
            const response = await getNoticiasAtivas(page, paginacao.size);
            setNoticias(response.content);
            setPaginacao({
                page: response.number,
                size: response.size,
                total: response.totalElements
            });
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (error) {
            console.error(error);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarNoticias(0);
    }, []);

    const totalPaginas = Math.ceil(paginacao.total / paginacao.size);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex flex-1 flex-col">
                <section className="bg-gradient-to-b from-white to-sky-50 py-10">
                    <div className="mx-auto max-w-7xl px-6">
                        <span className="badge badge-info badge-outline w-fit">
                            Portal de Notícias
                        </span>
                        <h1 className="mt-5 text-4xl font-bold text-slate-900">
                            Notícias do SisVetor
                        </h1>
                        <p className="mt-3 max-w-2xl text-lg text-slate-600">
                            Acompanhe as publicações mais recentes sobre as ações de vigilância
                            epidemiológica realizadas em todo o território nacional.
                        </p>
                    </div>
                </section>

                <section className="flex flex-1 flex-col justify-center bg-slate-50 py-10">
                    <div className="mx-auto w-full max-w-7xl px-6">
                        {carregando ? (
                            <div className="flex h-64 items-center justify-center">
                                <span className="loading loading-spinner loading-lg text-sky-700"></span>
                            </div>
                        ) : noticias.length === 0 ? (
                            <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                                <Newspaper className="mx-auto text-slate-400" size={40} />
                                <p className="mt-4 text-lg text-slate-600">Nenhuma notícia encontrada.</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                    {noticias.map((noticia) => (
                                        <Link
                                            key={noticia.id}
                                            to={`/noticias/${noticia.caminhoURL}`}
                                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                        >
                                            <div className="h-48 overflow-hidden bg-slate-100">
                                                {noticia.imagemDestaque ? (
                                                    <img
                                                        src={noticia.imagemDestaque.caminho}
                                                        alt={noticia.imagemDestaque.nome}
                                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center text-slate-300">
                                                        <Newspaper size={40} />
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex flex-col p-6">
                                                <span className="text-xs text-slate-500">
                                                    {formatarData(noticia.createdAt)}
                                                </span>

                                                <h2 className="mt-2 line-clamp-2 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-sky-700">
                                                    {noticia.titulo}
                                                </h2>

                                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                                                    {noticia.resumo}
                                                </p>

                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {noticia.categoriaVetor && (
                                                        <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                                            {noticia.categoriaVetor}
                                                        </span>
                                                    )}
                                                    {noticia.tags?.map((tag) => (
                                                        <span key={tag.id} className="badge badge-sm badge-outline">
                                                            {tag.tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition-colors group-hover:text-sky-900">
                                                    Ver detalhes
                                                    <ArrowRight size={16} />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                {totalPaginas > 1 && (
                                    <div className="mt-10 flex items-center justify-center gap-4">
                                        <button
                                            type="button"
                                            className="btn btn-circle btn-outline"
                                            disabled={paginacao.page === 0}
                                            onClick={() => carregarNoticias(paginacao.page - 1)}
                                        >
                                            <ArrowLeft size={18} />
                                        </button>

                                        <span className="text-sm font-medium text-slate-600">
                                            Página {paginacao.page + 1} de {totalPaginas}
                                        </span>

                                        <button
                                            type="button"
                                            className="btn btn-circle btn-outline"
                                            disabled={paginacao.page + 1 >= totalPaginas}
                                            onClick={() => carregarNoticias(paginacao.page + 1)}
                                        >
                                            <ArrowRight size={18} />
                                        </button>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
