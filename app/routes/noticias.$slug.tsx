import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, CalendarDays, FileText, Newspaper } from 'lucide-react';
import { getNoticiasAtivas } from '../lib/api/noticiaController';
import type { Noticia } from '../lib/api/noticia';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function meta() {
  return [
    { title: "Notícia - Sisvetor" },
    { name: "description", content: "Leia a notícia completa" },
  ];
}

function formatarData(data?: string): string {
    if (!data) return "";
    return new Date(data).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

export default function NoticiaDetalhes() {
    const { slug } = useParams();
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregarNoticia() {
            try {
                // Não existe endpoint público de busca por caminhoURL — busca uma página e filtra
                // no cliente (mesma limitação de escala documentada anteriormente).
                const response = await getNoticiasAtivas(0, 100);
                const noticiaEncontrada = response.content.find(n => n.caminhoURL === slug) || null;
                setNoticia(noticiaEncontrada);
                if (!noticiaEncontrada) {
                    setErro(true);
                }
            } catch (error) {
                console.error(error);
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        if (slug) {
            carregarNoticia();
        }
    }, [slug]);

    return (
        <>
            <Header />

            {carregando ? (
                <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
                    <span className="loading loading-spinner loading-lg text-sky-700"></span>
                </div>
            ) : erro || !noticia ? (
                <div className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-6">
                    <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                        <Newspaper className="mx-auto text-slate-400" size={40} />
                        <h1 className="mt-4 text-xl font-bold text-slate-900">Notícia não encontrada</h1>
                        <p className="mt-2 text-slate-600">
                            Ela pode ter sido removida ou o endereço está incorreto.
                        </p>
                        <Link
                            to="/noticias"
                            className="btn btn-primary mt-6 rounded-full px-8"
                        >
                            Voltar para notícias
                        </Link>
                    </div>
                </div>
            ) : (
                <>
                    {noticia.imagemDestaque && (
                        <div className="h-72 w-full overflow-hidden bg-slate-100 md:h-96">
                            <img
                                src={noticia.imagemDestaque.caminho}
                                alt={noticia.imagemDestaque.nome}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}

                    <article className="bg-slate-50 py-10">
                        <div className="mx-auto max-w-4xl px-6">
                            <Link
                                to="/noticias"
                                className="inline-flex items-center gap-2 text-sm font-medium text-sky-700 transition-colors hover:text-sky-900"
                            >
                                <ArrowLeft size={16} />
                                Voltar para notícias
                            </Link>

                            <div className="mt-6 flex flex-wrap gap-2">
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

                            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                                {noticia.titulo}
                            </h1>

                            <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                                <CalendarDays size={16} />
                                {formatarData(noticia.createdAt)}
                            </div>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                {noticia.resumo}
                            </p>

                            <div className="my-10 border-t border-slate-200" />

                            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                {noticia.conteudo.map((bloco, indice) => (
                                    <div
                                        key={bloco.id}
                                        className={indice > 0 ? "mt-10 border-t border-slate-100 pt-10" : ""}
                                    >
                                        {bloco.titulo && (
                                            <h2 className="mb-4 text-2xl font-bold text-slate-900">
                                                {bloco.titulo}
                                            </h2>
                                        )}

                                        <div
                                            className="conteudo-noticia"
                                            dangerouslySetInnerHTML={{ __html: bloco.texto }}
                                        />

                                        {bloco.arquivos.length > 0 && (
                                            <div className="mt-6 flex flex-wrap gap-3">
                                                {bloco.arquivos.map((arquivo) => {
                                                    if (arquivo.tipoArquivo === 'IMAGEM') {
                                                        return (
                                                            <img
                                                                key={arquivo.id}
                                                                src={arquivo.caminho}
                                                                alt={arquivo.nome}
                                                                className="max-w-xs rounded-2xl shadow-sm"
                                                            />
                                                        );
                                                    }
                                                    if (arquivo.tipoArquivo === 'VIDEO') {
                                                        return (
                                                            <video
                                                                key={arquivo.id}
                                                                src={arquivo.caminho}
                                                                controls
                                                                className="max-w-md rounded-2xl shadow-sm"
                                                            />
                                                        );
                                                    }
                                                    return (
                                                        <a
                                                            key={arquivo.id}
                                                            href={arquivo.caminho}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="btn btn-outline gap-2 rounded-full"
                                                        >
                                                            <FileText size={16} />
                                                            {arquivo.nome}
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </>
            )}

            <Footer />
        </>
    );
}
