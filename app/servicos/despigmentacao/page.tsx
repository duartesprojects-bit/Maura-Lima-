import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'despigmentacao');

export const metadata: Metadata = {
  title: 'Despigmentação em Fortaleza | Maura Lima Aldeota',
  description:
    'Método especializado em clareamento e remoção gradual de micropigmentações antigas com segurança e cuidado na Aldeota, Fortaleza.',
  openGraph: {
    title: 'Despigmentação em Fortaleza | Maura Lima Aldeota',
    description:
      'Método especializado em clareamento e remoção gradual de micropigmentações antigas com segurança e cuidado.',
    url: 'https://mauralima.com.br/servicos/despigmentacao',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/despigmentacao',
  },
};

export default function DespigmentacaoPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
