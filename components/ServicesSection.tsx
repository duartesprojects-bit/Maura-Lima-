'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Award, Clock, MessageCircle } from 'lucide-react';
import {
  SALON_INFO,
  SERVICES,
  SERVICE_CATEGORIES,
  ServiceCategory,
} from '@/lib/salon-data';

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory['id']>('todos');

  const getCategoryCount = (categoryId: ServiceCategory['id']) => {
    if (categoryId === 'todos') return SERVICES.length + 1;
    if (categoryId === 'cursos') return 1;
    return SERVICES.filter((s) => s.category === categoryId).length;
  };

  const filteredServices =
    activeCategory === 'todos'
      ? SERVICES
      : activeCategory === 'cursos'
      ? []
      : SERVICES.filter((s) => s.category === activeCategory);

  const showCourseCard = activeCategory === 'todos' || activeCategory === 'cursos';

  return (
    <section id="servicos" className="py-24 bg-[#FAFAFA] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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

        {/* Seletor de Categorias */}
        <div
          role="group"
          aria-label="Filtrar serviços por categoria"
          className="flex flex-wrap items-center gap-2.5 mb-12"
        >
          {SERVICE_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            const count = getCategoryCount(category.id);

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category.id)}
                className={`min-h-[44px] px-4 sm:px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border whitespace-nowrap shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24B] ${
                  isActive
                    ? 'bg-[#0D0D0D] text-white border-[#0D0D0D] shadow-sm'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-[#C9A24B] hover:text-[#0D0D0D]'
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-[11px] font-semibold tabular-nums ${
                    isActive ? 'text-[#C9A24B]' : 'text-neutral-400'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid de Serviços Compartimentados */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.18 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
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
                  quality={85}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 bg-white/95 text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest border border-[#C9A24B]/50 shadow-sm rounded-full tabular-nums">
                    {String(index + 1).padStart(2, '0')}
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

                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <div className="flex items-center text-xs text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-[#C9A24B] mr-2 shrink-0" />
                    <span className="truncate">{service.duration}</span>
                  </div>

                  {/* Campo reservado para o preço do procedimento */}
                  <div className="flex items-center justify-between pt-2.5 border-t border-neutral-100 text-xs">
                    <span className="text-neutral-500 uppercase tracking-wider text-[11px] font-medium">
                      Valor
                    </span>
                    <span className="font-semibold text-[#0D0D0D] tabular-nums">
                      {service.price && service.price.trim() !== ''
                        ? service.price
                        : 'Sob consulta'}
                    </span>
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
          {showCourseCard && (
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

                <div className="pt-4 border-t border-neutral-800 space-y-3">
                  <div className="flex items-center text-xs text-neutral-400">
                    <Award className="w-3.5 h-3.5 text-[#C9A24B] mr-2 shrink-0" />
                    <span>Certificado Profissional Incluso</span>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 border-t border-neutral-800 text-xs">
                    <span className="text-neutral-400 uppercase tracking-wider text-[11px] font-medium">
                      Valor
                    </span>
                    <span className="font-semibold text-[#C9A24B] tabular-nums">
                      A partir de R$ 1.500,00
                    </span>
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
          )}
        </motion.div>
      </div>

      {/* Banner de Consulta Especializada */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="pearl-card text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden rounded-3xl shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C9A24B] uppercase block mb-2">
              CONSULTA ESPECIALIZADA
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider mb-3 leading-snug">
              Dúvidas sobre qual o melhor procedimento para o seu olhar?
            </h3>
            <p className="text-sm text-neutral-200 font-normal leading-relaxed">
              Nossas consultoras analisam seu caso com todo carinho e orientam o tratamento mais indicado, seja para iniciar a despigmentação ou para conquistar o design perfeito na Aldeota.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pearl-button group inline-flex items-center justify-center select-none"
            >
              <span className="pearl-btn-wrap flex items-center justify-center gap-2 py-4 px-8">
                <span className="flex items-center gap-2 relative z-10">
                  <MessageCircle className="w-5 h-5 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
                  <span className="tracking-[0.14em] uppercase font-bold text-xs sm:text-sm text-white">
                    FALAR COM UMA ESPECIALISTA
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
