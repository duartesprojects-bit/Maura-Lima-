import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'micropigmentacao-fio-a-fio');

export const metadata: Metadata = {
  title: 'Micropigmentação de Sobrancelhas Fio a Fio em Fortaleza | Maura Lima',
  description:
    'Micropigmentação fio a fio em Fortaleza: sobrancelhas naturais, com fios desenhados um a um. Veja como funciona, duração, cuidados e tire suas dúvidas.',
  openGraph: {
    title: 'Micropigmentação de Sobrancelhas Fio a Fio em Fortaleza | Maura Lima',
    description:
      'Micropigmentação fio a fio em Fortaleza: sobrancelhas naturais, com fios desenhados um a um. Veja como funciona, duração, cuidados e tire suas dúvidas.',
    url: 'https://mauralima-fortaleza.com.br/servicos/micropigmentacao-fio-a-fio',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/micropigmentacao-fio-a-fio',
  },
};

export default function MicropigmentacaoFioAFioPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
