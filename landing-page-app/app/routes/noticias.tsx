import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getNoticiasAtivas } from '../lib/api/noticiaController';
import type { Noticia } from '../lib/api/noticia';
import { slugify } from '../lib/utils';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function meta() {
  return [
    { title: "Notícias - Sisvetor" },
    { name: "description", content: "Portal de notícias da Sisvetor" },
  ];
}

export default function Noticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [paginacao, setPaginacao] = useState({
        page: 0,
        size: 10,
        total: 0
    });
    const [carregando, setCarregando] = useState(false);

    async function carregarNoticias(page = 0) {
        setCarregando(true);
        try {
            const response = await getNoticiasAtivas();
            setNoticias(response.content);
            setPaginacao({
                page: response.number,
                size: response.size,
                total: response.totalElements
            });
        } catch (error) {
            console.error(error);
        } finally {
            setCarregando(false);
        }
    }

    useEffect(() => {
        carregarNoticias(0);
    }, []);

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Portal de notícias</h1>

                {carregando ? (
                    <div className="flex justify-center items-center h-64">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <>
                        {/* Lista de Notícias */}
                        <div className="grid gap-6">
                            {noticias.length > 0 ? (
                                noticias.map((noticia) => (
                                    <Link
                                        key={noticia.id}
                                        to={`/noticias/${slugify(noticia.titulo)}`}
                                        className="card bg-base-100 shadow-xl block hover:shadow-2xl transition-shadow"
                                    >
                                        <div className="card-body">
                                            <h2 className="card-title">{noticia.titulo}</h2>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {noticia.tags && noticia.tags.length > 0 && (
                                                    noticia.tags.map((tag) => (
                                                        <span
                                                            key={tag.id}
                                                            className="badge badge-secondary rounded-sm"
                                                        >
                                                            {tag.tag}
                                                        </span>
                                                    ))
                                                )}
                                            </div>
                                            <p>{noticia.descricao}</p>
                                            <div className="card-actions justify-end">
                                                <span className="btn btn-sm btn-outline">Ver detalhes</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="alert alert-info">
                                    <span>Nenhuma notícia encontrada</span>
                                </div>
                            )}
                        </div>

                        {/* Paginação */}
                        {paginacao.total > 0 && (
                            <div className="join mt-8">
                                {Array.from({ length: Math.ceil(paginacao.total / paginacao.size) }, (_, i) => i).map((pageNum) => (
                                    <button
                                        key={pageNum}
                                        className={`join-item btn ${pageNum === paginacao.page ? 'btn-active' : ''}`}
                                        onClick={() => carregarNoticias(pageNum)}
                                    >
                                        {pageNum + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}
