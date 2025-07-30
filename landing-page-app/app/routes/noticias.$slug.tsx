import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getNoticiasAtivas } from '../lib/api/noticiaController';
import type { Noticia } from '../lib/api/noticia';
import { slugify } from '../lib/utils';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function meta() {
  return [
    { title: "Notícia - Sisvetor" },
    { name: "description", content: "Leia a notícia completa" },
  ];
}

export default function NoticiaDetalhes() {
    const { slug } = useParams();
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregarNoticia() {
            try {
                const response = await getNoticiasAtivas();
                const noticiaEncontrada = response.content.find(n => slugify(n.titulo) === slug) || null;
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
                <div className="min-h-screen flex justify-center items-center h-64">
                    <span className="loading loading-spinner loading-lg"></span>
                </div>
            ) : erro || !noticia ? (
                <div className="min-h-screen flex justify-center items-center">
                    <div className="alert alert-error max-w-md">
                        <span>Notícia não encontrada</span>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
                    <p className="mb-6 text-lg">{noticia.descricao}</p>
                    
                    {noticia.conteudos.map((conteudo) => (
                        <div key={conteudo.id} className="mb-8">
                            <div 
                                className="prose max-w-none"
                                dangerouslySetInnerHTML={{ __html: conteudo.conteudo }}
                            />
                            {conteudo.arquivos.length > 0 && (
                                <div className="mt-4 flex gap-2 flex-wrap">
                                    {conteudo.arquivos.map((arq) => {
                                        if (arq.arquivo.tipo === 'IMAGEM') {
                                            return (
                                                <img
                                                    key={arq.id}
                                                    src={arq.arquivo.caminho}
                                                    alt={arq.arquivo.nome}
                                                    className="max-w-xs rounded shadow"
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <Footer />
        </>
    );
}
