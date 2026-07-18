import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export function meta() {
  return [
    { title: "Contato - Sisvetor" },
    { name: "description", content: "Entre em contato conosco" },
  ];
}

export default function Contato() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Contato</h1>
        <div className="max-w-md w-full">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Entre em contato conosco</h2>
              <p>Para mais informações, entre em contato através dos nossos canais oficiais.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
