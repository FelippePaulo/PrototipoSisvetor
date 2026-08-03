import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { getAllNoticiasAtivas } from '~/lib/api/noticiaController';
import type { Noticia } from '~/lib/api/noticia';
import { slugify } from '~/lib/utils';
import { Header } from '~/components/layout/Header';
import { Footer } from '~/components/layout/Footer';
import { ArrowLeft, Tag } from 'lucide-react';

export function meta({ params }: { params: { slug: string } }) {
  return [
    { title: `Notícia - SisVetor` },
    { name: 'description', content: 'Leia a notícia completa no Portal SisVetor' },
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
  for (const conteudo of noticia.conteudos) {
    for (const arq of conteudo.arquivos) {
      if (arq.arquivo?.url) {
        return arq.arquivo.url;
      }
    }
  }
  return null;
}

export default function NoticiaDetalhes() {
  const { slug } = useParams();
  const [noticia, setNoticia] = useState<Noticia | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    async function carregarNoticia() {
      try {
        const response = await getAllNoticiasAtivas();
        const noticiaEncontrada =
          response.content.find((n) => slugify(n.titulo) === slug) || null;
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
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-sky-50">
        {carregando ? (
          <div className="flex items-center justify-center py-24">
            <span className="loading loading-spinner loading-lg text-sky-700" />
          </div>
        ) : erro || !noticia ? (
          <div className="flex flex-col items-center justify-center px-6 py-24">
            <div className="rounded-full bg-red-100 p-6">
              <Tag size={40} className="text-red-400" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-slate-700">
              Notícia não encontrada
            </h2>
            <p className="mt-2 text-slate-500">
              A notícia que você procura não está disponível ou foi removida.
            </p>
            <Link
              to="/noticias"
              className="btn btn-primary mt-8 rounded-full px-8"
            >
              <ArrowLeft size={18} />
              Voltar para notícias
            </Link>
          </div>
        ) : (
          <>
            {/* Breadcrumb / Voltar */}
            <div className="border-b border-slate-200 bg-white">
              <div className="mx-auto flex max-w-4xl items-center px-6 py-4">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-600 transition-colors hover:text-sky-700"
                >
                  <ArrowLeft size={16} />
                  Voltar para notícias
                </Link>
              </div>
            </div>

            <article className="mx-auto max-w-4xl px-6 py-10">
              {/* Imagem de destaque */}
              <div className="overflow-hidden rounded-3xl">
                {(() => {
                  const imgUrl = extrairImagem(noticia);
                  return imgUrl ? (
                    <img
                      src={imgUrl}
                      alt={noticia.titulo}
                      className="h-[400px] w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-[200px] w-full items-center justify-center bg-gradient-to-br from-sky-100 to-cyan-100">
                      <span className="text-6xl font-bold text-sky-300">SV</span>
                    </div>
                  );
                })()}
              </div>

              {/* Conteúdo principal */}
              <div className="mt-8">
                {/* Tags */}
                {noticia.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {noticia.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="badge border-0 bg-sky-100 text-sm font-medium text-sky-700"
                      >
                        {tag.tag}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl font-extrabold leading-tight text-slate-900">
                  {noticia.titulo}
                </h1>

                <p className="mt-4 text-xl leading-8 text-slate-600">
                  {noticia.descricao}
                </p>

                <hr className="my-8 border-slate-200" />

                {/* Seções de conteúdo */}
                <div className="space-y-10">
                  {noticia.conteudos
                    .sort((a, b) => a.ordem - b.ordem)
                    .map((conteudo) => (
                      <div key={conteudo.id}>
                        {conteudo.nome && conteudo.nome !== 'Corpo da notícia' && (
                          <h2 className="mb-4 text-2xl font-bold text-slate-800">
                            {conteudo.nome}
                          </h2>
                        )}

                        {conteudo.descricao && (
                          <p className="mb-4 text-lg leading-7 text-slate-600">
                            {conteudo.descricao}
                          </p>
                        )}

                        {conteudo.conteudo && (
                          <div
                            className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-sky-600 prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{
                              __html: conteudo.conteudo,
                            }}
                          />
                        )}

                        {/* Arquivos do conteúdo */}
                        {conteudo.arquivos.length > 0 && (
                          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {conteudo.arquivos.map((arq) => {
                              if (
                                arq.arquivo?.url &&
                                arq.arquivo.tipoArquivo?.includes('IMAGEM')
                              ) {
                                return (
                                  <img
                                    key={arq.id}
                                    src={arq.arquivo.url}
                                    alt={arq.arquivo.nome || 'Imagem da notícia'}
                                    className="rounded-2xl shadow-md transition-shadow hover:shadow-xl"
                                  />
                                );
                              }
                              if (
                                arq.arquivo?.url &&
                                arq.arquivo.tipoArquivo?.includes('VIDEO')
                              ) {
                                return (
                                  <video
                                    key={arq.id}
                                    src={arq.arquivo.url}
                                    controls
                                    className="rounded-2xl shadow-md"
                                  />
                                );
                              }
                              if (
                                arq.arquivo?.url &&
                                arq.arquivo.tipoArquivo?.includes('DOCUMENTO')
                              ) {
                                return (
                                  <a
                                    key={arq.id}
                                    href={arq.arquivo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                                  >
                                    <span className="text-sm font-medium text-sky-600">
                                      📄 {arq.arquivo.nome || 'Documento'}
                                    </span>
                                  </a>
                                );
                              }
                              return null;
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
      </main>
      <Footer />
    </div>
  );
}
