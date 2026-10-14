import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'extensao-de-cilios-volume-brasileiro');

export const metadata: Metadata = {
  title: 'Extensão de Cílios Volume Brasileiro em Fortaleza | Maura Lima Aldeota',
  description:
    'Fios tecnológicos em Y ultrafinos para máxima densidade, leveza e durabilidade no olhar. Procedimento exclusivo na Aldeota em Fortaleza.',
  openGraph: {
    title: 'Extensão de Cílios Volume Brasileiro em Fortaleza | Maura Lima Aldeota',
    description:
      'Extensão de cílios com volume brasileiro na Maura Lima em Fortaleza. Olhar marcante e natural com conforto absoluto.',
    url: 'https://mauralima-fortaleza.com.br/servicos/extensao-de-cilios-volume-brasileiro',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/extensao-de-cilios-volume-brasileiro',
  },
};

export default function ExtensaoCiliosPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
