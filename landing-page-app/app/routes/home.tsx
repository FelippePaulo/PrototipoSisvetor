import type { Route } from "./+types/home";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroBanner } from "../components/home/HeroBanner";
import { SobreSisvetor } from "~/components/home/SobreSisvetor";
import { CategorySelector } from "~/components/home/HomeCategorySelector";

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
      <CategorySelector/>
      <Footer />
    </>
  );
}
