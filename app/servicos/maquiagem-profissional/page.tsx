import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';

const service = SERVICES.find((s) => s.slug === 'maquiagem-profissional');

export const metadata: Metadata = {
  title: 'Maquiagem Profissional em Fortaleza | Maura Lima Aldeota',
  description:
    'Pele luminosa de alta durabilidade para casamentos, formaturas e ensaios na Aldeota em Fortaleza. Maquiagem sofisticada e resistente ao clima cearense.',
  openGraph: {
    title: 'Maquiagem Profissional em Fortaleza | Maura Lima Aldeota',
    description:
      'Pele luminosa e técnicas sofisticadas para noivas, formaturas e eventos sociais na Maura Lima Fortaleza.',
    url: 'https://mauralima-fortaleza.com.br/servicos/maquiagem-profissional',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/maquiagem-profissional',
  },
};

export default function MaquiagemProfissionalPage() {
  if (!service) return notFound();
  return <ServiceDetailTemplate service={service} />;
}
