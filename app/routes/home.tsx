import { useState } from "react";
import type { Route } from "./+types/home";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroBanner } from "../components/home/HeroBanner";
import { SobreSisvetor } from "~/components/home/SobreSisvetor";
import { ProgramaVigilanciaSeletor } from "~/components/home/HomeSeletorVetor";
import { NoticiasDestaque } from "~/components/home/NoticiasCarrossel";
import { Atualizacoes } from "~/components/home/Atualizacoes";
import { CategoriaVetor } from "~/lib/api/enum";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SisVetor - Portal de Notícias" },
    { name: "description", content: "Portal de notícias da Sisvetor" },
  ];
}

export default function Home() {
  // Programa de vigilância selecionado no seletor — filtra notícias, eventos e documentos.
  const [categoria, setCategoria] = useState<CategoriaVetor>(CategoriaVetor.TODOS);

  return (
    <>
      <Header />
      <HeroBanner/>
      <SobreSisvetor/>
      <ProgramaVigilanciaSeletor
        categoria={categoria}
        onCategoriaChange={setCategoria}
      />
      <NoticiasDestaque categoria={categoria}/>
      <Atualizacoes categoria={categoria}/>
      <Footer />
    </>
  );
}
