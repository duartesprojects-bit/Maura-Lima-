'use client';

import { useState, useRef } from 'react';
import {
  Instagram,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Play,
} from 'lucide-react';

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

// Card individual compacto para o Reel do Instagram
function ReelCard({ post }: { post: InstagramPost }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Link limpo e oficial do Reel
  const reelUrl = `https://www.instagram.com/reel/${post.id}/`;
  const embedUrl = `https://www.instagram.com/reel/${post.id}/embed/`;

  return (
    <article className="w-[280px] sm:w-[310px] md:w-[325px] shrink-0 snap-center bg-white border border-neutral-200 hover:border-[#C9A24B]/70 p-3.5 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      {/* Cabeçalho compacto do card */}
      <div className="mb-2.5">
        <div className="flex items-center justify-between text-xs text-[#C9A24B] mb-1.5 font-medium">
          <span className="flex items-center gap-1.5 font-semibold text-[11px] truncate max-w-[170px]">
            <Instagram className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
            {post.author}
          </span>
          <span className="text-[10px] text-neutral-600 uppercase tracking-wider bg-neutral-100 px-2 py-0.5 rounded-full font-medium shrink-0">
            {post.category === 'tecnologia'
              ? 'Tecnologia'
              : post.category === 'duvidas'
              ? 'Dúvidas'
              : 'Procedimento'}
          </span>
        </div>
        <h3 className="font-heading text-xs sm:text-sm font-bold text-[#0D0D0D] mb-1 line-clamp-2 leading-snug">
          {post.title}
        </h3>
        <p className="text-[11px] text-neutral-600 font-light line-clamp-2 leading-relaxed">
          {post.description}
        </p>
      </div>

      {/* Container compacto do Embed do Instagram */}
      <div className="w-full relative my-2 bg-neutral-100 rounded-lg overflow-hidden border border-neutral-200 h-[360px] sm:h-[380px] flex items-center justify-center">
        {/* Loading Spinner */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-50 text-neutral-500 z-10">
            <div className="w-6 h-6 border-2 border-[#C9A24B] border-t-transparent rounded-full animate-spin" />
            <span className="text-[11px] font-medium">Carregando Reel...</span>
          </div>
        )}

        {/* Iframe oficial do Reel em tamanho compacto */}
        <iframe
          src={embedUrl}
          title={post.title}
          className="w-full h-[360px] sm:h-[380px] border-0 rounded-lg bg-white"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
        />

        {/* Fallback elegante caso o navegador restrinja cookies ou bloqueie iframe */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0D0D0D] text-white z-20">
            <div className="w-12 h-12 rounded-full bg-[#C9A24B]/20 border border-[#C9A24B] flex items-center justify-center mb-3 text-[#C9A24B]">
              <Play className="w-5 h-5 ml-0.5" />
            </div>
            <p className="text-xs font-semibold mb-1 text-white line-clamp-2">
              {post.title}
            </p>
            <p className="text-[11px] text-neutral-300 font-light mb-4">
              Toque abaixo para assistir ao vídeo no Instagram oficial
            </p>
            <a
              href={reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#C9A24B] hover:bg-[#b58f3b] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Assistir Reel</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>

      {/* Rodapé compacto do card com link corrigido e direto */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
        <span className="text-neutral-500 text-[10px]">Maura Lima Oficial</span>
        <a
          href={reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A24B] hover:text-[#0D0D0D] font-bold flex items-center gap-1 transition-colors uppercase tracking-wider text-[10px]"
        >
          <span>Assistir no Insta</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
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

  // Atualiza o índice do slide baseado no scroll do carrossel
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    const newIndex = Math.round(scrollPosition / itemWidth);
    setCurrentIndex(Math.min(Math.max(newIndex, 0), filteredPosts.length - 1));
  };

  // Navegação anterior
  const handlePrev = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
  };

  // Navegação próxima
  const handleNext = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 320;
    container.scrollBy({ left: itemWidth, behavior: 'smooth' });
  };

  // Troca de aba com reset para o início
  const handleTabChange = (tab: 'todos' | 'tecnologia' | 'duvidas' | 'relatos') => {
    setActiveTab(tab);
    setCurrentIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Ir direto a um slide específico pelo dot superior
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
    <section className="mt-14 pt-10 border-t border-neutral-200" aria-labelledby="instagram-relatos-heading">
      {/* Cabeçalho da Seção */}
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-2">
          <span className="w-7 h-[2px] bg-[#C9A24B]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#C9A24B] uppercase">
            DIRETO DO INSTAGRAM DA MAURA LIMA
          </span>
        </div>
        <h2
          id="instagram-relatos-heading"
          className="font-heading text-lg sm:text-2xl font-extrabold uppercase tracking-wide text-[#0D0D0D]"
        >
          RELATOS REAIS, VÍDEOS & DÚVIDAS FREQUENTES
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 font-light mt-1.5 max-w-2xl leading-relaxed">
          Assista às explicações da tecnologia, veja os procedimentos em tempo real e confira relatos de clientes da unidade Aldeota.
        </p>
      </div>

      {/* Destaque Técnico das 3 Ponteiras do Laser Ömer */}
      <div className="mb-8 bg-[#F9F5EC] border border-[#C9A24B]/30 p-5 sm:p-6 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#C9A24B]" />
          <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#0D0D0D]">
            A Tecnologia das 3 Ponteiras Exclusivas do Laser Ömer 3D
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[10px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira 532nm
            </span>
            <h4 className="font-heading text-xs sm:text-sm font-bold uppercase text-[#0D0D0D] mb-1.5">
              Pigmentos Vermelhos e Laranjas
            </h4>
            <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
              Atinge e fragmenta tons avermelhados e alaranjados que os lasers antigos não conseguiam remover.
            </p>
          </div>

          <div className="bg-white p-4 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[10px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira 1064nm
            </span>
            <h4 className="font-heading text-xs sm:text-sm font-bold uppercase text-[#0D0D0D] mb-1.5">
              Pigmentos Pretos e Escuros
            </h4>
            <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
              Lê e remove pigmentos escuros e azulados com máxima segurança, preservando os pelos naturais.
            </p>
          </div>

          <div className="bg-white p-4 border border-[#C9A24B]/20 shadow-sm rounded-lg">
            <span className="text-[10px] font-bold text-[#C9A24B] tracking-widest uppercase block mb-1">
              Ponteira de Carbono
            </span>
            <h4 className="font-heading text-xs sm:text-sm font-bold uppercase text-[#0D0D0D] mb-1.5">
              Black Peeling & Profundos
            </h4>
            <p className="text-[11px] text-neutral-600 font-light leading-relaxed">
              Indicada para pigmentos profundos e para o tratamento facial Black Peeling para fechamento de poros.
            </p>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* NAVEGAÇÃO NA PARTE SUPERIOR (CONFORME SOLICITADO)       */}
      {/* ======================================================== */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 sm:p-4 mb-5 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Filtros de Categoria */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => handleTabChange('todos')}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'todos'
                  ? 'bg-[#0D0D0D] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              Todos ({INSTAGRAM_POSTS.length})
            </button>

            <button
              onClick={() => handleTabChange('relatos')}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'relatos'
                  ? 'bg-[#0D0D0D] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              Procedimentos ({INSTAGRAM_POSTS.filter((p) => p.category === 'relatos').length})
            </button>

            <button
              onClick={() => handleTabChange('duvidas')}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'duvidas'
                  ? 'bg-[#0D0D0D] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              Dúvidas ({INSTAGRAM_POSTS.filter((p) => p.category === 'duvidas').length})
            </button>

            <button
              onClick={() => handleTabChange('tecnologia')}
              className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                activeTab === 'tecnologia'
                  ? 'bg-[#0D0D0D] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
              }`}
            >
              Tecnologia ({INSTAGRAM_POSTS.filter((p) => p.category === 'tecnologia').length})
            </button>
          </div>

          {/* Controles de Navegação Superior (Setas, Contador e Dots) */}
          <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-200">
            {/* Dots Superiores de Navegação Rápida */}
            <div className="flex items-center gap-1">
              {filteredPosts.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleGoToSlide(idx)}
                  title={`Ir para vídeo ${idx + 1}`}
                  aria-label={`Ir para vídeo ${idx + 1}`}
                  className={`transition-all rounded-full ${
                    idx === currentIndex
                      ? 'w-5 h-2 bg-[#C9A24B]'
                      : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>

            {/* Contador de Posição */}
            <span className="text-xs text-neutral-600 font-semibold tracking-wide">
              {currentIndex + 1} / {filteredPosts.length}
            </span>

            {/* Botões de Avançar e Voltar na Parte Superior */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                aria-label="Vídeo anterior"
                className="w-8 h-8 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-neutral-800 transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= filteredPosts.length - 1}
                aria-label="Próximo vídeo"
                className="w-8 h-8 rounded-lg border border-[#C9A24B] bg-[#0D0D0D] text-white hover:bg-[#C9A24B] hover:text-[#0D0D0D] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Carrossel de Reels com Rolagem Suave e Tamanho Compacto */}
      <div className="relative group">
        {/* Seta Flutuante Esquerda (Desktop) */}
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            aria-label="Voltar carrossel"
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-neutral-300 text-neutral-800 hover:bg-[#0D0D0D] hover:text-white shadow-lg items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Seta Flutuante Direita (Desktop) */}
        {currentIndex < filteredPosts.length - 1 && (
          <button
            onClick={handleNext}
            aria-label="Avançar carrossel"
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 border border-[#C9A24B] text-neutral-800 hover:bg-[#C9A24B] hover:text-[#0D0D0D] shadow-lg items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 pt-1 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredPosts.map((post) => (
            <ReelCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
