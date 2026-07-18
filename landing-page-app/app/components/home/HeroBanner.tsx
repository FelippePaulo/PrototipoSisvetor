import fundo_mapa_escuro from "~/assets/fundo_mapa_escuro.png";
import { ArrowRight } from "lucide-react";

export function HeroBanner() {
  return (

<section className="relative overflow-hidden">

    <img
        src={fundo_mapa_escuro}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full "
    />

    <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
    
        <h1 className="mt-4 text-5xl font-extrabold leading-tight text-slate-900">
        Bem-vindo ao portal de notícias do SisVetor
        </h1>

        <h2 className="mt-4 text-2xl leading-tight text-slate-700">
        Aqui você encontra conteúdo sobre ações de vigilância epidemiológica
        </h2>

        <div className="mt-10 flex items-center justify-center gap-4">

            <button className="btn btn-primary rounded-full px-8 transition-colors duration-300 hover:bg-cyan-700">
                Explorar notícias
                <ArrowRight size={18} />
            </button>

            <a
                href="https://admin.sisvetor.sds.unb.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full px-8 transition-colors duration-300 hover:bg-cyan-500"
            >
                Conhecer o SisVetor
                <ArrowRight size={18} />
            </a>

        </div>

    </div>
</section>


  );
}