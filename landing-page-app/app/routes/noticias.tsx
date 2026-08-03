import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getNoticiasAtivas } from '~/lib/api/noticiaController';
import type { Noticia } from '~/lib/api/noticia';
import { slugify } from '~/lib/utils';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';
import { ArrowRight, Tag } from 'lucide-react';

export function meta() {
  return [
    { title: 'Notícias - SisVetor' },
    { name: 'description', content: 'Acompanhe as últimas notícias sobre vigilância epidemiológica' },
  ];
}

function extrairImagem(noticia: Noticia): string | null {
  for (const conteudo of noticia.conteudos) {
    for (const arq of conteudo.arquivos) {
      if (arq.arquivo?.url && arq.arquivo.tipoArquivo?.includes('IMAGEM')) {
        return arq.arquivo.url;
      }
    }
  }
  // Fallback: pega qualquer url disponível
  for (const conteudo of noticia.conteudos) {
    for (const arq of conteudo.arquivos) {
      if (arq.arquivo?.url) {
        return arq.arquivo.url;
      }
    }
  }
  return null;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [paginacao, setPaginacao] = useState({
    page: 0,
    size: 12,
    total: 0,
    totalPages: 0,
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
        total: response.totalElements,
        totalPages: response.totalPages,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarNoticias(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-sky-50">
        {/* Header da página */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <span className="badge badge-info badge-outline mb-4">Notícias</span>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
              Portal de Notícias
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-slate-600">
              Fique por dentro das novidades, atualizações e conteúdos sobre
              vigilância epidemiológica.
            </p>
          </div>
        </section>

        {/* Lista de notícias */}
        <section className="mx-auto max-w-7xl px-6 py-10">
          {carregando ? (
            <div className="flex items-center justify-center py-24">
              <span className="loading loading-spinner loading-lg text-sky-700" />
            </div>
          ) : noticias.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {noticias.map((noticia) => {
                const imagemUrl = extrairImagem(noticia);
                return (
                  <Link
                    key={noticia.id}
                    to={`/noticias/${slugify(noticia.titulo)}`}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    {/* Imagem */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      {imagemUrl ? (
                        <img
                          src={imagemUrl}
                          alt={noticia.titulo}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-100">
                          <span className="text-5xl font-bold text-sky-300">
                            SV
                          </span>
                        </div>
                      )}
                      {noticia.tags.length > 0 && (
                        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                          {noticia.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag.id}
                              className="badge border-0 bg-white/90 text-xs font-medium text-sky-700 shadow-sm backdrop-blur-sm"
                            >
                              {tag.tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-1 flex-col px-6 py-5">
                      <h2 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-700">
                        {noticia.titulo}
                      </h2>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-slate-500">
                        {noticia.descricao}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-600 transition-colors group-hover:text-sky-700">
                          Ler notícia
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="rounded-full bg-sky-100 p-6">
                <Tag size={40} className="text-sky-400" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-700">
                Nenhuma notícia encontrada
              </h3>
              <p className="mt-2 text-slate-500">
        As notícias ativas aparecerão aqui.
              </p>
            </div>
          )}

          {/* Paginação */}
          {paginacao.totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                className="btn btn-outline btn-sm rounded-full"
                disabled={paginacao.page === 0}
                onClick={() => carregarNoticias(paginacao.page - 1)}
              >
                Anterior
              </button>
              {Array.from({ length: paginacao.totalPages }, (_, i) => i).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    className={`btn btn-sm rounded-full ${
                      pageNum === paginacao.page
                        ? 'btn-primary'
                        : 'btn-ghost'
                    }`}
                    onClick={() => carregarNoticias(pageNum)}
                  >
                    {pageNum + 1}
                  </button>
                ),
              )}
              <button
                className="btn btn-outline btn-sm rounded-full"
                disabled={paginacao.page >= paginacao.totalPages - 1}
                onClick={() => carregarNoticias(paginacao.page + 1)}
              >
                Próximo
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
