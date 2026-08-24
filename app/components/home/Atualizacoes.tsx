import type { CategoriaVetor } from "~/lib/api/enum";
import { ListaDocumentos } from "./ListaDocumentos";
import { ListaEventos } from "./ListaEventos";
import { ListaNoticias } from "./ListaNoticias";

interface AtualizacoesProps {
    categoria: CategoriaVetor;
}

export function Atualizacoes({ categoria }: AtualizacoesProps) {
    return (
        <section className="bg-slate-50 pb-10">

            <div className="mx-auto max-w-7xl px-6">


                {/* Cabeçalho */}

                {/*
                    <div className="mb-10 text-center">


                        <h2 className="text-4xl font-bold text-slate-900">
                            Notícias e Eventos
                        </h2>

                        <p className="mx-auto mt-3 max-w-3xl text-lg text-slate-600">
                            Acompanhe as publicações mais recentes e os próximos eventos do Portal SisVetor.
                        </p>

                    </div>
                */}


                    {/* Painéis */}

                    <div className="grid gap-8 lg:grid-cols-3">

                        <ListaNoticias categoria={categoria} />

                        <ListaEventos categoria={categoria} />

                        <ListaDocumentos categoria={categoria} />

                    </div>

                </div>

        </section>
    );
}
