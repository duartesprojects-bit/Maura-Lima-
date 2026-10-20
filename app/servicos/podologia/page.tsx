import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'podologia');

export const metadata: Metadata = {
  title: 'Podologia Profissional em Fortaleza | Maura Lima Aldeota',
  description:
    'Saúde e cuidados especializados para os pés, prevenção de calosidades e unhas encravadas com rigor clínico e carinho.',
  openGraph: {
    title: 'Podologia Profissional em Fortaleza | Maura Lima Aldeota',
    description:
      'Saúde e cuidados especializados para os pés, prevenção de calosidades e unhas encravadas com rigor clínico e carinho.',
    url: 'https://mauralima.com.br/servicos/podologia',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/podologia',
  },
};

export default function PodologiaPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
