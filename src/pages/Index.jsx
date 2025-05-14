import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section text-white py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
            Acompanhamento inteligente de processos jurídicos
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">
            Receba notificações por e-mail sempre que houver movimentações nos
            seus processos. Economize tempo e nunca perca um prazo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-600"
              >
                Começar agora
              </Button>
            </Link>
            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="bg-white hover:bg-blue text-[#1f2937]"
                href="#about"
              >
                Como funciona
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Simplifique seu trabalho jurídico
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nossa plataforma foi desenvolvida para advogados que precisam
              acompanhar processos de forma eficiente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Notificações em tempo real",
                text: "Receba e-mails instantâneos quando seus processos tiverem qualquer movimentação.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                ),
              },
              {
                title: "Fácil cadastro",
                text: "Adicione os números dos processos, tribunal e instância em poucos cliques.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Preço acessível",
                text: "Apenas R$ 50,00 para acompanhar até 5 processos diferentes.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Como funciona
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Três passos simples para começar a acompanhar seus processos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {["Registre-se", "Adicione processos", "Receba notificações"].map(
              (step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step}
                  </h3>
                  <p className="text-gray-700">
                    {
                      [
                        "Crie sua conta de forma rápida e simples",
                        "Cadastre os números dos processos, tribunal e instância",
                        "Fique por dentro de cada movimentação via e-mail",
                      ][index]
                    }
                  </p>
                </div>
              )
            )}
          </div>

          <div className="text-center mt-12">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-slate-900 text-white hover:bg-slate-800"
              >
                Começar agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Plano simples e transparente
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Sem surpresas ou taxas ocultas
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="border border-slate-900 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <div className="bg-slate-900 text-white p-6 text-center">
                <h3 className="text-2xl font-bold">
                  Acompanhamento de Processos
                </h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-bold">R$ 50</span>
                  <span className="ml-1 text-xl font-medium">/mês</span>
                </div>
              </div>

              <div className="bg-white p-6">
                {[
                  "Acompanhe até 5 processos",
                  "Notificações por e-mail",
                  "Painel de controle",
                  "Suporte por e-mail",
                ].map((item, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
                <Link to="/register">
                  <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                    Assinar agora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">JP</span>
                </div>
                <span className="font-semibold text-white text-xl">
                  JurisPro
                </span>
              </div>
              <p className="text-sm text-white/80">
                Monitoramento inteligente de processos jurídicos para advogados.
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} JurisPro. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
