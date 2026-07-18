import fundo_mapa_escuro from "~/assets/fundo_mapa_escuro.png";
import { ArrowRight } from "lucide-react";

export function HeroBanner() {
  return (

<section className="relative overflow-hidden">

    <img
        src={fundo_mapa_escuro}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
    />

    <div className="relative z-10 mx-auto flex min-h-[650px] max-w-5xl flex-col items-center justify-center px-6 text-center">

        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-900">
        Bem-vindo ao portal de notícias do SisVetor
        </h1>

        
        <h2 className="mt-4 text-2xl leading-tight text-slate-700 w-200">
        Aqui você encontra informação e conteúdo atualizado sobre ações de vigilância epidemiológica
        realizadas em todo território nacional.
        </h2>

        <div className="mt-10 flex items-center justify-center gap-4">

             <a
                href="#select-categoria"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-full px-8 transition-colors duration-300 hover:bg-cyan-500"
            >
                Explorar notícias
                <ArrowRight size={18} />
            </a>

            <a
                 href="#sobre-sisvetor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full px-8 transition-colors duration-300 hover:bg-cyan-50"
            >
                Conhecer o SisVetor
                <ArrowRight size={18} />
            </a>

        </div>

    </div>
</section>



  );
}