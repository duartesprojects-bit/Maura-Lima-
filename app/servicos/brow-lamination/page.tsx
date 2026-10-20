import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'brow-lamination');

export const metadata: Metadata = {
  title: 'Brow Lamination em Fortaleza | Maura Lima Aldeota',
  description:
    'Técnica inovadora que alinha e disciplina os pelos das sobrancelhas para um efeito volumoso, encorpado e moderno.',
  openGraph: {
    title: 'Brow Lamination em Fortaleza | Maura Lima Aldeota',
    description:
      'Técnica inovadora que alinha e disciplina os pelos das sobrancelhas para um efeito volumoso, encorpado e moderno.',
    url: 'https://mauralima.com.br/servicos/brow-lamination',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/brow-lamination',
  },
};

export default function BrowLaminationPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
