import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/salon-data';
import ServiceDetailTemplate from '@/components/ServiceDetailTemplate';
import InstagramLaserRelatos from '@/components/InstagramLaserRelatos';

const service = SERVICES.find((s) => s.slug === 'remocao-a-laser-omer-3d');

export const metadata: Metadata = {
  title: 'Remoção a Laser Ömer 3D em Fortaleza | Maura Lima Aldeota',
  description:
    'Tecnologia de ponta para remoção de micropigmentação antiga e tons avermelhados com as 3 ponteiras exclusivas (532nm, 1064nm e carbono). Veja relatos em vídeo do Instagram da Maura Lima na Aldeota.',
  openGraph: {
    title: 'Remoção a Laser Ömer 3D em Fortaleza | Maura Lima Aldeota',
    description:
      'Remoção de micropigmentação com laser Ömer 3D em Fortaleza. Veja vídeos de procedimentos reais e relatos de clientes da Maura Lima.',
    url: 'https://mauralima-fortaleza.com.br/servicos/remocao-a-laser-omer-3d',
    type: 'website',
  },
  alternates: {
    canonical: '/servicos/remocao-a-laser-omer-3d',
  },
};

export default function RemocaoLaserPage() {
  if (!service) return notFound();
  return (
    <ServiceDetailTemplate
      service={service}
      extraContent={<InstagramLaserRelatos />}
    />
  );
}
