import {
  Map,
  CalendarDays,
  ClipboardCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export function SobreSisvetor() {
  return (
    <section
      id="sobre-sisvetor"
      className="bg-gradient-to-b from-white to-sky-50 py-10"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Conteúdo */}
        <div className="flex flex-col justify-center">

          <span className="badge badge-info badge-outline w-fit">
            Sobre o SisVetor
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
            Tecnologia para fortalecer a vigilância epidemiológica.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            O SisVetor é uma plataforma desenvolvida para apoiar as ações de
            vigilância e controle de vetores por meio da integração
            entre tecnologia, dados e processos.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Sua arquitetura modular permite incorporar diferentes programas de
            vigilância. Atualmente a plataforma oferece suporte às ações de
            vigilância da Dengue e da Doença de Chagas, estando preparada para
            evoluir e atender novos vetores e agravos de interesse em saúde
            pública.
          </p>

          <div className="mt-10 flex gap-4">


            <a
              href="https://wiki.sisvetor.sds.unb.br/"
              className="btn btn-primary rounded-full "
            >
             Explorar Funcionalidades
              <ArrowRight size={18} />
            </a>

            <a
              href="https://admin.sisvetor.sds.unb.br/"
              className="btn btn-outline rounded-full border-cyan-300 bg-cyan-50 text-cyan-800 shadow-lg"
            >
             Acessar Sisvetor
              <ArrowRight size={18} />
            </a>

          </div>

        </div>

        {/* Funcionalidades */}
        <div className="grid gap-6 sm:grid-cols-2">

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Map size={28} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              Gestão de Territórios
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Gerenciamento de territórios e imóveis com suporte ao
              georreferenciamento para planejamento e acompanhamento das ações.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
              <CalendarDays size={28} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              Planejamento
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Organização das atividades de campo e gerenciamento da aplicação
              de recursos pelas equipes de vigilância.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
              <ClipboardCheck size={28} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              Atividades de Campo
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Registro das inspeções, visitas e demais atividades realizadas
              durante as ações de vigilância.
            </p>

          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-700">
              <BarChart3 size={28} />
            </div>

            <h3 className="text-xl font-semibold text-slate-900">
              Dashboards
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Indicadores, relatórios e painéis estratégicos para apoiar a
              análise dos dados e a tomada de decisão.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}