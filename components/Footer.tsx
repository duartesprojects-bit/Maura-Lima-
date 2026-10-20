import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Instagram, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SALON_INFO, SERVICES } from '@/lib/salon-data';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-[#C9A24B]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block group py-1"
            >
              <Image
                src="/logoBranca (2).png"
                alt="Maura Lima – Specialist Eyebrows Fortaleza"
                width={260}
                height={90}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Pioneira e especialista na arte de valorizar a beleza natural através do design
              de sobrancelhas milimétrico, remoção a laser Ömer 3D de alta precisão e estética facial na Aldeota.
            </p>
            <div className="pt-2">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A24B] hover:text-[#DFBF73] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>{SALON_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Procedimentos & Serviços */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white pb-3 mb-4 border-b border-neutral-800 flex items-center justify-between">
              <span>SERVIÇOS EXCLUSIVOS</span>
              <span className="w-6 h-[1px] bg-[#C9A24B]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servicos/${s.slug}`}
                    className="hover:text-[#C9A24B] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#C9A24B]/60 rounded-full group-hover:bg-[#C9A24B] transition-colors" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Horários de Atendimento */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white pb-3 mb-4 border-b border-neutral-800 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C9A24B]" />
                HORÁRIOS DE FUNCIONAMENTO
              </span>
              <span className="w-6 h-[1px] bg-[#C9A24B]"></span>
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {SALON_INFO.hours.map((h, i) => (
                <li key={i} className="flex justify-between items-center border-b border-neutral-850 pb-1.5">
                  <span className="text-neutral-400">{h.day}:</span>
                  <span className={h.time === 'Fechado' ? 'text-neutral-500 italic' : 'text-neutral-200 font-medium'}>
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-[#C9A24B] mt-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Atendemos com pontualidade e hora marcada.</span>
            </p>
          </div>

          {/* Column 4: Unidades & Contato */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white pb-3 mb-4 border-b border-neutral-800 flex items-center justify-between">
              <span>UNIDADES FORTALEZA</span>
              <span className="w-6 h-[1px] bg-[#C9A24B]"></span>
            </h4>
            <div className="space-y-4 text-xs text-neutral-300">
              <div>
                <p className="font-bold text-white text-xs mb-1">Maura Lima Aldeota:</p>
                <p className="text-neutral-400 text-[11px] mb-1">R. Monsenhor Catão, 1167</p>
                <p className="text-[#C9A24B] font-medium">WhatsApp: (85) 98957-8885</p>
                <p className="text-neutral-400 text-[11px]">Fixo: (85) 3224-7040</p>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <p className="font-bold text-white text-xs mb-1">Maura Lima Maison Sul:</p>
                <p className="text-neutral-400 text-[11px] mb-1">Av. Edilson Brasil Soares, 1717</p>
                <p className="text-[#C9A24B] font-medium">WhatsApp: (85) 98570-1647</p>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#C9A24B] hover:bg-[#DFBF73] text-[#0D0D0D] font-bold uppercase text-[11px] tracking-wider transition-all rounded-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>AGENDAR NO WHATSAPP</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            © {new Date().getFullYear()} Maura Lima – Specialist Eyebrows Fortaleza. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] text-neutral-400 flex items-center gap-1">
              Feito com excelência para Aldeota, Fortaleza - CE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
