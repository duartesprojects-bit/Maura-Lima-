import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  ExternalLink,
  Shield,
  Award,
} from 'lucide-react';
import HeroCarousel from '@/components/HeroCarousel';
import { SALON_INFO, SERVICES, REVIEWS } from '@/lib/salon-data';

export default function HomePage() {
  return (
    <div className="bg-white text-[#262626]">
      {/* 1. HERO SECTION (CARROSSEL COM IMAGENS E VÍDEO) */}
      <HeroCarousel />

      {/* 2. INTRODUÇÃO & PILARES DE EXCELÊNCIA */}
      <section className="py-20 lg:py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
              ESTÉTICA DO OLHAR & HARMONIA FACIAL NA ALDEOTA
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0D0D0D] tracking-[0.05em] uppercase mb-6 leading-tight">
              A ARTE DE REALÇAR A SUA BELEZA COM NATURALIDADE
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mb-6" />
            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              No coração da Aldeota, em Fortaleza, a Maura Lima une precisão cirúrgica no design de sobrancelhas,
              a avançada tecnologia do laser Ömer 3D e uma atmosfera serena para proporcionar uma experiência de autocuidado singular.
            </p>
          </div>


        </div>
      </section>

      {/* 3. SEÇÃO DE SERVIÇOS (CARDS DETALHADOS) */}
      <section id="servicos" className="py-24 bg-[#FAFAFA] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-2">
                MENU DE PROCEDIMENTOS
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] tracking-[0.05em] uppercase">
                NOSSOS SERVIÇOS EM FORTALEZA
              </h2>
            </div>
            <p className="text-sm text-neutral-700 max-w-md font-normal leading-relaxed">
              Procedimentos executados por especialistas formadas no método exclusivo Maura Lima, com materiais esterilizados e dermocosméticos de primeira linha.
            </p>
          </div>

          {/* Grid de Serviços com Elementos Arredondados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                className="bg-white border border-neutral-200 hover:border-[#C9A24B]/80 transition-all duration-300 shadow-sm hover:shadow-xl rounded-2xl flex flex-col group overflow-hidden"
              >
                {/* Imagem do Serviço na proporção 1:1 */}
                <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={service.heroImage}
                    alt={service.altImage}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1 bg-white/95 text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest border border-[#C9A24B]/50 shadow-sm rounded-full">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-[#0D0D0D] uppercase tracking-wide group-hover:text-[#C9A24B] transition-colors mb-3">
                      {service.name}
                    </h3>
                    <p className="text-sm text-neutral-700 font-normal line-clamp-3 leading-relaxed mb-6">
                      {service.shortSummary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 space-y-4">
                    <div className="flex items-center text-xs text-neutral-500">
                      <Clock className="w-3.5 h-3.5 text-[#C9A24B] mr-2 shrink-0" />
                      <span className="truncate">{service.duration}</span>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Link
                        href={`/servicos/${service.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white font-semibold text-xs uppercase tracking-wider transition-all"
                      >
                        <span>Ver Procedimento</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={`https://wa.me/558532247040?text=${encodeURIComponent(service.whatsappMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] rounded-full transition-colors flex items-center justify-center shadow-sm"
                        aria-label={`Agendar ${service.name} no WhatsApp`}
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Card do Curso Profissional Maura Lima */}
            <article className="bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] text-white border border-[#C9A24B]/50 hover:border-[#C9A24B] transition-all duration-300 shadow-lg hover:shadow-2xl rounded-2xl flex flex-col group overflow-hidden">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
                <Image
                  src="/curso.jpg"
                  alt="Cursos Profissionais Maura Lima"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-[#C9A24B] text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-full">
                    FORMAÇÃO
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#C9A24B] uppercase tracking-wide mb-3">
                    Cursos Profissionais Maura Lima
                  </h3>
                  <p className="text-sm text-neutral-200 font-normal line-clamp-3 leading-relaxed mb-6">
                    Aprenda o método exclusivo de design de sobrancelhas, visagismo e técnicas avançadas com certificação oficial e alta empregabilidade no mercado da estética.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-4">
                  <div className="flex items-center text-xs text-neutral-400">
                    <Award className="w-3.5 h-3.5 text-[#C9A24B] mr-2 shrink-0" />
                    <span>Certificado Profissional Incluso</span>
                  </div>

                  <div className="pt-1">
                    <Link
                      href="/cursos"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
                    >
                      <span>Saiba Mais Sobre o Curso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Card de Atendimento Personalizado Perolado Arredondado */}
            <div className="pearl-card text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold tracking-[0.2em] text-[#C9A24B] uppercase block mb-3">
                  CONSULTA ESPECIALIZADA
                </span>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-4 leading-snug">
                  Dúvidas sobre qual o melhor procedimento para o seu olhar?
                </h3>
                <p className="text-sm text-neutral-200 font-normal leading-relaxed mb-6">
                  Nossas consultoras analisam seu caso e orientam o tratamento mais indicado, seja para iniciar a remoção com laser Ömer 3D ou para conquistar o design perfeito.
                </p>
              </div>

              <div className="relative z-10 pt-4">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pearl-button w-full group inline-flex items-center justify-center select-none"
                >
                  <span className="pearl-btn-wrap flex items-center justify-center gap-2 py-3.5 px-6">
                    <span className="flex items-center gap-2 relative z-10">
                      <MessageCircle className="w-4 h-4 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                      <span className="tracking-[0.14em] uppercase font-bold text-xs text-white">
                        FALAR COM UMA ESPECIALISTA
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOBRE O SALÃO & MÉTODO MAURA LIMA */}
      <section id="sobre" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Mosaic / Image */}
            <div className="relative">
              <div className="relative h-[480px] sm:h-[540px] w-full border border-neutral-200 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/Improve_lighting_2K_20261013151319.jpg"
                  alt="Espaço sofisticado e acolhedor do salão Maura Lima em Fortaleza"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                  priority
                />
              </div>

              {/* Float badge in gold/dark */}
              <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#0D0D0D] text-white p-6 border border-[#C9A24B]/50 shadow-2xl max-w-xs">
                <span className="text-2xl font-bold font-heading text-[#C9A24B] block">
                  ALDEOTA
                </span>
                <span className="text-xs uppercase tracking-wider text-neutral-300 font-light block mt-1">
                  Atendimento de alta exclusividade no bairro mais nobre de Fortaleza
                </span>
              </div>
            </div>

            {/* Texto Sobre */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-2">
                  TRADIÇÃO E INOVAÇÃO EM FORTALEZA
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] uppercase tracking-[0.05em] leading-tight">
                  ESPECIALISTAS EM REALÇAR A SUA EXPRESSÃO
                </h2>
              </div>

              <div className="w-16 h-[2px] bg-[#C9A24B]" />

              <p className="text-base text-neutral-700 font-light leading-relaxed">
                A marca <strong className="font-medium text-[#0D0D0D]">Maura Lima – Specialist Eyebrows</strong> construiu uma reputação de referência no Brasil ao tratar o design de sobrancelhas não como um procedimento rotineiro, mas como uma arte de personalização extrema.
              </p>

              <p className="text-base text-neutral-700 font-light leading-relaxed">
                Na nossa unidade em Fortaleza, situada na Rua Monsenhor Catão, combinamos esse legado de visagismo com as mais modernas tecnologias mundiais, como a <strong className="font-medium text-[#0D0D0D]">Remoção a Laser Ömer 3D</strong>, a delicadeza dos cílios em <strong className="font-medium text-[#0D0D0D]">Volume Brasileiro</strong> e uma equipe completa de coloração capilar e maquiagem de alta durabilidade.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0" />
                  <span>Ambiente silencioso, relaxante e com total privacidade.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0" />
                  <span>Protocolos rigorosos de assepsia e equipamentos certificados.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A24B] shrink-0" />
                  <span>Estacionamento e fácil mobilidade no polo da Aldeota.</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0D0D0D] hover:bg-[#1A1A1A] text-white hover:text-[#C9A24B] font-bold text-xs uppercase tracking-[0.15em] transition-all border border-[#C9A24B]/40"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A24B]" />
                  <span>CONHECER DE PERTO • AGENDAR VISITA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AVALIAÇÕES DE CLIENTES */}
      <section id="avaliacoes" className="py-24 bg-[#0D0D0D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
              EXPERIÊNCIA COMPROVADA
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-[0.05em] mb-4">
              O QUE NOSSAS CLIENTES DIZEM
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mb-6" />
            <p className="text-sm text-neutral-400 font-light">
              Avaliações reais de quem confia seu olhar e bem-estar à Maura Lima na Aldeota.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((review) => (
              <div
                key={review.id}
                className="bg-[#141414] border border-neutral-800 hover:border-[#C9A24B]/50 p-6 flex flex-col justify-between transition-colors duration-300 rounded-2xl shadow-md"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#C9A24B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-300 font-light italic leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-white block">
                    {review.name}
                  </span>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-1">
                    <span>{review.location}</span>
                    <span className="text-[#C9A24B]">{review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24B] hover:text-white transition-colors"
            >
              <span>Acompanhe mais transformações e resultados no Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. HORÁRIOS & ATENDIMENTO PERSONALIZADO */}
      <section id="horarios" className="py-20 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F9F5EC] border border-[#C9A24B]/40 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
                  PLANEJE SEU MOMENTO
                </span>
                <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0D0D0D] uppercase tracking-wide mb-6">
                  HORÁRIOS DE ATENDIMENTO
                </h2>
                <p className="text-base text-neutral-700 font-light leading-relaxed mb-6">
                  Nosso salão opera com agenda estruturada para garantir que você não enfrente filas ou atrasos. Cada atendimento conta com o tempo necessário para você relaxar e ser cuidada com atenção exclusiva.
                </p>

                <div className="space-y-3">
                  {SALON_INFO.hours.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-[#C9A24B]/20 text-sm"
                    >
                      <span className="font-medium text-[#0D0D0D]">{item.day}</span>
                      <span className={item.time === 'Fechado' ? 'text-neutral-500 italic' : 'font-bold text-[#0D0D0D]'}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pearl-card text-white p-8 sm:p-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#C9A24B]/20 text-[#C9A24B] mb-5 border border-[#C9A24B]/30 relative z-10">
                  <Calendar className="w-8 h-8 text-[#C9A24B]" />
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3 relative z-10">
                  RESERVE SEU HORÁRIO PREFERIDO
                </h3>
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-8 relative z-10">
                  Os horários de quinta a sábado costumam ter alta procura. Garanta sua vaga com antecedência diretamente pelo WhatsApp.
                </p>
                <div className="w-full relative z-10">
                  <a
                    href={SALON_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pearl-button w-full group inline-flex items-center justify-center select-none"
                  >
                    <span className="pearl-btn-wrap flex items-center justify-center gap-3 py-4 px-6">
                      <span className="flex items-center gap-2.5 relative z-10">
                        <MessageCircle className="w-5 h-5 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                        <span className="tracking-[0.16em] uppercase font-bold text-xs sm:text-sm text-white">
                          SOLICITAR AGENDAMENTO AGORA
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UNIDADES & LOCALIZAÇÃO */}
      <section id="localizacao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
              NOSSAS UNIDADES EM FORTALEZA
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] uppercase tracking-[0.05em] mb-4">
              ATENDIMENTO EXCLUSIVO
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mb-6" />
            <p className="text-sm text-neutral-600 font-light">
              Escolha a unidade de sua preferência (Aldeota ou Maison Sul) e agende seu atendimento ou curso via WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {SALON_INFO.units.map((unit, idx) => (
              <div key={idx} className="bg-[#FAFAFA] border border-neutral-200 p-8 rounded-2xl shadow-sm flex flex-col justify-between hover:border-[#C9A24B]/60 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading text-xl font-bold uppercase text-[#0D0D0D]">
                      {unit.name}
                    </h3>
                    <span className="px-3 py-1 bg-white text-[#C9A24B] text-xs font-semibold uppercase rounded-full border border-[#C9A24B]/40 shadow-xs">
                      Fortaleza - CE
                    </span>
                  </div>
                  <div className="space-y-3 text-sm text-neutral-600 font-light mb-6">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                      <span>{unit.address}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#C9A24B] shrink-0" />
                      <span>{unit.hours}</span>
                    </p>
                    <p className="flex items-center gap-2 font-medium text-[#0D0D0D] pt-2 border-t border-neutral-200">
                      <MessageCircle className="w-4 h-4 text-[#C9A24B] shrink-0" />
                      <span>WhatsApp: {unit.whatsapp} {unit.phone ? `| Fixo: ${unit.phone}` : ''}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200 flex items-center gap-3">
                  <a
                    href={unit.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Agendar nesta Unidade</span>
                  </a>
                  {unit.directionsUrl && (
                    <a
                      href={unit.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 py-3 px-4 border border-neutral-300 hover:border-[#0D0D0D] rounded-xl text-neutral-700 hover:text-[#0D0D0D] transition-all bg-white text-xs font-semibold uppercase tracking-wider"
                      aria-label={`Como chegar na unidade ${unit.name}`}
                    >
                      <ExternalLink className="w-4 h-4 text-[#C9A24B]" />
                      <span>Como Chegar</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Mapa Google Maps Incorporado */}
          <div className="h-[420px] border border-neutral-200 bg-neutral-100 overflow-hidden relative rounded-2xl shadow-sm">
            <iframe
              title="Mapa do Salão Maura Lima Specialist Eyebrows na Aldeota Fortaleza"
              src={SALON_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 8. BANNER CTA FINAL DE CONVERSÃO */}
      <section className="py-20 bg-[#0D0D0D] text-white border-t border-[#C9A24B]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C9A24B_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
            AGENDAMENTO IMEDIATO
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-[0.05em] mb-6 leading-tight">
            PRONTA PARA REALÇAR A SUA MELHOR VERSÃO?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            Converse diretamente com a nossa equipe em Fortaleza e garanta seu horário exclusivo de atendimento na Aldeota.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold text-xs sm:text-sm uppercase tracking-[0.2em] transition-all shadow-xl active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>AGENDAR PELO WHATSAPP</span>
            </a>
            <a
              href="tel:8532247040"
              className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 hover:border-[#C9A24B] text-white text-xs sm:text-sm uppercase tracking-[0.15em] transition-all"
            >
              <span>LIGAR: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
