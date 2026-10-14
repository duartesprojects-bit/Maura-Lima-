import type { Metadata } from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import ChunkErrorHandler from '@/components/ChunkErrorHandler';
import { SALON_INFO } from '@/lib/salon-data';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mauralima.com.br'),
  title: {
    default: 'Maura Lima – Specialist Eyebrows | Salão e Cursos em Fortaleza (Aldeota e Maison Sul)',
    template: '%s | Maura Lima Fortaleza',
  },
  description:
    'Especialista em Design de Sobrancelhas, Remoção a Laser Ömer 3D, Cílios Volume Brasileiro, Cabelo, Maquiagem e Cursos Profissionais de Estética na Aldeota e Maison Sul em Fortaleza. Agende pelo WhatsApp.',
  keywords: [
    'sobrancelhas fortaleza',
    'maura lima fortaleza',
    'design de sobrancelhas aldeota',
    'remocao a laser omer 3d',
    'extensao de cilios fortaleza',
    'salao aldeota fortaleza',
    'maquiagem profissional fortaleza',
    'loiro iluminado aldeota',
    'cursos de sobrancelhas fortaleza',
    'maura lima maison sul',
  ],
  authors: [{ name: 'Maura Lima Fortaleza' }],
  creator: 'Maura Lima',
  publisher: 'Maura Lima – Specialist Eyebrows',
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: '/MauraLimaLogo.png',
    shortcut: '/MauraLimaLogo.png',
    apple: '/MauraLimaLogo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mauralima.com.br',
    siteName: 'Maura Lima – Specialist Eyebrows Fortaleza',
    title: 'Maura Lima – Specialist Eyebrows | Salão e Cursos em Fortaleza (Aldeota e Maison Sul)',
    description:
      'Referência em design de sobrancelhas, remoção a laser Ömer 3D, estética facial e cursos profissionais em Fortaleza.',
    images: [
      {
        url: '/MauraLimaLogo.png',
        width: 1200,
        height: 630,
        alt: 'Maura Lima Specialist Eyebrows Fortaleza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maura Lima – Specialist Eyebrows Fortaleza',
    description:
      'Design de sobrancelhas, remoção a laser Ömer 3D, cílios, maquiagem e cursos na Aldeota e Maison Sul.',
    images: ['/MauraLimaLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: SALON_INFO.name,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    telephone: SALON_INFO.phoneDisplay,
    url: 'https://mauralima.com.br',
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Monsenhor Catão, 1167',
      addressLocality: 'Fortaleza',
      addressRegion: 'CE',
      postalCode: '60175-000',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SALON_INFO.geo.latitude,
      longitude: SALON_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday'],
        opens: '09:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '17:10',
      },
    ],
    sameAs: [SALON_INFO.instagramUrl],
  };

  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${cormorant.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#262626] font-sans antialiased selection:bg-[#C9A24B] selection:text-black">
        <ChunkErrorHandler />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
