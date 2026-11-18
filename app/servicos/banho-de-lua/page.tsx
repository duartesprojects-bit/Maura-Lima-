import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'banho-de-lua');

export const metadata: Metadata = {
  title: 'Banho de Lua em Fortaleza | Maura Lima Aldeota',
  description:
    'Ritual de clareamento suave dos pelos corporais, esfoliação renovadora e hidratação intensa para pele luminosa e macia na Aldeota.',
  openGraph: {
    title: 'Banho de Lua em Fortaleza | Maura Lima Aldeota',
    description:
      'Ritual de clareamento suave dos pelos corporais, esfoliação renovadora e hidratação intensa para pele luminosa e macia na Aldeota.',
    url: 'https://mauralima.com.br/servicos/banho-de-lua',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/banho-de-lua',
  },
};

export default function BanhoDeLuaPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
