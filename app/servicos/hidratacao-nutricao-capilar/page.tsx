import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'hidratacao-nutricao-capilar');

export const metadata: Metadata = {
  title: 'Hidratação & Nutrição Capilar em Fortaleza | Maura Lima Aldeota',
  description:
    'Terapias capilares de reposição hídrica e lipídica profunda para devolver maciez, brilho espelhado e vitalidade aos fios na Aldeota.',
  openGraph: {
    title: 'Hidratação & Nutrição Capilar em Fortaleza | Maura Lima Aldeota',
    description:
      'Terapias capilares de reposição hídrica e lipídica profunda para devolver maciez, brilho espelhado e vitalidade aos fios na Aldeota.',
    url: 'https://mauralima.com.br/servicos/hidratacao-nutricao-capilar',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/hidratacao-nutricao-capilar',
  },
};

export default function HidratacaoNutricaoCapilarPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
