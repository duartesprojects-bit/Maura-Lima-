'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, Image as ImageIcon } from 'lucide-react';

const SALON_GALLERY_IMAGES = [
  {
    id: 1,
    title: "Recepção Exclusiva",
    subtitle: "Maura Lima Aldeota",
    image: "/recepção.jpg",
  },
  {
    id: 2,
    title: "Sala de Atendimento Especializada",
    subtitle: "Conforto e Privacidade",
    image: "/sala de atendimento.jpg",
  },
  {
    id: 3,
    title: "Estacionamento Próprio",
    subtitle: "Comodidade e Segurança",
    image: "/estacionamento.jpg",
  },
  {
    id: 4,
    title: "Ambiente Sofisticado",
    subtitle: "Alta Qualidade em Fortaleza",
    image: "/images/Improve_lighting_2K_20261013151319.jpg",
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
        {/* Header & Illustrative Notice */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Notice above */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A24B]/15 border border-[#C9A24B]/40 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0D0D0D] mb-4">
            <ImageIcon className="w-4 h-4 text-[#C9A24B]" />
            <span>Aviso: Imagens ilustrativas, aguardando substituição oficial.</span>
          </div>

          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-2">
            EXPERIÊNCIA MAURA LIMA
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0D0D0D] uppercase tracking-[0.05em] leading-tight">
            Conheça Nosso Salão
          </h2>
          <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mt-4" />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full">
            <Image
              src={SALON_GALLERY_IMAGES[currentIndex].image}
              alt={SALON_GALLERY_IMAGES[currentIndex].title}
              fill
              className="object-cover transition-all duration-700 opacity-90 hover:opacity-100"
              sizes="(max-width: 1024px) 100vw, 900px"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A24B] block mb-1">
                {SALON_GALLERY_IMAGES[currentIndex].subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-wide">
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
