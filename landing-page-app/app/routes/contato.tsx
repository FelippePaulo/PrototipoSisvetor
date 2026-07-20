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
          <div className="bg-base-100 shadow-xl rounded-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Entre em contato conosco</h2>
              <p>Para mais informações, entre em contato através dos nossos canais oficiais.</p>
              <div className="flex justify-end mt-4">
                <button className="btn-primary-like px-6 py-2 rounded-lg">Saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
