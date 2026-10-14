import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'design-de-sobrancelhas');

export const metadata: Metadata = {
  title: 'Design de Sobrancelhas em Fortaleza | Maura Lima Aldeota',
  description:
    'Mapeamento facial minucioso para realçar a curvatura e simetria perfeita do seu rosto na Aldeota em Fortaleza. Agende seu horário com a Maura Lima.',
  openGraph: {
    title: 'Design de Sobrancelhas em Fortaleza | Maura Lima Aldeota',
    description:
      'Mapeamento facial minucioso para realçar a simetria perfeita para o formato de rosto na Maura Lima Aldeota Fortaleza.',
    url: 'https://mauralima-fortaleza.com.br/servicos/design-de-sobrancelhas',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/design-de-sobrancelhas',
  },
};

export default function DesignSobrancelhasPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
