import type { Route } from "./+types/home";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroBanner } from "../components/home/HeroBanner";
import { SobreSisvetor } from "~/components/home/SobreSisvetor";
import { ProgramaVigilanciaSeletor } from "~/components/home/HomeSeletorVetor";
import { NoticiasDestaque } from "~/components/home/NoticiasCarrossel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SisVetor - Portal de Notícias" },
    { name: "description", content: "Portal de notícias da Sisvetor" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner/>
      <SobreSisvetor/>
      <ProgramaVigilanciaSeletor/>
      <NoticiasDestaque/>
      <Footer />
    </>
  );
}
