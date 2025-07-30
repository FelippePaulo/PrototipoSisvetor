import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sisvetor - Portal de Notícias" },
    { name: "description", content: "Portal de notícias da Sisvetor" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Portal Sisvetor</h1>
        <p className="text-lg text-center max-w-2xl">
          Fique por dentro das últimas notícias e novidades da Sisvetor.
        </p>
      </div>
      <Footer />
    </>
  );
}
