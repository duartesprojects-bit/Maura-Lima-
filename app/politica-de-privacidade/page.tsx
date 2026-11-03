import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Cookie, Lock, UserCheck, MessageCircle, ArrowLeft } from 'lucide-react';
import { SALON_INFO } from '@/lib/salon-data';

export const metadata: Metadata = {
  title: 'Política de Privacidade e Cookies | Maura Lima Fortaleza',
  description:
    'Conheça nossa Política de Privacidade e Uso de Cookies em conformidade com a Lei Geral de Proteção de Dados (LGPD). Transparência, cuidado e segurança para você.',
  openGraph: {
    title: 'Política de Privacidade e Cookies | Maura Lima Fortaleza',
    description:
      'Política de Privacidade e Uso de Cookies em conformidade com a LGPD na Maura Lima – Especialista em Sobrancelhas.',
    url: 'https://mauralima.com.br/politica-de-privacidade',
    type: 'website',
  },
  alternates: {
    canonical: '/politica-de-privacidade',
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="bg-white text-[#262626] min-h-screen">
      {/* Header */}
      <header className="bg-[#0D0D0D] text-white py-14 sm:py-20 border-b border-[#C9A24B]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A24B] hover:text-white mb-6 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o Início</span>
          </Link>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
            TRANSPARÊNCIA &amp; LGPD
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-[0.04em] leading-tight mb-4">
            Política de Privacidade e Cookies
          </h1>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
            Na <strong className="font-medium text-white">Maura Lima – Especialista em Sobrancelhas</strong>, o cuidado com você também se estende à proteção dos seus dados pessoais e à sua privacidade.
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C9A24B] shrink-0" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0D0D0D]">
              1. Compromisso com a Sua Privacidade
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            Esta Política de Privacidade descreve de forma clara e acessível como coletamos, utilizamos e protegemos as informações das clientes e visitantes do site <strong className="font-medium text-[#0D0D0D]">mauralima.com.br</strong>, em total conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <UserCheck className="w-6 h-6 text-[#C9A24B] shrink-0" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0D0D0D]">
              2. Quais Informações Coletamos
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            Nosso site tem caráter institucional e informativo. Não exigimos cadastro para navegação. Os dados que podem ser tratados incluem:
          </p>
          <ul className="space-y-2.5 text-sm sm:text-base text-neutral-700 font-light list-disc pl-6">
            <li>
              <strong className="font-medium text-[#0D0D0D]">Atendimento via WhatsApp:</strong> Ao clicar nos botões de agendamento ou contato, você é direcionada ao WhatsApp oficial de nossas unidades (Aldeota ou Maison Sul), onde compartilhamos apenas as informações necessárias para agendar seu horário ou curso (como seu nome e telefone).
            </li>
            <li>
              <strong className="font-medium text-[#0D0D0D]">Dados de Navegação:</strong> Informações técnicas anônimas (como tipo de dispositivo, navegador e páginas visitadas) para garantir que o site carregue com rapidez e segurança no seu celular ou computador.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Cookie className="w-6 h-6 text-[#C9A24B] shrink-0" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0D0D0D]">
              3. Uso de Cookies
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            Cookies são pequenos arquivos salvos no seu navegador que ajudam a lembrar suas preferências. Utilizamos:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 bg-[#F9F5EC] border border-[#C9A24B]/30 rounded-2xl">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D] mb-2">
                Cookies Essenciais
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                Necessários para o funcionamento básico do site, segurança da navegação e registro da sua escolha no aviso de privacidade.
              </p>
            </div>
            <div className="p-5 bg-[#FAFAFA] border border-neutral-200 rounded-2xl">
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D] mb-2">
                Cookies de Desempenho
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                Ajudam a entender como nossas visitantes interagem com as páginas de serviços e cursos para melhorarmos continuamente nossa comunicação.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-[#C9A24B] shrink-0" />
            <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#0D0D0D]">
              4. Seus Direitos (LGPD) e Contato
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
            Você tem o direito de solicitar informações, atualização ou exclusão de seus dados de contato a qualquer momento. Não vendemos nem compartilhamos seus dados pessoais com terceiros para fins publicitários.
          </p>
          <div className="bg-[#0D0D0D] text-white p-6 sm:p-8 rounded-2xl border border-[#C9A24B]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24B] block mb-1">
                ATENDIMENTO &amp; DÚVIDAS
              </span>
              <h3 className="font-heading text-lg font-bold uppercase tracking-wide mb-1">
                Fale Conosco
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                {SALON_INFO.address} • Tel: {SALON_INFO.phoneDisplay}
              </p>
            </div>
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
