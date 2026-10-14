'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, MessageCircle, MapPin, Phone, Instagram } from 'lucide-react';
import { SALON_INFO, SERVICES } from '@/lib/salon-data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenus = () => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#0D0D0D] text-white border-b border-[#262626] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-neutral-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
              Aldeota, Fortaleza - CE
            </span>
            <span className="hidden md:inline-block text-neutral-600">•</span>
            <span className="hidden md:flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
              {SALON_INFO.phoneDisplay}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-neutral-300 hover:text-[#C9A24B] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">Atendimento com hora marcada</span>
          </div>
        </div>
      </div>

      {/* Main fixed navbar - Design Semitransparente */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#C9A24B]/30 py-2.5'
            : 'bg-white/80 backdrop-blur-md border-b border-neutral-200/60 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo - 100% legible on white */}
          <Link href="/" className="group flex items-center py-1">
            <Image
              src="/images/logo.png"
              alt="Maura Lima – Specialist Eyebrows Fortaleza"
              width={180}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-85 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold uppercase tracking-[0.15em]">
            <Link
              href="/"
              className={`transition-colors py-1 relative ${
                pathname === '/'
                  ? 'text-[#C9A24B] font-bold'
                  : 'text-[#0D0D0D] hover:text-[#C9A24B]'
              }`}
            >
              INÍCIO
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A24B]" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 transition-colors py-1 ${
                  pathname.startsWith('/servicos')
                    ? 'text-[#C9A24B] font-bold'
                    : 'text-[#0D0D0D] hover:text-[#C9A24B]'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                SERVIÇOS
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#C9A24B]' : ''
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-3">
                  <div className="bg-white/95 backdrop-blur-md border border-[#C9A24B]/40 shadow-2xl py-2 px-1 rounded-2xl">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        href={`/servicos/${s.slug}`}
                        className="block px-4 py-2.5 text-[11px] text-neutral-700 hover:text-[#0D0D0D] hover:bg-[#F9F5EC] hover:border-l-2 hover:border-[#C9A24B] transition-all normal-case tracking-normal rounded-lg"
                      >
                        <div className="font-semibold text-[#0D0D0D]">{s.name}</div>
                        <div className="text-[10px] text-neutral-500 truncate">
                          {s.duration}
                        </div>
                      </Link>
                    ))}
                    <div className="border-t border-neutral-150 mt-2 pt-2 px-4 pb-1">
                      <Link
                        href="/#servicos"
                        className="text-[10px] text-[#C9A24B] hover:underline uppercase tracking-wider font-semibold block"
                      >
                        Ver todos os serviços &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/cursos"
              className="text-[#0D0D0D] hover:text-[#C9A24B] transition-colors py-1 font-bold text-[#C9A24B]"
            >
              CURSOS
            </Link>

            <Link
              href="/#sobre"
              className="text-[#0D0D0D] hover:text-[#C9A24B] transition-colors py-1"
            >
              SOBRE O SALÃO
            </Link>

            <Link
              href="/#avaliacoes"
              className="text-[#0D0D0D] hover:text-[#C9A24B] transition-colors py-1"
            >
              AVALIAÇÕES
            </Link>

            <Link
              href="/#horarios"
              className="text-[#0D0D0D] hover:text-[#C9A24B] transition-colors py-1"
            >
              HORÁRIOS
            </Link>

            <Link
              href="/#localizacao"
              className="text-[#0D0D0D] hover:text-[#C9A24B] transition-colors py-1"
            >
              UNIDADES
            </Link>
          </nav>

          {/* Desktop CTA WhatsApp Discreto & Arredondado ao lado do Menu */}
          <div className="hidden lg:flex items-center">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-[0.14em] uppercase text-[#0D0D0D] bg-white/70 hover:bg-[#0D0D0D] hover:text-white border border-[#C9A24B]/50 hover:border-[#0D0D0D] transition-all duration-300 shadow-sm hover:shadow backdrop-blur-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-[#C9A24B] group-hover:scale-110 transition-transform" />
              <span>Agendar Horário</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2.5">
            <a
              href={SALON_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-[#0D0D0D] bg-white/80 border border-[#C9A24B]/40 hover:bg-[#C9A24B] hover:text-white transition-all shadow-sm backdrop-blur-sm"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#C9A24B]" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-[#0D0D0D] hover:text-[#C9A24B] transition-colors focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down menu - Semitransparente */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-[#C9A24B]/40 px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="pb-3 mb-3 border-b border-neutral-100 flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Maura Lima"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col space-y-3 uppercase font-semibold text-xs tracking-widest text-[#0D0D0D]">
              <Link
                href="/"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B]"
              >
                Início
              </Link>

              <div className="py-2 border-b border-neutral-100">
                <span className="text-[#C9A24B] font-bold block mb-2">Serviços:</span>
                <div className="pl-3 space-y-2 normal-case tracking-normal text-sm font-normal">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/servicos/${s.slug}`}
                      onClick={closeMenus}
                      className="block text-neutral-700 hover:text-[#0D0D0D] py-1"
                    >
                      • {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/cursos"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B] text-[#C9A24B] font-bold"
              >
                Cursos Maura Lima
              </Link>
              <Link
                href="/#sobre"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B]"
              >
                Sobre o Salão
              </Link>
              <Link
                href="/#avaliacoes"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B]"
              >
                Avaliações
              </Link>
              <Link
                href="/#horarios"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B]"
              >
                Horários de Atendimento
              </Link>
              <Link
                href="/#localizacao"
                onClick={closeMenus}
                className="py-2 border-b border-neutral-100 hover:text-[#C9A24B]"
              >
                Unidades (Aldeota e Maison Sul)
              </Link>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-100">
              <a
                href={SALON_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#C9A24B] text-[#0D0D0D] font-bold text-xs uppercase tracking-widest shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>AGENDAR PELO WHATSAPP</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
