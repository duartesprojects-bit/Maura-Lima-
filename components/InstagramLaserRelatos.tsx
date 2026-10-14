'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import { Instagram, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

interface InstagramPost {
  id: string;
  url: string;
  title: string;
  author: string;
  category: 'tecnologia' | 'duvidas' | 'relatos';
  description: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'Dd435QUgAFa',
    url: 'https://www.instagram.com/reel/Dd435QUgAFa/',
    title: 'Veja o procedimento: Aplicação com Laser Ömer 3D',
    author: '@mauralimasobrancelhasoficial',
    category: 'relatos',
    description:
      'Veja o procedimento real de remoção a laser no salão: assista ao disparo preciso do Laser Ömer 3D agindo diretamente sobre o pigmento sem danificar a raiz dos pelos.',
  },
  {
    id: 'DbmI8rkgEvX',
    url: 'https://www.instagram.com/reel/DbmI8rkgEvX/',
    title: 'Tirando dúvidas sobre Pigmentação: Sobrancelhas vermelhas e laranjas tem solução?',
    author: '@mauralimasobrancelhasoficial',
    category: 'duvidas',
    description:
      'Tire suas dúvidas sobre pigmentação alterada: saiba como o Laser Ömer 3D e a tecnologia da ponteira 532nm eliminam pigmentos avermelhados e alaranjados com segurança, preservando os pelos naturais.',
  },
  {
    id: 'DbsyLWnRXB-',
    url: 'https://www.instagram.com/reel/DbsyLWnRXB-/',
    title: 'Explicando a Tecnologia Laser Ömer',
    author: '@mauralimasobrancelhasoficial',
    category: 'tecnologia',
    description:
      'Vídeo explicativo detalhando como funciona a avançada tecnologia do laser Ömer 3D e seus diferenciais em relação aos métodos tradicionais.',
  },
  {
    id: 'Db31CzVAIg6',
    url: 'https://www.instagram.com/reel/Db31CzVAIg6/',
    title: 'Cliente Satisfeita: Combo Remoção a Laser + Sobrancelha Fio a Fio',
    author: '@mauralimasobrancelhasoficial',
    category: 'relatos',
    description:
      'Depoimento de cliente satisfeita que adquiriu o combo completo: removeu a micropigmentação antiga e refez as sobrancelhas com o desenho natural e simétrico fio a fio.',
  },
  {
    id: 'DcR2gNOg1TK',
    url: 'https://www.instagram.com/reel/DcR2gNOg1TK/',
    title: 'Relato em Vídeo: Procedimento Real no Salão',
    author: '@mauralimasobrancelhasoficial',
    category: 'relatos',
    description:
      'Veja em vídeo o procedimento real de atendimento no salão: aplicação cuidadosa do Laser Ömer 3D, conforto da cliente e o resultado imediato da sessão.',
  },
  {
    id: 'DdXLuAgAIg8',
    url: 'https://www.instagram.com/reel/DdXLuAgAIg8/',
    title: 'Dúvidas & Respostas sobre a Remoção a Laser',
    author: '@mauralimasobrancelhasoficial',
    category: 'duvidas',
    description:
      'Tire suas principais dúvidas sobre dor, cicatrização, intervalo recomendado entre sessões e preservação da raiz dos pelos naturais.',
  },
  {
    id: 'DbHO6mQA5fa',
    url: 'https://www.instagram.com/reel/DbHO6mQA5fa/',
    title: 'Dúvidas e Respostas: O procedimento dói muito?',
    author: '@mauralimasobrancelhasoficial',
    category: 'duvidas',
    description:
      'Esclarecendo a principal dúvida das clientes: o nível de sensibilidade, uso de resfriamento e anestésicos tópicos, e como o Laser Ömer 3D torna a sessão rápida e bem tolerável.',
  },
  {
    id: 'Dbbf9WqyptS',
    url: 'https://www.instagram.com/reel/Dbbf9WqyptS/',
    title: 'Relato de Experiência no Espaço VIP',
    author: '@espacovippormarianafeitosa',
    category: 'relatos',
    description:
      'Depoimento e relato de cliente parceira comprovando a eficiência e suavidade do tratamento de remoção.',
  },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramLaserRelatos() {
  const [activeTab, setActiveTab] = useState<'todos' | 'tecnologia' | 'duvidas' | 'relatos'>('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Filtragem dos posts de acordo com a tag selecionada
  const filteredPosts =
    activeTab === 'todos'
      ? INSTAGRAM_POSTS
      : INSTAGRAM_POSTS.filter((p) => p.category === activeTab);

  // Re-processa embeds do Instagram quando a aba ou DOM atualizam
  useEffect(() => {
    const processEmbeds = () => {
      if (typeof window !== 'undefined' && window.instgrm?.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    processEmbeds();
    const timer = setTimeout(processEmbeds, 600);
    return () => clearTimeout(timer);
  }, [activeTab]);

  // Atualiza o índice do slide baseado no scroll do carrossel
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    const newIndex = Math.round(scrollPosition / itemWidth);
    setCurrentIndex(Math.min(Math.max(newIndex, 0), filteredPosts.length - 1));
  };

  // Navegação anterior
  const handlePrev = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  };

  // Navegação próxima
  const handleNext = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 400;
    container.scrollBy({ left: itemWidth, behavior: 'smooth' });
  };

  // Troca de aba / tag com reset do carrossel para o início
  const handleTabChange = (tab: 'todos' | 'tecnologia' | 'duvidas' | 'relatos') => {
    setActiveTab(tab);
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Rola para um slide específico ao clicar no dot indicador
  const handleGoToSlide = (idx: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const items = container.children;
    if (items[idx]) {
      (items[idx] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    }
  };

  return (
    <section className="mt-16 pt-12 border-t border-neutral-200" aria-labelledby="instagram-relatos-heading">
      {/* Script oficial de Embeds do Instagram */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (window.instgrm?.Embeds) {
            window.instgrm.Embeds.process();
          }
        }}
      />

      {/* Cabeçalho da Seção */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[2px] bg-[#C9A24B]" />
          <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase">
            DIRETO DO INSTAGRAM DA MAURA LIMA
          </span>
        </div>
        <h2
          id="instagram-relatos-heading"
          className="font-heading text-xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#0D0D0D]"
        >
          RELATOS REAIS, VÍDEOS & DÚVIDAS FREQUENTES
        </h2>
        <p className="text-sm text-neutral-600 font-light mt-2 max-w-2xl leading-relaxed">
          Assista às explicações da tecnologia, veja os procedimentos em tempo real e confira relatos de clientes da unidade Aldeota.
        </p>
      </div>

      {/* Destaque Técnico das 3 Ponteiras do Laser Ömer */}
      <div className="mb-10 bg-[#F9F5EC] border border-[#C9A24B]/40 p-6 sm:p-8 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-[#C9A24B]" />
          <h3 className="font-heading text-base font-bold uppercase tracking-wider text-[#0D0D0D]">
            A Tecnologia das 3 Ponteiras Exclusivas do Laser Ömer 3D
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[11px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira 532nm
            </span>
            <h4 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] mb-2">
              Pigmentos Vermelhos e Laranjas
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              O grande diferencial: atinge e fragmenta tons avermelhados e alaranjados que os lasers antigos não conseguiam remover.
            </p>
          </div>

          <div className="bg-white p-5 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[11px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira 1064nm
            </span>
            <h4 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] mb-2">
              Pigmentos Pretos e Escuros
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Lê e remove pigmentos pretos, azulados e acinzentados com máxima segurança, sem queimar ou afinar os pelos naturais.
            </p>
          </div>

          <div className="bg-white p-5 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[11px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira de Carbono
            </span>
            <h4 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] mb-2">
              Black Peeling & Pigmentos Profundos
            </h4>
            <p className="text-xs text-neutral-600 font-light leading-relaxed">
              Indicada para pigmentos mais profundos e para a execução do tratamento facial Black Peeling para fechamento de poros e renovação da pele.
            </p>
          </div>
        </div>
      </div>

      {/* Barra de Filtros por Tags e Controles do Carrossel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 border-b border-neutral-200 pb-4">
        {/* Botões de Seleção por Tags */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => handleTabChange('todos')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'todos'
                ? 'bg-[#0D0D0D] text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Todos os Vídeos ({INSTAGRAM_POSTS.length})
          </button>

          <button
            onClick={() => handleTabChange('relatos')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'relatos'
                ? 'bg-[#0D0D0D] text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Procedimentos & Relatos ({INSTAGRAM_POSTS.filter((p) => p.category === 'relatos').length})
          </button>

          <button
            onClick={() => handleTabChange('duvidas')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'duvidas'
                ? 'bg-[#0D0D0D] text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Dúvidas & Respostas ({INSTAGRAM_POSTS.filter((p) => p.category === 'duvidas').length})
          </button>

          <button
            onClick={() => handleTabChange('tecnologia')}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all ${
              activeTab === 'tecnologia'
                ? 'bg-[#0D0D0D] text-white shadow-sm'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            Tecnologia Laser ({INSTAGRAM_POSTS.filter((p) => p.category === 'tecnologia').length})
          </button>
        </div>

        {/* Controles de Navegação do Carrossel (Setas e Contador) */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <span className="text-xs text-neutral-500 font-medium tracking-wide">
            {currentIndex + 1} de {filteredPosts.length}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Vídeo anterior"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-neutral-700 transition-all shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= filteredPosts.length - 1}
              aria-label="Próximo vídeo"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-neutral-700 transition-all shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carrossel de Reels com Rolagem Suave e Snap */}
      <div className="relative">
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-1 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="w-[85vw] sm:w-[440px] md:w-[480px] shrink-0 snap-center bg-white border border-neutral-200 hover:border-[#C9A24B]/70 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Cabeçalho do Card */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-[#C9A24B] mb-2 font-medium">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Instagram className="w-4 h-4" />
                    {post.author}
                  </span>
                  <span className="text-[11px] text-neutral-600 uppercase tracking-wider bg-neutral-100 px-2.5 py-1 rounded-full font-medium">
                    {post.category === 'tecnologia'
                      ? 'Tecnologia'
                      : post.category === 'duvidas'
                      ? 'Dúvidas'
                      : 'Procedimento / Relato'}
                  </span>
                </div>
                <h3 className="font-heading text-sm sm:text-base font-bold text-[#0D0D0D] mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {post.description}
                </p>
              </div>

              {/* Container do Embed do Instagram */}
              <div className="w-full flex justify-center overflow-hidden my-2">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${post.url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '12px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.2), 0 2px 10px 0 rgba(0,0,0,0.08)',
                    margin: '1px auto',
                    maxWidth: '540px',
                    minWidth: '280px',
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <div style={{ padding: '16px' }}>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#0D0D0D] hover:text-[#C9A24B] py-3 w-full border border-neutral-200 rounded-lg transition-colors"
                    >
                      <Instagram className="w-4 h-4 text-[#C9A24B]" />
                      <span>Assistir Reel no Instagram ({post.title})</span>
                    </a>
                  </div>
                </blockquote>
              </div>

              {/* Rodapé do Card com Link Direto */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-500 text-[11px]">Instagram Oficial Maura Lima</span>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A24B] hover:text-[#0D0D0D] font-bold flex items-center gap-1 transition-colors uppercase text-[11px] tracking-wider"
                >
                  <span>Abrir no App</span>
                  &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores Visuais (Dots) e Dica de Navegação */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-[11px] text-neutral-400 font-light flex items-center gap-1">
            <span>Dica: Use as setas ou deslize para os lados para navegar pelos vídeos.</span>
          </p>

          {/* Dots de Paginação */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
            {filteredPosts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleGoToSlide(idx)}
                aria-label={`Ir para vídeo ${idx + 1}`}
                className={`transition-all rounded-full ${
                  idx === currentIndex
                    ? 'w-6 h-2 bg-[#C9A24B]'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
