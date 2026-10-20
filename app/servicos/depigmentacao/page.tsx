import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'depigmentacao');

export const metadata: Metadata = {
  title: 'Depigmentação em Fortaleza | Maura Lima Aldeota',
  description:
    'Método especializado em clareamento e remoção gradual de micropigmentações antigas com segurança e cuidado na Aldeota, Fortaleza.',
  openGraph: {
    title: 'Depigmentação em Fortaleza | Maura Lima Aldeota',
    description:
      'Método especializado em clareamento e remoção gradual de micropigmentações antigas com segurança e cuidado.',
    url: 'https://mauralima.com.br/servicos/depigmentacao',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/depigmentacao',
  },
};

export default function DepigmentacaoPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
