import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, CheckCircle2, GraduationCap, MessageCircle, ArrowLeft, Clock, Shield, Award } from 'lucide-react';
import { COURSES, SALON_INFO } from '@/lib/salon-data';

export const metadata: Metadata = {
  title: 'Cursos Profissionais de Design de Sobrancelhas e Micropigmentação | Maura Lima Fortaleza',
  description:
    'Inscreva-se nos cursos exclusivos de formação profissional da Maura Lima na Aldeota, Fortaleza. Aprenda design de sobrancelhas, micropigmentação e laminação com certificação oficial.',
  openGraph: {
    title: 'Cursos Profissionais Maura Lima Fortaleza',
    description:
      'Formação profissional de excelência em design de sobrancelhas e micropigmentação na Aldeota.',
    url: 'https://mauralima-fortaleza.com.br/cursos',
    type: 'website',
  },
  alternates: {
    canonical: '/cursos',
  },
};

export default function CoursesPage() {
  return (
    <div className="bg-white text-[#262626] min-h-screen">
      {/* Header / Breadcrumb Back */}
      <div className="bg-[#0D0D0D] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/designdesobramcelha-1.jpg"
            alt="Cursos Maura Lima"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFBF73] hover:text-white mb-6 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Página Inicial</span>
          </Link>
          <span className="text-xs font-semibold tracking-[0.25em] text-[#DFBF73] uppercase block mb-3">
            ACADEMIA DE FORMAÇÃO MAURA LIMA
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[0.05em] uppercase mb-6 leading-tight">
            CURSOS PROFISSIONAIS NA ALDEOTA
          </h1>
          <p className="text-base sm:text-xl text-neutral-300 font-light max-w-3xl leading-relaxed">
            Capacite-se com métodos exclusivos e técnicas validadas de alto padrão. Torne-se uma referência em design de sobrancelhas e micropigmentação em Fortaleza.
          </p>
        </div>
      </div>

      {/* Main Courses Grid */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
              TURMAS ABERTAS EM FORTALEZA
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#0D0D0D] tracking-[0.05em] uppercase mb-4">
              ESCOLHA SUA ESPECIALIZAÇÃO
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A24B] mx-auto mb-6" />
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              Todos os cursos incluem material completo, certificado oficial de conclusão e suporte prático para iniciar na profissão com segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-neutral-200 hover:border-[#C9A24B] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                    {course.image && (
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#C9A24B] text-[#0D0D0D] text-[10px] font-bold uppercase tracking-widest rounded-full shadow">
                        Vagas Abertas
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                        {course.title}
                      </h3>
                      <p className="text-xs text-[#C9A24B] font-medium mt-0.5">{course.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="bg-[#F9F5EC] p-4 rounded-xl border border-[#C9A24B]/30 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-medium">Investimento</span>
                        <span className="font-heading text-2xl font-extrabold text-[#0D0D0D]">R$ {course.price}</span>
                      </div>
                      <span className="text-[11px] text-[#C9A24B] font-semibold bg-white px-3 py-1 rounded-full border border-[#C9A24B]/40 shadow-xs text-right">
                        Até 3x / 10% OFF Pix
                      </span>
                    </div>

                    {course.modules && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-3 flex items-center gap-1.5">
                          <GraduationCap className="w-4 h-4 text-[#C9A24B]" />
                          <span>Módulos do Curso:</span>
                        </h4>
                        <ul className="space-y-2 text-xs text-neutral-700">
                          {course.modules.map((mod, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                              <span>{mod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-3">
                        Informações Importantes:
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-600">
                        {course.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={`https://wa.me/5585989578885?text=${encodeURIComponent(course.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0D0D0D] hover:bg-[#C9A24B] text-white hover:text-[#0D0D0D] font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md group-hover:bg-[#C9A24B] group-hover:text-[#0D0D0D]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-[#C9A24B] group-hover:text-[#0D0D0D]" />
                    <span>INSCREVA-SE VIA WHATSAPP</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Maura Lima Academy */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] text-[#C9A24B] uppercase block mb-3">
                METODOLOGIA DE EXCELÊNCIA
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-[#0D0D0D] uppercase mb-6 tracking-wide">
                POR QUE ESCOLHER OS CURSOS MAURA LIMA?
              </h2>
              <div className="w-16 h-[2px] bg-[#C9A24B] mb-6" />
              <p className="text-neutral-600 font-light leading-relaxed mb-6">
                Nossa academia em Fortaleza é reconhecida pelo rigor técnico, atendimento humanizado e foco em resultados práticos desde o primeiro dia de aula. Você aprende a teoria e treina em modelos reais com supervisão direta.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAFAFA] rounded-xl border border-neutral-200">
                  <Award className="w-6 h-6 text-[#C9A24B] mb-2" />
                  <h4 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] mb-1">Certificação Oficial</h4>
                  <p className="text-xs text-neutral-600 font-light">Certificado válido em todo território nacional.</p>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl border border-neutral-200">
                  <Shield className="w-6 h-6 text-[#C9A24B] mb-2" />
                  <h4 className="font-heading text-sm font-bold uppercase text-[#0D0D0D] mb-1">Material Incluso</h4>
                  <p className="text-xs text-neutral-600 font-light">Tudo o que você precisa para iniciar os treinos.</p>
                </div>
              </div>
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200">
              <Image
                src="/images/fio-a-fio.jpg"
                alt="Aluna treinando técnica na Academia Maura Lima"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
