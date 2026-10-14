'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { MessageCircle, Play, Pause } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/salon-data';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  // Reset video to start whenever slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  // Auto advance: wait for video to finish or default interval before changing slide
  useEffect(() => {
    if (!isPlaying) return;

    // Slide 1 has the 8-second video; Slide 4 has the 14-second cabelo.mp4 video
    const duration = currentSlide.id === 1 ? 8000 : currentSlide.id === 4 ? 14000 : 6000;

    const timer = setTimeout(() => {
      nextSlide();
    }, duration);

    return () => clearTimeout(timer);
  }, [isPlaying, currentIndex, currentSlide.id, nextSlide]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="group relative w-full h-[640px] sm:h-[720px] lg:h-[820px] overflow-hidden bg-black select-none"
      aria-label="Carrossel Principal Maura Lima Fortaleza"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Media (Vídeo e Imagem sem fade in/out e sem efeito de escurecimento) */}
      <div className="absolute inset-0 w-full h-full">
        {currentSlide.video ? (
          <video
            ref={videoRef}
            key={currentSlide.video}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={currentSlide.image}
            onEnded={() => {
              if (isPlaying) nextSlide();
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-label={currentSlide.alt}
          >
            <source src={currentSlide.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={currentSlide.image}
            alt={currentSlide.alt}
            fill
            priority={currentIndex === 0}
            className="object-cover object-center"
            sizes="100vw"
            referrerPolicy="no-referrer"
          />
        )}
      </div>

      {/* Conteúdo Centralizado Sem Caixa de Texto e sem fade in/out */}
      <div className="relative z-20 max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
        <div key={`content-${currentSlide.id}`} className="flex flex-col items-center justify-center max-w-3xl">
          {/* Subtítulo / Marca */}
          <div className="mb-4">
            <span className="inline-block text-[11px] sm:text-xs font-bold tracking-[0.3em] text-[#DFBF73] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              {currentSlide.subtitle}
            </span>
          </div>

          {/* Texto de Impacto Centralizado em MAIÚSCULAS */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[0.12em] text-white uppercase leading-[1.08] mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            {currentSlide.title}
          </h1>

          {/* Descrição Leve e Elegante */}
          <p className="text-base sm:text-xl lg:text-2xl text-white font-normal leading-relaxed max-w-2xl mx-auto mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            {currentSlide.description}
          </p>

          {/* Botão de Agendamento Centralizado - Transparente com Borda em Branco */}
          <div className="pt-2">
            <a
              href={currentSlide.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent hover:bg-white/20 text-white transition-all duration-300 py-3.5 sm:py-4 px-8 sm:px-11 shadow-lg group/btn backdrop-blur-sm"
            >
              <span className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover/btn:scale-110 transition-transform" />
                <span className="tracking-[0.16em] uppercase font-bold text-xs sm:text-sm text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  {currentSlide.ctaText}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Indicadores Inferiores Centralizados Arredondados */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex items-center justify-center">
        <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/15 shadow-xl transition-all">
          <div className="flex items-center space-x-2">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                aria-label={`Ir para o slide ${index + 1}: ${slide.title}`}
                className="group/dot py-1.5 focus:outline-none"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 sm:w-12 bg-[#C9A24B]'
                      : 'w-3 sm:w-4 bg-white/40 group-hover/dot:bg-white/70'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Botão de Pause/Play - Exibido apenas ao passar o mouse sobre a área dos slides */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pausar carrossel' : 'Iniciar carrossel'}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1.5 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 focus:opacity-100 focus:outline-none"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </section>
  );
}
