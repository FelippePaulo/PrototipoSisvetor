import { useState } from "react";
import { CategoryCard } from "../utils/CategoryCard";

export function CategorySelector() {
    const [categoria, setCategoria] = useState("GERAL");

    return (
        <section className="bg-slate-50 py-20">

            <div id="select-categoria" className="mx-auto max-w-7xl px-6">

                <div className="mb-12 text-center">

                    <span className="badge badge-info badge-outline">
                        Programas de Vigilância
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Explore os conteúdos por programa
                    </h2>

                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
                        Selecione um programa para visualizar notícias,
                        capacitações e eventos relacionados.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    <CategoryCard
                        titulo="Todos"
                        ativa={categoria === "TODOS"}
                        onClick={() => setCategoria("TODOS")}
                    />

                    <CategoryCard
                        titulo="Chagas"
                        ativa={categoria === "CHAGAS"}
                        onClick={() => setCategoria("CHAGAS")}
                    />


                    <CategoryCard
                        titulo="Dengue"
                        ativa={categoria === "DENGUE"}
                        onClick={() => setCategoria("DENGUE")}
                    />

                    
                </div>

            </div>

        </section>
    );
}