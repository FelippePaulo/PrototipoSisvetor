import { CategoriaVetor } from "~/lib/api/enum";
import { CategoryCard } from "../utils/CategoryCard";

interface ProgramaVigilanciaSeletorProps {
    categoria: CategoriaVetor;
    onCategoriaChange: (categoria: CategoriaVetor) => void;
}

export function ProgramaVigilanciaSeletor({
    categoria,
    onCategoriaChange,
}: ProgramaVigilanciaSeletorProps) {

    return (
        <section id="select-programa-vigilancia" className="bg-slate-50 py-5">

            <div  className="mx-auto max-w-7xl px-6">

                <div className="mb-8 text-center">

                    <h2 className="text-3xl font-bold text-slate-900">
                        Programas de Vigilância
                    </h2>

                    <p className="mx-auto mt-2 max-w-2xl text-base text-slate-600">
                        Selecione um programa para filtrar notícias,
                        eventos e documentos relacionados.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <CategoryCard
                        titulo="Todos"
                        ativa={categoria === CategoriaVetor.TODOS}
                        onClick={() => onCategoriaChange(CategoriaVetor.TODOS)}
                    />

                    <CategoryCard
                        titulo="Chagas"
                        ativa={categoria === CategoriaVetor.CHAGAS}
                        onClick={() => onCategoriaChange(CategoriaVetor.CHAGAS)}
                    />


                    <CategoryCard
                        titulo="Dengue"
                        ativa={categoria === CategoriaVetor.DENGUE}
                        onClick={() => onCategoriaChange(CategoriaVetor.DENGUE)}
                    />


                </div>

            </div>

        </section>
    );
}
