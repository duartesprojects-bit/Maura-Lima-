import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'unhas');

export const metadata: Metadata = {
  title: 'Manicure e Pedicure em Fortaleza | Maura Lima Aldeota',
  description:
    'Cuidados completos para unhas em Fortaleza: manicure, pedicure, blindagem e esmaltação em gel com biossegurança rigorosa na Aldeota. Agende seu horário!',
  openGraph: {
    title: 'Manicure e Pedicure em Fortaleza | Maura Lima Aldeota',
    description:
      'Cuidados completos para unhas com cutilagem milimétrica e esmaltação impecável na Maura Lima Aldeota Fortaleza.',
    url: 'https://mauralima-fortaleza.com.br/servicos/unhas',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/unhas',
  },
};

export default function UnhasPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
