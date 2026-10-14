'use client';

import { MessageCircle } from 'lucide-react';
import { SALON_INFO } from '@/lib/salon-data';

export default function WhatsAppFloatingButton() {
  return (
    <aside aria-label="Atendimento rápido WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 bg-[#0D0D0D] text-white text-xs border border-[#C9A24B]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Agendar pelo WhatsApp na Aldeota
      </span>

      <a
        href={SALON_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp da Maura Lima Fortaleza"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C9A24B] rounded-full border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </aside>
  );
}
