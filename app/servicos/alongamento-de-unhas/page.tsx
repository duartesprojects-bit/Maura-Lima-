import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'alongamento-de-unhas');

export const metadata: Metadata = {
  title: 'Alongamento de Unhas em Fortaleza | Maura Lima Aldeota',
  description:
    'Alongamento em gel e fibra com curvatura natural, resistência impecável e acabamento fino na Maura Lima Aldeota.',
  openGraph: {
    title: 'Alongamento de Unhas em Fortaleza | Maura Lima Aldeota',
    description:
      'Alongamento em gel e fibra com curvatura natural, resistência impecável e acabamento fino na Maura Lima Aldeota.',
    url: 'https://mauralima.com.br/servicos/alongamento-de-unhas',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/alongamento-de-unhas',
  },
};

export default function AlongamentoDeUnhasPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
