'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from 'lucide-react';

const SALON_GALLERY_IMAGES = [
  {
    id: 1,
    title: "Recepção Maura Lima",
    subtitle: "Boas-vindas com Carinho",
    image: "/assets/aistudio/Recepcao2_ff138ce0.png",
  },
  {
    id: 2,
    title: "Sala de Espera Acolhedora",
    subtitle: "Conforto e Sofisticação",
    image: "/assets/aistudio/Recepcao_9712a7ed.png",
  },
  {
    id: 3,
    title: "Lounge e Bem-Estar",
    subtitle: "Ambiente Relaxante",
    image: "/assets/aistudio/AAjk-CNZPsV3Z4033WGwfwljOmrvTLasWPZoUjL0SJETpolfNU7N5djHINOK3B7QAHSv8FO_qLf7FGRVBHSR3sJut4Bs3WnHI12ENrPyefq1KQFPTWjq3MtofLRK4-eS9JnFHIlXHCm_w1080-h1506-k-no_12dc569a.png",
  },
  {
    id: 4,
    title: "Espaço de Atendimento",
    subtitle: "Estrutura Completa e Climatizada",
    image: "/assets/aistudio/AAjk-COUGyAB04sSEucRyXNDmWU4fT7NyAy20H3-nqCYVfepF_bZUVqWvTlqivSVsW6c8koHhR5hTO-NkLkj8DTT_O-6MViTzA9S6gro7AHRvVj7mX6OJ4sp3sbEtkP8eamgVEjQvAAw1080-h1334-k-no_d88b39ee.png",
  },
  {
    id: 5,
    title: "Salão de Cabeleireiro",
    subtitle: "Beleza e Cuidado Capilar",
    image: "/assets/aistudio/Salao_de_Cabeleireiro_4615fddc.png",
  },
  {
    id: 6,
    title: "Lavatório e Espaço de Cuidados",
    subtitle: "Relaxamento e Conforto",
    image: "/assets/aistudio/lavatorio_422a0b58.png",
  },
];

export default function SalonGalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SALON_GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SALON_GALLERY_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-2">
            EXPERIÊNCIA MAURA LIMA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] uppercase tracking-[0.05em] leading-tight">
            Conheça Nosso Salão
          </h2>
          <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
          <div className="relative h-[500px] sm:h-[660px] lg:h-[760px] w-full overflow-hidden">
            {/* Ambient background layer */}
            <Image
              src={SALON_GALLERY_IMAGES[currentIndex].image}
              alt=""
              fill
              aria-hidden="true"
              className="object-cover object-center blur-xl opacity-45 scale-110"
              sizes="(max-width: 1200px) 100vw, 1100px"
              referrerPolicy="no-referrer"
            />
            <Image
              src={SALON_GALLERY_IMAGES[currentIndex].image}
              alt={SALON_GALLERY_IMAGES[currentIndex].title}
              fill
              className="object-cover object-center transition-all duration-700"
              sizes="(max-width: 1200px) 100vw, 1100px"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-4 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 text-white z-10">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24B] block mb-0.5 sm:mb-1">
                {SALON_GALLERY_IMAGES[currentIndex].subtitle}
              </span>
              <h3 className="text-base sm:text-2xl font-bold font-heading tracking-wide">
                {SALON_GALLERY_IMAGES[currentIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            aria-label="Slide anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C9A24B] text-white hover:text-[#0D0D0D] flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Próximo slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#C9A24B] text-white hover:text-[#0D0D0D] flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-6 flex items-center gap-2 z-20">
            {SALON_GALLERY_IMAGES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#C9A24B]' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
