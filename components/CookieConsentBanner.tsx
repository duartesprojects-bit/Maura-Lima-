'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, ShieldCheck, X } from 'lucide-react';

const STORAGE_KEY = 'maura_lima_cookie_consent';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedConsent = localStorage.getItem(STORAGE_KEY);
        if (!savedConsent) {
          setVisible(true);
        }
      } catch {
        setVisible(true);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleConsent = (choice: 'accepted' | 'essential') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Ignore storage errors in restricted environments
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de privacidade e uso de cookies"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-[#0D0D0D]/95 backdrop-blur-md text-white border border-[#C9A24B]/40 rounded-2xl p-5 sm:p-6 shadow-2xl relative">
        <button
          type="button"
          onClick={() => handleConsent('essential')}
          aria-label="Fechar aviso de cookies"
          className="absolute top-3.5 right-3.5 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3.5 pr-6 mb-3">
          <div className="w-9 h-9 rounded-full bg-[#C9A24B]/15 border border-[#C9A24B]/40 flex items-center justify-center shrink-0 mt-0.5">
            <Cookie className="w-4 h-4 text-[#C9A24B]" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C9A24B] flex items-center gap-1 mb-0.5">
              <ShieldCheck className="w-3 h-3" />
              <span>Privacidade &amp; LGPD</span>
            </span>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              Sua experiência em primeiro lugar
            </h3>
          </div>
        </div>

        <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
          Utilizamos cookies para personalizar sua navegação, melhorar o desempenho do site e oferecer um atendimento ainda mais acolhedor, em conformidade com a LGPD. Confira nossa{' '}
          <Link
            href="/politica-de-privacidade"
            className="text-[#C9A24B] hover:text-[#DFBF73] underline underline-offset-2 font-medium transition-colors"
          >
            Política de Privacidade e Cookies
          </Link>
          .
        </p>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => handleConsent('accepted')}
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold text-xs uppercase tracking-wider transition-all shadow-sm cursor-pointer"
          >
            Aceitar Cookies
          </button>
          <button
            type="button"
            onClick={() => handleConsent('essential')}
            className="py-2.5 px-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            Apenas Essenciais
          </button>
        </div>
      </div>
    </div>
  );
}
