import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'cabelo-e-coloracao');

export const metadata: Metadata = {
  title: 'Cabelo e Coloração em Fortaleza | Maura Lima Aldeota',
  description:
    'Loiros luminosos, morena iluminada, tratamentos reconstrutores e escova com brilho espelhado na Aldeota em Fortaleza. Agende com a Maura Lima.',
  openGraph: {
    title: 'Cabelo e Coloração em Fortaleza | Maura Lima Aldeota',
    description:
      'Loiros luminosos, morena iluminada e reconstrução capilar profunda no coração da Aldeota, Fortaleza.',
    url: 'https://mauralima-fortaleza.com.br/servicos/cabelo-e-coloracao',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/cabelo-e-coloracao',
  },
};

export default function CabeloColoracaoPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
