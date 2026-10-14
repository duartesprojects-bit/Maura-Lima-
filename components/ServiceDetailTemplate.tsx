import Image from 'next/image';
import Link from 'next/link';
import {
  Clock,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  MessageCircle,
  ChevronRight,
  ArrowRight,
  MapPin,
  Calendar,
} from 'lucide-react';
import { ServiceItem, SERVICES, SALON_INFO } from '@/lib/salon-data';
import FaqAccordion from '@/components/FaqAccordion';

interface ServiceDetailTemplateProps {
  service: ServiceItem;
  extraContent?: React.ReactNode;
}

export default function ServiceDetailTemplate({
  service,
  extraContent,
}: ServiceDetailTemplateProps) {
  // Other 4 services for cross-linking
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  // Structured Data Schema for Service & FAQPage
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.titleH1,
    description: service.shortSummary,
    provider: {
      '@type': 'BeautySalon',
      name: SALON_INFO.name,
      telephone: SALON_INFO.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Monsenhor Catão, 1167',
        addressLocality: 'Fortaleza',
        addressRegion: 'CE',
        postalCode: '60175-000',
        addressCountry: 'BR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Fortaleza',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="bg-white text-[#262626]">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#0D0D0D] border-b border-neutral-800 py-3 text-xs text-neutral-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C9A24B] transition-colors">
              Início
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <Link href="/#servicos" className="hover:text-[#C9A24B] transition-colors">
              Serviços
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[#C9A24B] font-medium truncate">{service.name}</span>
          </div>
        </div>

        {/* Hero Banner do Serviço - Sem filtro escuro, imagem 100% natural */}
        <header className="bg-white border-b border-neutral-200 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Textos do Serviço */}
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
                  ALDEOTA • FORTALEZA - CE
                </span>

                {/* 1. Único H1 da página */}
                <h1 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-[0.05em] text-[#0D0D0D] mb-6 leading-tight">
                  {service.titleH1}
                </h1>

                {/* 2. Resumo direto em 2 ou 3 frases logo no início */}
                <p className="text-base sm:text-lg text-neutral-700 font-light leading-relaxed mb-8">
                  {service.shortSummary}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`https://wa.me/558532247040?text=${encodeURIComponent(service.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pearl-button group inline-flex items-center justify-center select-none"
                  >
                    <span className="pearl-btn-wrap flex items-center justify-center gap-2.5 py-3.5 px-8">
                      <span className="flex items-center gap-2 relative z-10">
                        <MessageCircle className="w-4 h-4 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                        <span className="tracking-[0.16em] uppercase font-bold text-xs sm:text-sm text-white">
                          AGENDAR PELO WHATSAPP
                        </span>
                      </span>
                    </span>
                  </a>

                  <div className="inline-flex items-center gap-2 px-5 py-3 bg-[#F9F5EC] border border-[#C9A24B]/30 rounded-full text-neutral-700 text-xs font-medium shadow-sm">
                    <Clock className="w-4 h-4 text-[#C9A24B]" />
                    <span>Duração: {service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Imagem do Serviço - 100% visível, nítida e com bordas arredondadas */}
              <div className="lg:col-span-5">
                <div className="relative h-[340px] sm:h-[420px] w-full border border-neutral-200 shadow-xl overflow-hidden rounded-2xl group">
                  <Image
                    src={service.heroImage}
                    alt={service.altImage}
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 px-3.5 py-1 bg-white/95 text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest border border-[#C9A24B]/40 shadow-sm backdrop-blur-sm rounded-full">
                    Procedimento Real
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Informações Técnicas & Procedimento em Container Centralizado (Sem Sidebar) */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <main className="space-y-16">
            {/* 3. Para quem é indicado */}
            <section aria-labelledby="indicacao-heading">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C9A24B]" />
                <h2
                  id="indicacao-heading"
                  className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]"
                >
                  PARA QUEM É INDICADO
                </h2>
              </div>

              <div className="bg-[#F9F5EC] border border-[#C9A24B]/30 p-6 sm:p-8">
                <ul className="space-y-4">
                  {service.indicatedFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 4. Como funciona, passo a passo */}
            <section aria-labelledby="passos-heading">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C9A24B]" />
                <h2
                  id="passos-heading"
                  className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]"
                >
                  COMO FUNCIONA O PROCEDIMENTO (PASSO A PASSO)
                </h2>
              </div>

              <div className="space-y-6">
                {service.stepByStep.map((step) => (
                  <div
                    key={step.step}
                    className="p-6 bg-white border border-neutral-200 hover:border-[#C9A24B]/60 transition-colors flex flex-col sm:flex-row gap-5 items-start shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#0D0D0D] text-[#C9A24B] font-bold font-heading flex items-center justify-center shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold uppercase text-[#0D0D0D] mb-2 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-600 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* BOTÃO DE AÇÃO AO LONGO DA PÁGINA (CTA Intermediário Perolado Arredondado) */}
            <div className="pearl-card text-white p-8 sm:p-12 text-center">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A24B] uppercase block mb-2 relative z-10">
                ATENDIMENTO NA ALDEOTA • FORTALEZA
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider mb-4 relative z-10">
                Deseja agendar sua sessão de {service.name}?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto mb-8 leading-relaxed relative z-10">
                Fale diretamente com nossa equipe via WhatsApp e tire suas dúvidas sobre horários disponíveis.
              </p>
              <div className="relative z-10">
                <a
                  href={`https://wa.me/558532247040?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pearl-button group inline-flex items-center justify-center select-none"
                >
                  <span className="pearl-btn-wrap flex items-center justify-center gap-2.5 py-4 px-10">
                    <span className="flex items-center gap-2.5 relative z-10">
                      <MessageCircle className="w-4 h-4 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                      <span className="tracking-[0.18em] uppercase font-bold text-xs sm:text-sm text-white">
                        AGENDAR {service.name.toUpperCase()} NO WHATSAPP
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* 5. Duração média, Cuidados Antes e Depois, Resultados Esperados */}
            <section aria-labelledby="cuidados-heading">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C9A24B]" />
                <h2
                  id="cuidados-heading"
                  className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]"
                >
                  DURAÇÃO, CUIDADOS E RESULTADOS ESPERADOS
                </h2>
              </div>

              {/* Resultados Esperados */}
              <div className="p-6 bg-white border border-neutral-200 mb-8 shadow-sm">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C9A24B]" />
                  <span>Resultados Esperados & Realismo</span>
                </h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {service.expectedResults}
                </p>
              </div>

              {/* Grid Cuidados Antes e Depois */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-neutral-50 border border-neutral-200">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D] mb-4">
                    Cuidados Antes da Sessão
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 font-light">
                    {service.preCare.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C9A24B] rounded-full shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 bg-neutral-50 border border-neutral-200">
                  <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D] mb-4">
                    Cuidados Pós-Procedimento
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm text-neutral-600 font-light">
                    {service.postCare.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-[#C9A24B] rounded-full shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 6. Contraindicações e Quando buscar avaliação */}
            <section aria-labelledby="contraindicacoes-heading">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C9A24B]" />
                <h2
                  id="contraindicacoes-heading"
                  className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]"
                >
                  CONTRAINDICAÇÕES E CRITÉRIOS DE AVALIAÇÃO
                </h2>
              </div>

              <div className="p-6 bg-neutral-50 border-l-4 border-[#C9A24B] space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-neutral-900 font-medium text-sm">
                  <ShieldAlert className="w-5 h-5 text-[#C9A24B] shrink-0" />
                  <span>Principais Contraindicações:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 pl-7 list-disc">
                  {service.contraindications.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                    <strong className="text-[#0D0D0D]">Quando agendar avaliação: </strong>
                    {service.whenToSeekEvaluation}
                  </p>
                </div>
              </div>
            </section>

            {/* 7. Perguntas Frequentes (Mínimo 5 FAQs) */}
            <section aria-labelledby="faqs-heading">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#C9A24B]" />
                <h2
                  id="faqs-heading"
                  className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]"
                >
                  PERGUNTAS FREQUENTES (FAQ)
                </h2>
              </div>

              <FaqAccordion faqs={service.faqs} />
            </section>

            {/* BOTÃO DE AÇÃO AO FINAL (CTA Inferior com Efeito Perolado Arredondado) */}
            <div className="bg-[#F9F5EC] border border-[#C9A24B]/40 rounded-3xl p-8 sm:p-12 text-center shadow-lg">
              <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#0D0D0D] mb-3">
                Pronta para transformar seu olhar com segurança?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-lg mx-auto mb-8">
                Atendimento personalizado na Rua Monsenhor Catão, 1167 - Aldeota, Fortaleza - CE.
              </p>
              <a
                href={`https://wa.me/558532247040?text=${encodeURIComponent(service.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pearl-button group inline-flex items-center justify-center select-none"
              >
                <span className="pearl-btn-wrap flex items-center justify-center gap-3 py-4 px-10">
                  <span className="flex items-center gap-2.5 relative z-10">
                    <MessageCircle className="w-5 h-5 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                    <span className="tracking-[0.18em] uppercase font-bold text-xs sm:text-sm text-white">
                      SOLICITAR HORÁRIO NO WHATSAPP
                    </span>
                  </span>
                </span>
              </a>
            </div>

            {/* Conteúdo Extra (Relatos em Vídeo, Instagram, etc.) */}
            {extraContent}
          </main>
        </div>

        {/* 8. Seção Inferior: Links de Navegação para os outros serviços */}
        <section className="bg-[#FAFAFA] py-16 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-2">
                CONTINUE EXPLORANDO
              </span>
              <h2 className="font-heading text-2xl font-bold uppercase tracking-wider text-[#0D0D0D]">
                OUTROS SERVIÇOS EM FORTALEZA
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((other) => (
                <Link
                  key={other.id}
                  href={`/servicos/${other.slug}`}
                  className="bg-white border border-neutral-200 hover:border-[#C9A24B] p-5 flex flex-col justify-between transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  <div>
                    <span className="text-[10px] text-[#C9A24B] uppercase font-bold tracking-widest block mb-2">
                      Procedimento
                    </span>
                    <h3 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] group-hover:text-[#C9A24B] transition-colors mb-2">
                      {other.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-light line-clamp-2">
                      {other.shortSummary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-medium text-[#0D0D0D]">
                    <span>Saber mais</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A24B] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
