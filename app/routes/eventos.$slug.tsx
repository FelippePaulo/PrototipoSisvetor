import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, CalendarDays, Clock, ExternalLink, MapPin, Users } from 'lucide-react';
import { getEventosAtivos } from '../lib/api/eventoController';
import type { Evento } from '../lib/api/evento';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { formatarData, formatarHora } from './eventos';

export function meta() {
  return [
    { title: "Evento - Sisvetor" },
    { name: "description", content: "Detalhes do evento" },
  ];
}

export default function EventoDetalhes() {
    const { slug } = useParams();
    const [evento, setEvento] = useState<Evento | null>(null);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function carregar() {
            try {
                // Não existe endpoint público de busca por caminhoURL — busca uma página e filtra
                // no cliente (mesma limitação das rotas de notícias).
                const response = await getEventosAtivos(0, 100);
                const encontrado = response.content.find((e) => e.caminhoURL === slug) || null;
                setEvento(encontrado);
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
                        <span className="loading loading-spinner loading-lg text-emerald-700"></span>
                    </div>
                ) : erro || !evento ? (
                    <div className="flex flex-1 items-center justify-center bg-slate-50 px-6 py-16">
                        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                            <CalendarDays className="mx-auto text-slate-400" size={40} />
                            <h1 className="mt-4 text-xl font-bold text-slate-900">Evento não encontrado</h1>
                            <p className="mt-2 text-slate-600">
                                Ele pode ter sido removido ou o endereço está incorreto.
                            </p>
                            <Link to="/eventos" className="btn btn-primary mt-6 rounded-full px-8">
                                Voltar para eventos
                            </Link>
                        </div>
                    </div>
                ) : (
                    <>
                        {evento.imagemDestaque && (
                            <div className="h-72 w-full overflow-hidden bg-slate-100 md:h-96">
                                <img
                                    src={evento.imagemDestaque.caminho}
                                    alt={evento.imagemDestaque.nome ?? evento.nome}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        )}

                        <article className="flex-1 bg-slate-50 py-10">
                            <div className="mx-auto max-w-4xl px-6">
                                <Link
                                    to="/eventos"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-emerald-700 transition-colors hover:text-emerald-900"
                                >
                                    <ArrowLeft size={16} />
                                    Voltar para eventos
                                </Link>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {evento.categoriaVetor && (
                                        <span className="badge badge-sm border-cyan-300 bg-cyan-50 text-cyan-800">
                                            {evento.categoriaVetor}
                                        </span>
                                    )}
                                    {evento.tags?.map((tag) => (
                                        <span key={tag.id} className="badge badge-sm badge-outline">
                                            {tag.tag}
                                        </span>
                                    ))}
                                </div>

                                <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
                                    {evento.nome}
                                </h1>

                                <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
                                    <InfoLinha icone={<CalendarDays size={18} />} rotulo="Data">
                                        {formatarData(evento.dataInicio)}
                                        {evento.dataFim && evento.dataFim !== evento.dataInicio && (
                                            <> até {formatarData(evento.dataFim)}</>
                                        )}
                                    </InfoLinha>

                                    {(evento.horaInicio || evento.horaFim) && (
                                        <InfoLinha icone={<Clock size={18} />} rotulo="Horário">
                                            {formatarHora(evento.horaInicio)}
                                            {evento.horaFim && ` às ${formatarHora(evento.horaFim)}`}
                                        </InfoLinha>
                                    )}

                                    <InfoLinha icone={<MapPin size={18} />} rotulo="Modalidade">
                                        {evento.modalidade}
                                        {evento.local && ` · ${evento.local}`}
                                    </InfoLinha>

                                    {evento.publicoAlvo && (
                                        <InfoLinha icone={<Users size={18} />} rotulo="Público-alvo">
                                            {evento.publicoAlvo}
                                        </InfoLinha>
                                    )}
                                </div>

                                {(evento.linkInscricao || evento.linkEvento) && (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {evento.linkInscricao && (
                                            <a
                                                href={evento.linkInscricao}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-primary gap-2 rounded-full px-8"
                                            >
                                                Inscreva-se
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                        {evento.linkEvento && (
                                            <a
                                                href={evento.linkEvento}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-outline gap-2 rounded-full px-8"
                                            >
                                                Acessar o evento
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                )}

                                {evento.descricao && (
                                    <>
                                        <div className="my-10 border-t border-slate-200" />
                                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                                            <h2 className="mb-4 text-2xl font-bold text-slate-900">Sobre o evento</h2>
                                            <p className="whitespace-pre-line text-lg leading-8 text-slate-600">
                                                {evento.descricao}
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </article>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}

function InfoLinha({
    icone,
    rotulo,
    children,
}: {
    icone: React.ReactNode;
    rotulo: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-0.5 text-emerald-700">{icone}</span>
            <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{rotulo}</p>
                <p className="text-slate-800">{children}</p>
            </div>
        </div>
    );
}
