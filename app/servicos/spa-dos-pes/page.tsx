import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'spa-dos-pes');

export const metadata: Metadata = {
  title: 'Spa dos Pés em Fortaleza | Maura Lima Aldeota',
  description:
    'Protocolo relaxante de hidratação profunda, esfoliação renovadora e massagem revigorante para pés macios e leves.',
  openGraph: {
    title: 'Spa dos Pés em Fortaleza | Maura Lima Aldeota',
    description:
      'Protocolo relaxante de hidratação profunda, esfoliação renovadora e massagem revigorante para pés macios e leves.',
    url: 'https://mauralima.com.br/servicos/spa-dos-pes',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/spa-dos-pes',
  },
};

export default function SpaDosPesPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
