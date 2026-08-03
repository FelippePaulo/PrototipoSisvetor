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

        <h1 className="mt-2 text-5xl font-extrabold leading-tight text-slate-900">
        Bem-vindo ao portal do SisVetor
        </h1>

        
    <h2 className="mx-auto mt-4 max-w-3xl text-2xl text-slate-700">
        Aqui você encontra informações atualizadas sobre ações de vigilância epidemiológica
        realizadas em todo território nacional.
        </h2>

        <div className="mt-10 flex items-center justify-center gap-4">

             <a
                href="#select-programa-vigilancia"
                className="btn btn-primary rounded-full px-8"
            >
                Explorar notícias
                <ArrowRight size={18} />
            </a>

            <a
                href="#sobre-sisvetor"
                className="btn btn-outline rounded-full px-8 transition-colors duration-300 hover:bg-cyan-50 hover:border-cyan-300 "
            >
                Conhecer o SisVetor
                <ArrowRight size={18} />
            </a>

        </div>

    </div>
</section>



  );
}