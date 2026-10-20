import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'corte-de-cabelo-masculino');

export const metadata: Metadata = {
  title: 'Corte de Cabelo Masculino em Fortaleza | Maura Lima Aldeota',
  description:
    'Cortes modernos e clássicos com acabamento impecável e atendimento personalizado em ambiente sofisticado na Aldeota.',
  openGraph: {
    title: 'Corte de Cabelo Masculino em Fortaleza | Maura Lima Aldeota',
    description:
      'Cortes modernos e clássicos com acabamento impecável e atendimento personalizado em ambiente sofisticado na Aldeota.',
    url: 'https://mauralima.com.br/servicos/corte-de-cabelo-masculino',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/corte-de-cabelo-masculino',
  },
};

export default function CorteCabeloMasculinoPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
