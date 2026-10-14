export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  titleH1: string;
  shortSummary: string;
  heroImage: string;
  altImage: string;
  indicatedFor: string[];
  stepByStep: { step: number; title: string; description: string }[];
  duration: string;
  expectedResults: string;
  preCare: string[];
  postCare: string[];
  contraindications: string[];
  whenToSeekEvaluation: string;
  faqs: { question: string; answer: string }[];
  whatsappMessage: string;
  technicalNote?: string;
}

export const SALON_INFO = {
  name: "Maura Lima – Specialist Eyebrows",
  tagline: "Specialist Eyebrows & Estética Facial de Alto Padrão",
  logo: "/images/logo (1).png",
  city: "Fortaleza",
  neighborhood: "Aldeota",
  state: "CE",
  address: "R. Monsenhor Catão, 1167 - Aldeota, Fortaleza - CE, 60175-000",
  landline: "(85) 3224-7040",
  phoneDisplay: "(85) 98957-8885 | (85) 3224-7040",
  whatsappNumber: "5585989578885",
  whatsappUrl: "https://wa.me/5585989578885",
  instagramUrl: "https://instagram.com/mauralimasobrancelhasoficial",
  instagramHandle: "@mauralimasobrancelhasoficial",
  units: [
    {
      name: "Maura Lima Aldeota",
      address: "R. Monsenhor Catão, 1167 - Aldeota, Fortaleza - CE",
      phone: "(85) 3224-7040",
      whatsapp: "(85) 98957-8885",
      whatsappUrl: "https://wa.me/5585989578885?text=Olá!%20Gostaria%20de%20agendar%20na%20unidade%20Aldeota.",
      hours: "Seg a Sex: 09:00 às 18:00 | Sáb: 09:00 às 17:10",
    },
    {
      name: "Maura Lima Maison Sul",
      address: "Av. Edilson Brasil Soares, 1717 - Fortaleza - CE",
      whatsapp: "(85) 98570-1647",
      whatsappUrl: "https://wa.me/5585985701647?text=Olá!%20Gostaria%20de%20agendar%20na%20unidade%20Maison%20Sul.",
      hours: "Ter a Sex: 09:00 às 18:00 | Sáb: 09:00 às 17:00",
    },
  ],
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=R.+Monsenhor+Cat%C3%A3o,+1167+-+Aldeota,+Fortaleza+-+CE,+60175-000&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=R.+Monsenhor+Cat%C3%A3o,+1167+-+Aldeota,+Fortaleza+-+CE,+60175-000",
  hours: [
    { day: "Segunda-feira", time: "09:00 às 17:00" },
    { day: "Terça a Sexta-feira", time: "09:00 às 18:00" },
    { day: "Sábado", time: "09:00 às 17:10" },
    { day: "Domingo", time: "Fechado" },
  ],
  hoursStructured: {
    monday: "Mo 09:00-17:00",
    tuesdayToFriday: "Tu-Fr 09:00-18:00",
    saturday: "Sa 09:00-17:10",
  },
  geo: {
    latitude: -3.73715,
    longitude: -38.49842,
  },
};

export interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  features: string[];
  modules?: string[];
  paymentInfo: string;
  whatsappMessage: string;
  image?: string;
}

export const COURSES: CourseItem[] = [
  {
    id: "curso-completo-designer",
    title: "Curso Completo Designer de Sobrancelhas",
    subtitle: "Formação Completa Maura Lima",
    price: "3.500,00",
    duration: "Manhã / Tarde",
    features: [
      "Vagas abertas",
      "Material incluso",
      "Certificado de conclusão",
      "Turnos: Manhã / Tarde",
    ],
    modules: [
      "Design de sobrancelhas",
      "Método de linha",
      "Micropigmentação",
      "Advance Lamination",
    ],
    paymentInfo: "Investimento: R$ 3.500,00 | 10% OFF em espécie ou pix | Parcelamento em até 3x",
    whatsappMessage: "Olá! Gostaria de saber mais informações sobre o Curso Completo Designer de Sobrancelhas (R$ 3.500,00).",
    image: "/images/designdesobramcelha-1.jpg",
  },
  {
    id: "curso-micropigmentacao",
    title: "Curso Maura Lima Micropigmentação",
    subtitle: "Especialização Avançada",
    price: "2.500,00",
    duration: "5 dias de duração",
    features: [
      "Vagas abertas",
      "Material incluso",
      "5 dias de duração",
      "Turnos: Manhã / Tarde",
      "Certificado de conclusão",
    ],
    paymentInfo: "Investimento: R$ 2.500,00 | 10% OFF em espécie ou pix | Parcelamento em até 3x",
    whatsappMessage: "Olá! Gostaria de saber mais informações sobre o Curso Maura Lima Micropigmentação (R$ 2.500,00).",
    image: "/images/fio-a-fio.jpg",
  },
  {
    id: "curso-design-sobrancelhas",
    title: "Curso Maura Lima Design de Sobrancelhas",
    subtitle: "Fundamentos e Técnicas Exclusivas",
    price: "1.500,00",
    duration: "5 dias de duração",
    features: [
      "Vagas abertas",
      "Material incluso",
      "5 dias de duração",
      "Turnos: Manhã / Tarde",
      "Certificado de conclusão",
    ],
    paymentInfo: "Investimento: R$ 1.500,00 | 10% OFF em espécie ou pix | Parcelamento em até 3x",
    whatsappMessage: "Olá! Gostaria de saber mais informações sobre o Curso Maura Lima Design de Sobrancelhas (R$ 1.500,00).",
    image: "/images/designdesobramcelha-1.jpg",
  },
];


export const SERVICES: ServiceItem[] = [
  {
    id: "remocao-a-laser-omer-3d",
    slug: "remocao-a-laser-omer-3d",
    name: "Remoção a Laser Ömer 3D",
    titleH1: "Remoção a Laser Ömer 3D em Fortaleza",
    shortSummary:
      "A tecnologia do Laser Ömer 3D conta com 3 ponteiras exclusivas: a 532nm (para pigmentos avermelhados e alaranjados), a 1064nm (para pigmentos pretos e escuros) e a ponteira de carbono (para pigmentos profundos e Black Peeling). Essa precisão seletiva remove micropigmentações antigas sem danificar a raiz dos pelos nem a pele.",
    heroImage:
      "/images/remocao-laser.jpg",
    altImage:
      "Procedimento de remoção a laser de micropigmentação na Maura Lima Aldeota Fortaleza",
    indicatedFor: [
      "Pessoas com micropigmentação antiga ou desbotada em tons indesejados (acinzentado, avermelhado ou alaranjado).",
      "Quem deseja clarear o pigmento para refazer um novo design de sobrancelhas harmônico e natural.",
      "Correção de assimetrias graves ou designs artificiais feitos anteriormente em outros estabelecimentos.",
      "Quem busca um procedimento seguro com tecnologia de ponta que não danifique a raiz dos fios naturais.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Avaliação Personalizada e Teste de Cor",
        description:
          "Análise detalhada da profundidade, do tipo de pigmento residual e fototipo da pele na unidade Aldeota.",
      },
      {
        step: 2,
        title: "Higienização e Proteção Ocular",
        description:
          "Aplicação de protetor ocular especial e antisséptico suave, garantindo conforto e segurança médica.",
      },
      {
        step: 3,
        title: "Aplicação dos Disparos do Laser Ömer 3D",
        description:
          "O feixe de luz ultra-rápido fragmenta as moléculas de tinta em micropartículas que o sistema linfático elimina de forma gradual.",
      },
      {
        step: 4,
        title: "Calmante Cutâneo e Orientações Pós-Sessão",
        description:
          "Aplicação de loção regeneradora calmante e entrega do guia completo de cuidados para os próximos dias.",
      },
    ],
    duration: "Aproximadamente 40 a 60 minutos por sessão (incluindo avaliação e assepsia).",
    expectedResults:
      "Clareamento progressivo visível já a partir das primeiras semanas após a sessão. Não fazemos promessas de remoção total em sessão única, pois o número exato de sessões varia conforme a tinta e profundidade da micropigmentação antiga.",
    preCare: [
      "Evitar exposição solar intensa e bronzeamento na área das sobrancelhas nos 15 dias anteriores.",
      "Suspender o uso de ácidos e peelings agressivos na região por 7 a 10 dias antes.",
      "Comparecer com a pele limpa, sem protetor solar com cor ou maquiagem pesada nas sobrancelhas.",
    ],
    postCare: [
      "Não arrancar eventuais casquinhas que possam se formar no processo natural de cicatrização.",
      "Evitar banhos muito quentes, saunas, piscina e praia nos primeiros 5 a 7 dias.",
      "Aplicar pomada regeneradora cicatrizante recomendada pela especialista.",
      "Usar filtro solar rigoroso após o fechamento da pele para prevenir manchas.",
    ],
    contraindications: [
      "Gestantes e lactantes sem autorização médica expressa.",
      "Lesões ativas, infecções cutâneas ou herpes ativa na região a ser tratada.",
      "Uso oral recente de isotretinoína (Roacutan) nos últimos 6 meses.",
      "Histórico de queloides severos não controlados na área facial.",
    ],
    whenToSeekEvaluation:
      "Agende uma avaliação inicial caso note que sua micropigmentação antiga mudou de tom, ficou azulada, avermelhada ou se você deseja restaurar o formato original dos seus pelos naturais na Aldeota.",
    faqs: [
      {
        question: "A remoção a laser Ömer 3D queima ou faz cair os pelos da sobrancelha?",
        answer:
          "Não. O laser Ömer 3D opera com comprimento de onda seletivo para a tinta. Os pelos podem ficar temporariamente esbranquiçados pelo calor pontual da sessão, mas continuam saudáveis e voltam à sua coloração natural.",
      },
      {
        question: "Quantas sessões são necessárias para remover totalmente a micropigmentação?",
        answer:
          "O número exato de sessões depende da quantidade de pigmento acumulado, tipo de tinta utilizada e tempo da aplicação anterior. Em média varia entre 2 a 6 sessões, com intervalo mínimo de 30 a 45 dias entre elas.",
      },
      {
        question: "O procedimento de remoção com laser dói?",
        answer:
          "A sensação é comparada a leves estalinhos ou pinçamentos rápidos na pele. O laser Ömer 3D conta com disparos ultrarrápidos que minimizam o desconforto, tornando o processo rápido e suportável.",
      },
      {
        question: "Depois de remover a micropigmentação, posso fazer um novo design na Maura Lima?",
        answer:
          "Sim! Esse é um dos principais objetivos de nossas clientes em Fortaleza. Após a completa regeneração da pele e clareamento satisfatório, nossa equipe elabora um novo design respeitando a anatomia natural do seu rosto.",
      },
      {
        question: "Tirando dúvidas sobre pigmentação: sobrancelhas vermelhas e laranjas têm solução?",
        answer:
          "Sim, têm solução definitiva! O grande diferencial do Laser Ömer 3D na Maura Lima Aldeota é a ponteira de 532nm, desenvolvida especificamente para quebrar pigmentos quentes (avermelhados e alaranjados) que outros lasers não conseguiam eliminar, sem agredir ou queimar os fios naturais.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma avaliação para Remoção a Laser Ömer 3D na Maura Lima Aldeota.",
  },
  {
    id: "design-de-sobrancelhas",
    slug: "design-de-sobrancelhas",
    name: "Design de Sobrancelhas",
    titleH1: "Design de Sobrancelhas em Fortaleza",
    shortSummary:
      "Mapeamento facial minucioso e exclusivo para realçar a simetria e a curvatura perfeita para o seu formato de rosto. Nosso método valoriza os fios naturais, corrigindo imperfeições sem afinar e sem perder a identidade e a elegância da sua expressão.",
    heroImage:
      "/images/designdesobramcelha-1.jpg",
    altImage:
      "Design de Sobrancelhas profissional com simetria e precisão na Maura Lima Fortaleza",
    indicatedFor: [
      "Mulheres e homens que buscam um olhar marcante, harmonioso e natural.",
      "Quem possui sobrancelhas desalinhadas, com excesso de pelos ou falhas decorrentes de designs anteriores inadequados.",
      "Clientes que prezam por manutenção preventiva e crescimento saudável dos fios.",
      "Quem busca preparar a expressão facial para momentos especiais como casamentos, formaturas e ensaios fotográficos.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Visagismo e Mapeamento Facial Individual",
        description:
          "Medição dos pontos cardeais da face (início, ponto alto e cauda) respeitando a proporção áurea e formato dos olhos.",
      },
      {
        step: 2,
        title: "Aprovação do Desenho com o Espelho",
        description:
          "Apresentamos a proposta visual para você validar antes de iniciarmos qualquer remoção de fios.",
      },
      {
        step: 3,
        title: "Epilação de Precisão e Alinhamento",
        description:
          "Remoção cirúrgica com pinças esterilizadas e navalha suave, mantendo a integridade da pele sensível.",
      },
      {
        step: 4,
        title: "Finalização Nutritiva e Escovação",
        description:
          "Aplicação de sérum fortalecedor de pelos e fixador orgânico com acabamento limpo e luminoso.",
      },
    ],
    duration: "Cerca de 35 a 50 minutos.",
    expectedResults:
      "Olhar revitalizado, com efeito lifting imediato, contornos limpos e desenho que valoriza os pontos fortes do seu rosto com naturalidade.",
    preCare: [
      "Evite retirar pelos por conta própria com pinça por pelo menos 15 a 20 dias antes do atendimento.",
      "Comunique à designer caso faça uso de ácidos retinoides ou tenha feito peeling recente.",
    ],
    postCare: [
      "Evite esfregar a região nas primeiras horas após o procedimento.",
      "Não passe maquiagem ou corretivo diretamente sobre os poros recém-epilados por 4 a 6 horas.",
      "Utilize sérum nutritivo para sobrancelhas para manter a hidratação e o crescimento dos pelos.",
    ],
    contraindications: [
      "Lesões abertas, dermatites agudas ou queimaduras solares na região das sobrancelhas.",
      "Alergia comprovada a produtos de acabamento.",
    ],
    whenToSeekEvaluation:
      "Sempre que você sentir que suas sobrancelhas perderam o formato, estão desiguais ou quando quiser iniciar um protocolo de recuperação de fios naturais.",
    faqs: [
      {
        question: "De quanto em quanto tempo devo fazer a manutenção do design?",
        answer:
          "O intervalo ideal para a maioria das clientes varia de 20 a 30 dias, dependendo do ciclo de crescimento biológico dos seus fios.",
      },
      {
        question: "O design da Maura Lima afina as sobrancelhas?",
        answer:
          "Absolutamente não! O princípio da Maura Lima é a preservação e valorização da densidade natural. Removemos apenas o que está fora do desenho anatômico ideal.",
      },
      {
        question: "Vocês fazem aplicação de hena ou tintura?",
        answer:
          "Sim, oferecemos opções de tonalização suave e personalizada com hena pura ou coloração específica para fios, sempre respeitando o tom da sua pele e cabelo.",
      },
      {
        question: "Tenho falhas causadas por anos de pinça errada. É possível recuperar?",
        answer:
          "Sim! Desenvolvemos um plano de recuperação de sobrancelhas orientando a nutrição dos folículos e limpando apenas o perímetro necessário a cada visita.",
      },
      {
        question: "Preciso agendar com antecedência na unidade Aldeota?",
        answer:
          "Recomendamos fortemente o agendamento prévio via WhatsApp para garantir o seu horário de preferência, especialmente aos finais de semana.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar meu Design de Sobrancelhas na Maura Lima em Fortaleza.",
  },
  {
    id: "micropigmentacao-fio-a-fio",
    slug: "micropigmentacao-fio-a-fio",
    name: "Micropigmentação Fio a Fio",
    titleH1: "MICROPIGMENTAÇÃO DE SOBRANCELHAS FIO A FIO EM FORTALEZA",
    shortSummary:
      "A micropigmentação fio a fio é um procedimento semipermanente que desenha fios finos de pigmento na região das sobrancelhas, imitando a direção e o aspecto dos pelos naturais. O resultado é uma sobrancelha preenchida, simétrica e com aparência natural, que dura em média de 1 a 2 anos.",
    heroImage:
      "/images/fio-a-fio.jpg",
    altImage:
      "Micropigmentação de Sobrancelhas Fio a Fio na Maura Lima Aldeota Fortaleza",
    indicatedFor: [
      "Quem tem falhas, assimetrias ou sobrancelhas muito ralas.",
      "Quem perdeu pelos por fatores como idade, hábitos ou depilação excessiva.",
      "Quem deseja acordar com as sobrancelhas alinhadas, sem precisar preencher com lápis todos os dias.",
      "Quem busca um resultado natural, sem aspecto de “sobrancelha pintada”.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Avaliação e conversa",
        description: "Análise do rosto, do formato das sobrancelhas, do tom de pele e das suas expectativas.",
      },
      {
        step: 2,
        title: "Mapeamento facial",
        description: "Medição e desenho da sobrancelha, respeitando a simetria e o seu formato de rosto. Você aprova o desenho antes de começar.",
      },
      {
        step: 3,
        title: "Escolha do pigmento",
        description: "Definição da cor ideal para o seu tom de pele e de cabelo.",
      },
      {
        step: 4,
        title: "Anestesia tópica",
        description: "Aplicação de anestésico para reduzir o desconforto durante o procedimento.",
      },
      {
        step: 5,
        title: "Pigmentação",
        description: "Os fios são desenhados com técnica de alta precisão imitando o crescimento natural dos pelos.",
      },
    ],
    duration: "Aproximadamente 1h30 a 2 horas.",
    expectedResults:
      "Sobrancelhas preenchidas, simétricas e com efeito natural que dura em média de 1 a 2 anos. Conheça também nossa página de Remoção a Laser Ömer 3D caso precise corrigir pigmentos antigos indesejados.",
    preCare: [
      "Evitar exposição solar intensa nos 7 dias anteriores.",
      "Suspender ácidos na região por 72 horas antes.",
      "Evitar consumo de álcool 24 horas antes do procedimento.",
    ],
    postCare: [
      "Manter a região limpa e aplicar a pomada regeneradora recomendada.",
      "Não arrancar eventuais casquinhas durante o processo de cicatrização.",
      "Evitar piscina, mar e sol direto nos primeiros 10 a 14 dias.",
    ],
    contraindications: [
      "Gestantes e lactantes.",
      "Pessoas com tendência a queloides.",
      "Infecções ou lesões ativas na região das sobrancelhas.",
    ],
    whenToSeekEvaluation: "Agende sua avaliação para conquistar sobrancelhas perfeitas e naturais na Aldeota, Fortaleza.",
    faqs: [
      {
        question: "A técnica Fio a Fio parece artificial?",
        answer: "Não! O traço ultrafino imita o sentido exato do pelo natural, proporcionando um resultado incrivelmente leve e realista.",
      },
      {
        question: "Quanto tempo dura o procedimento?",
        answer: "O resultado costuma durar em média de 1 a 2 anos, dependendo do tipo de pele e dos cuidados pós-procedimento.",
      },
      {
        question: "Dói para fazer a micropigmentação fio a fio?",
        answer: "Utilizamos anestésico tópico de alta eficácia, tornando o procedimento muito confortável, com sensação mínima de leve pinçamento.",
      },
      {
        question: "Posso fazer em pele oleosa?",
        answer: "A técnica costuma ter melhor resultado em peles normais e secas. Em peles muito oleosas, o desenho pode ficar menos definido com o tempo, sendo recomendada avaliação prévia na Maura Lima.",
      },
      {
        question: "Qual a diferença entre micropigmentação e maquiagem definitiva?",
        answer: "A micropigmentação é semipermanente, utilizando pigmentos biocompatíveis depositados nas camadas superficiais da pele, permitindo atualização do design ao longo do tempo.",
      },
      {
        question: "Preciso fazer retoque?",
        answer: "Sim, o retoque geralmente é realizado entre 30 a 45 dias após a primeira sessão para fixação e aperfeiçoamento de detalhes.",
      },
      {
        question: "Como é a cicatrização nos primeiros dias?",
        answer: "Nos primeiros dias a cor pode parecer um pouco mais intensa, clareando e suavizando gradualmente até atingir o tom definitivo após a cicatrização completa.",
      },
    ],
    whatsappMessage: "Olá! Gostaria de agendar Micropigmentação Fio a Fio na Maura Lima Aldeota.",
  },
  {
    id: "extensao-de-cilios-volume-brasileiro",
    slug: "extensao-de-cilios-volume-brasileiro",
    name: "Extensão de Cílios (Volume Brasileiro)",
    titleH1: "Extensão de Cílios Volume Brasileiro em Fortaleza",
    shortSummary:
      "Fios tecnológicos ultrafinos em formato Y que conferem densidade marcante, leveza e durabilidade sem pesar. Proporciona o equilíbrio perfeito entre o efeito marcante do volume e a delicadeza de cílios naturalmente curvados e volumosos na Aldeota.",
    heroImage:
      "/images/cilios.jpg",
    altImage:
      "Extensão de Cílios Volume Brasileiro com fios Y na Maura Lima Fortaleza",
    indicatedFor: [
      "Quem deseja acordar pronta todos os dias com olhar aberto e radiante sem depender de máscara de rímel.",
      "Clientes que buscam um preenchimento com efeito delineado, sem aspecto artificial ou pesado.",
      "Pessoas com cílios naturais retos, finos ou com pequenos espaços que precisam de volume estruturado.",
      "Noivas, formandas e viajantes que precisam de praticidade e beleza duradoura.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Isolamento e Higienização Profunda",
        description:
          "Higienização com xampu oftalmológico neutro e aplicação de pads hidratantes para proteger as pálpebras inferiores.",
      },
      {
        step: 2,
        title: "Mapeamento Lash Mapping Personalizado",
        description:
          "Escolha da curvatura, espessura e comprimentos adequados ao formato dos olhos (boneca, gatinho ou natural).",
      },
      {
        step: 3,
        title: "Acoplagem Fio a Fio com Tecnologia Y",
        description:
          "Cada leque em formato Y é acoplado com precisão milimétrica a uma distância segura da raiz, sem contato com a pele.",
      },
      {
        step: 4,
        title: "Secagem Nano Mist e Penteado",
        description:
          "Nebulização que sela a cianocrilato e elimina vapores, conferindo conforto imediato e conferência da simetria.",
      },
    ],
    duration: "Cerca de 1h30 a 2h para a aplicação inicial completa.",
    expectedResults:
      "Cílios densos, pretos, com curvatura impecável e textura super macia, preservando a saúde do fio natural.",
    preCare: [
      "Comparecer sem rímel, maquiagem à prova d'água ou oleosidade na região dos olhos.",
      "Evitar o uso de curvex nas 48h anteriores à aplicação.",
      "Retirar lentes de contato antes do início do procedimento.",
    ],
    postCare: [
      "Não molhar os olhos nas primeiras 24 horas para cura completa do adesivo.",
      "Evitar produtos oleosos, demaquilantes bifásicos e cremes na linha d'água.",
      "Higienizar diariamente com espuma específica e pentear com a escovinha fornecida.",
      "Não puxar os fios e realizar manutenções a cada 15 a 21 dias.",
    ],
    contraindications: [
      "Blefarite, conjuntivite ou irritações oculares ativas.",
      "Tricotilomania ou alopecia severa na região dos cílios.",
      "Sensibilidade ou alergia conhecida ao cianoacrilato.",
    ],
    whenToSeekEvaluation:
      "Agende uma avaliação se você deseja saber qual o mapeamento ideal para valorizar seu olhar ou se teve experiências anteriores incômodas com técnicas pesadas.",
    faqs: [
      {
        question: "Qual a diferença entre o Volume Brasileiro e o Volume Russo?",
        answer:
          "No Volume Brasileiro são usados fios tecnológicos pré-moldados em formato de Y (fio único com bifurcação), o que proporciona densidade com extrema leveza e acabamento mais entrelaçado e natural que os fans manuais densos do russo.",
      },
      {
        question: "A extensão faz os cílios naturais caírem?",
        answer:
          "Não, desde que aplicada respeitando a distância correta da raiz e o peso que o fio natural suporta. Nossos profissionais em Fortaleza são altamente capacitados para preservar a saúde do seu ciclo folicular.",
      },
      {
        question: "Posso usar rímel com a extensão de cílios?",
        answer:
          "Não é recomendado e nem necessário. O rímel acumula resíduos na base das extensões e dissolve a cola, encurtando a durabilidade das extensões.",
      },
      {
        question: "Quanto tempo dura a extensão de cílios?",
        answer:
          "Com os cuidados adequados, a extensão dura de 3 a 5 semanas, acompanhando a renovação natural dos pelos. Para manter o olhar sempre preenchido, recomendamos manutenção a cada 15 a 21 dias.",
      },
      {
        question: "Posso praticar esportes e ir à praia em Fortaleza?",
        answer:
          "Sim! Após o período inicial de secagem (24h), você pode viver sua rotina normal, academia e praia, apenas enxaguando os olhos com água doce após o mar ou piscina.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar Extensão de Cílios Volume Brasileiro na Maura Lima Aldeota.",
  },
  {
    id: "cabelo-e-coloracao",
    slug: "cabelo-e-coloracao",
    name: "Cabelo & Coloração",
    titleH1: "Cabelo e Coloração em Fortaleza",
    shortSummary:
      "Loiros luminosos, morena iluminada com transição perfeita, tratamentos reconstrutores profundos e finalizações com escova de brilho espelhado. Atendimento exclusivo no coração da Aldeota focado na integridade e na saúde da fibra capilar.",
    heroImage:
      "/images/cabelo.jpg",
    altImage:
      "Tratamentos e coloração capilar profissional na Maura Lima Aldeota Fortaleza",
    indicatedFor: [
      "Mulheres que buscam mechas sofisticadas (loiro pérola, dourado, canela, avelã) sem quebrar o fio.",
      "Cabelos danificados por químicas anteriores que necessitam de cronograma e reconstrução de alta performance.",
      "Quem precisa de corte, escova modelada e finalização luxuosa para ocasiões especiais ou dia a dia.",
      "Quem busca cobertura impecável de fios brancos com brilho tridimensional.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Diagnóstico Capilar e Teste de Mecha",
        description:
          "Avaliação de resistência e elasticidade do fio antes de qualquer procedimento químico.",
      },
      {
        step: 2,
        title: "Aplicação Técnica com Proteção Plex",
        description:
          "Uso de descolorantes e tinturas de tecnologia internacional enriquecidos com protetores estruturais.",
      },
      {
        step: 3,
        title: "Tonalização e Tratamento Reconstrutor Imediato",
        description:
          "Neutralização precisa da cor desejada seguida de infusão lipídica e proteica no lavatório.",
      },
      {
        step: 4,
        title: "Corte / Escova com Brilho Espelhado",
        description:
          "Finalização com protetor térmico nobre, modelagem com movimento e spray de brilho acetinado.",
      },
    ],
    duration: "De 1h30 (escovas e tratamentos) até 4h a 5h (mechas completas e transformações).",
    expectedResults:
      "Fios luminosos, cor vibrante, textura sedosa e brilho espelhado, com transições suaves que não deixam marcas indesejadas.",
    preCare: [
      "Evitar lavar os cabelos com água excessivamente quente no dia do procedimento.",
      "Informar ao cabeleireiro todo o histórico de procedimentos químicos anteriores (progressivas, hennê, relaxamentos).",
    ],
    postCare: [
      "Utilizar linha de xampu e máscara específica para cabelos quimicamente tratados em casa.",
      "Evitar cloro de piscina sem proteção nas primeiras duas semanas pós-mechas.",
      "Sempre utilizar protetor térmico antes de secador ou chapinha.",
    ],
    contraindications: [
      "Fios com corte químico recente ou sem resistência no teste de mecha prévio.",
      "Feridas ou descamações graves no couro cabeludo.",
    ],
    whenToSeekEvaluation:
      "Agende um diagnóstico capilar gratuito se deseja renovar a cor, clarear os fios ou recuperar a maciez perdida.",
    faqs: [
      {
        question: "É obrigatório fazer o teste de mecha antes da descoloração?",
        answer:
          "Sim! Para a sua total segurança, realizamos teste de mecha antes de procedimentos químicos mais intensos para avaliar a compatibilidade e a resistência dos fios.",
      },
      {
        question: "Quais marcas de produtos e tratamentos são utilizadas no salão?",
        answer:
          "Trabalhamos exclusivamente com linhas profissionais de alto padrão e tecnologia comprovada para garantir brilho e saúde capilar duradoura.",
      },
      {
        question: "Vocês atendem noivas e madrinhas para penteados?",
        answer:
          "Sim! Dispomos de pacotes completos para noivas, formandas e convidadas na nossa unidade de Fortaleza, integrando cabelo e maquiagem.",
      },
      {
        question: "Como funciona a morena iluminada?",
        answer:
          "É uma técnica que preserva a raiz natural e cria pontos de luz suaves em tons como mel, caramelo e chocolate, proporcionando luminosidade sem exigir retoques frequentes.",
      },
      {
        question: "Qual o valor médio de uma sessão de mechas?",
        answer:
          "O investimento varia conforme o comprimento, volume e histórico do cabelo. Disponibilizamos orçamentos personalizados via WhatsApp ou presencialmente na Aldeota.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar uma consulta capilar / coloração na Maura Lima Fortaleza.",
  },
  {
    id: "maquiagem-profissional",
    slug: "maquiagem-profissional",
    name: "Maquiagem Profissional",
    titleH1: "Maquiagem Profissional em Fortaleza",
    shortSummary:
      "Pele luminosa de alta durabilidade, acabamento acetinado e técnicas sofisticadas adaptadas ao clima tropical de Fortaleza. Ideal para eventos, casamentos, formaturas, ensaios fotográficos e comemorações especiais na Aldeota.",
    heroImage:
      "/images/maquiagem.jpg",
    altImage:
      "Maquiagem profissional com pele radiante e durabilidade na Maura Lima Fortaleza",
    indicatedFor: [
      "Noivas, madrinhas, formandas e aniversariantes que exigem maquiagem à prova de lágrimas e calor.",
      "Ensaios fotográficos e gravações profissionais em estúdio ou ao ar livre.",
      "Quem busca valorizar a beleza natural com elegância, sem aspecto de pele pesada ou 'reboco'.",
      "Eventos sociais diurnos ou noturnos em Fortaleza.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Skincare Preparatório de Alta Fixação",
        description:
          "Limpeza, tonificação e hidratação direcionada ao tipo de pele, blindando contra o suor e umidade.",
      },
      {
        step: 2,
        title: "Uniformização e Correção Cromática",
        description:
          "Camadas finas de base e corretivo com cobertura construível, mantendo o viço natural.",
      },
      {
        step: 3,
        title: "Olhar Marcante e Cílios Postiços",
        description:
          "Esfumado elegante, delineado preciso e aplicação de tufos ou cílios inteiriços de fios naturais.",
      },
      {
        step: 4,
        title: "Selagem e Bruma Fixadora",
        description:
          "Pó translúcido ultrafino nas áreas estratégicas e spray fixador para resistência de até 16 horas.",
      },
    ],
    duration: "Aproximadamente 60 a 80 minutos por atendimento.",
    expectedResults:
      "Pele aveludada, viçosa, resistente a abraços, calor e lágrimas, perfeita tanto ao vivo quanto nas fotos e vídeos.",
    preCare: [
      "Manter a pele bem hidratada nos dias que antecedem a produção.",
      "Comparecer com o rosto limpo e sem maquiagem residual.",
      "Se for usar vestido com decote ou de noiva, use roupa com botões ou zíper frontal para não estragar a make ao se trocar.",
    ],
    postCare: [
      "Remover completamente com óleo demaquilante (cleansing oil) ou água micelar bifásica ao final do evento.",
      "Lavar com sabonete facial apropriado e hidratar a pele após a higienização.",
    ],
    contraindications: [
      "Crises de alergia cutânea grave ou conjuntivite ativa.",
      "Queimaduras solares recentes ou descamação intensa no rosto.",
    ],
    whenToSeekEvaluation:
      "Recomendamos reservar seu horário assim que souber a data do evento para garantir a disponibilidade da equipe na Aldeota.",
    faqs: [
      {
        question: "A maquiagem resiste ao calor e à umidade de Fortaleza?",
        answer:
          "Sim! Nossos produtos e técnicas são especificamente selecionados para resistir ao clima cearense, com produtos blindados à prova d'água e de atrito.",
      },
      {
        question: "Os cílios postiços já estão inclusos no valor?",
        answer:
          "Sim, a aplicação de cílios postiços de acabamento natural está inclusa em todas as nossas produções sociais.",
      },
      {
        question: "Vocês realizam teste prévio para noivas?",
        answer:
          "Com certeza! O teste de maquiagem e penteado para noivas é realizado com antecedência para definir com calma cada detalhe do grande dia.",
      },
      {
        question: "Posso levar fotos de referência do estilo que eu quero?",
        answer:
          "Com certeza! Incentivamos que traga suas referências de estilo para alinharmos as cores e o acabamento que mais valorizam o seu tom de pele e formato de olhos.",
      },
      {
        question: "O atendimento pode ser feito no local do evento (home care / hotel)?",
        answer:
          "Disponibilizamos equipe externa para grupos e noivas sob consulta prévia de disponibilidade e deslocamento.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de consultar horários para Maquiagem Profissional na Maura Lima Aldeota.",
  },
  {
    id: "unhas-manicure-pedicure",
    slug: "unhas",
    name: "Manicure & Pedicure",
    titleH1: "MANICURE E PEDICURE DE ALTO PADRÃO EM FORTALEZA",
    shortSummary:
      "Cuidados completos para mãos e pés com cutilagem milimétrica, esmaltação duradoura, blindagem e tratamentos de fortalecimento na Aldeota.",
    heroImage: "/unhas.jpg",
    altImage: "Manicure e pedicure de alto padrão com esmalte nude na Maura Lima Aldeota",
    indicatedFor: [
      "Quem busca unhas impecáveis, limpas e com acabamento elegante para o dia a dia ou ocasiões especiais.",
      "Pessoas que desejam unhas fracas ou quebradiças recuperadas através de técnicas de blindagem e fortalecimento.",
      "Quem preza por rigor absoluto em esterilização e biossegurança em ambiente climatizado na Aldeota.",
      "Amantes de esmaltação em gel e nail art minimalista de alto padrão.",
    ],
    stepByStep: [
      {
        step: 1,
        title: "Higienização e Assepsia Cuidadosa",
        description:
          "Preparação relaxante das mãos e pés com produtos higienizantes e emolientes suaves.",
      },
      {
        step: 2,
        title: "Cutilagem Milimétrica e Corte Técnico",
        description:
          "Cuidado delicado que remove o excesso de cutículas preservando a proteção natural da unha.",
      },
      {
        step: 3,
        title: "Nivelamento e Preparação da Lâmina",
        description:
          "Lixamento personalizado para o formato desejado (amendoadas, quadradas, ovaladas) com polimento.",
      },
      {
        step: 4,
        title: "Esmaltação de Alta Durabilidade ou Blindagem",
        description:
          "Aplicação de bases fortalecedoras, esmaltes de marcas nacionais e importadas ou esmaltação em gel com secagem UV.",
      },
    ],
    duration: "Aproximadamente 45 a 90 minutos (conforme o procedimento escolhido).",
    expectedResults:
      "Unhas fortes, perfeitamente esmaltadas, cutículas alinhadas e toque sedoso nas mãos e pés por vários dias.",
    preCare: [
      "Avisar caso possua alguma sensibilidade nas cutículas ou lâmina ungueal.",
      "Traçar preferência de cores ou trazer referências de nail art se desejar.",
    ],
    postCare: [
      "Evitar contato prolongado com produtos químicos agressivos sem luvas nos primeiros dias.",
      "Hidratar cutículas diariamente com óleo nutritivo ou creme específico.",
    ],
    contraindications: [
      "Micoses ativas ou infecções não tratadas nas unhas (requer avaliação prévia).",
    ],
    whenToSeekEvaluation:
      "Agende seu horário quinzenal ou semanal para manter as mãos e os pés sempre impecáveis na Aldeota.",
    faqs: [
      {
        question: "A esterilização dos materiais de manicure é rigorosa?",
        answer:
          "Sim! Todos os alicates e espátulas passam por autoclave hospitalar com controle rigoroso de biossegurança e pacotes individuais abertos na sua frente.",
      },
      {
        question: "Quanto tempo dura a esmaltação em gel nas unhas?",
        answer:
          "A esmaltação em gel pode durar de 15 a 21 dias intacta, sem lascar e com brilho intenso, ideal para viagens e rotina intensa.",
      },
      {
        question: "Posso levar meu próprio esmalte se preferir?",
        answer:
          "Com certeza! Embora tenhamos uma vasta paleta de marcas nacionais e importadas de altíssima qualidade, você pode trazer o seu esmalte favorito.",
      },
      {
        question: "A blindagem de unhas protege contra quebras?",
        answer:
          "Sim, a blindagem cria uma camada protetora sobre a unha natural que evita quebras e descamações, permitindo que a unha cresça saudável.",
      },
      {
        question: "Preciso agendar com antecedência?",
        answer:
          "Recomendamos agendar com alguns dias de antecedência para garantir o seu horário preferido em nossa unidade na Aldeota.",
      },
      {
        question: "Vocês fazem spa dos pés e das mãos?",
        answer:
          "Sim, oferecemos protocolos relaxantes de spa com esfoliação, hidratação profunda e massagem revitalizante.",
      },
      {
        question: "O atendimento de manicure e pedicure é simultâneo?",
        answer:
          "Para otimizar o seu tempo, disponibilizamos atendimento ágil e integrado, com conforto absoluto.",
      },
    ],
    whatsappMessage:
      "Olá! Gostaria de agendar Unhas / Manicure e Pedicure na Maura Lima Aldeota.",
  },
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "NATURAL. ELEGANTE. SUA.",
    subtitle: "MAURA LIMA – SPECIALIST EYEBROWS",
    description:
      "Realce a sua beleza de forma leve, no seu tempo, com quem entende de sobrancelhas.",
    ctaText: "AGENDAR PELO WHATSAPP",
    ctaLink:
      "https://wa.me/5585989578885?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20pelo%20WhatsApp.",
    image:
      "/images/designdesobramcelha-1.jpg",
    video:
      "/videos/video 8 seg.mp4",
    alt: "Vídeo institucional Maura Lima Specialist Eyebrows Fortaleza",
  },
  {
    id: 2,
    title: "REMOÇÃO A LASER ÖMER 3D",
    subtitle: "Tecnologia de Ponta para Restauração da Pele",
    description:
      "A inovação mais avançada para remover micropigmentação antiga sem agredir os pelos, atingindo inclusive tons avermelhados e alaranjados.",
    ctaText: "SAIBA MAIS SOBRE A REMOÇÃO A LASER",
    ctaLink:
      "/servicos/remocao-a-laser-omer-3d",
    image:
      "/images/remocao-laser.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-skin-care-routine-of-a-woman-applying-creams-41222-large.mp4",
    alt: "Procedimento de alta precisão com laser Ömer 3D na Maura Lima",
  },
  {
    id: 3,
    title: "DESIGN DE SOBRANCELHAS",
    subtitle: "Mapeamento Facial Exclusivo e Sob Medida",
    description:
      "Simetria milimétrica, valorização da curvatura natural e respeito à anatomia do seu rosto, sem afinar ou perder a leveza da sua expressão. Conheça também nossos cursos profissionais.",
    ctaText: "SAIBA MAIS SOBRE O CURSO",
    ctaLink:
      "/cursos",
    image:
      "/images/designdesobramcelha-1.jpg",
    video:
      "https://assets.mixkit.co/videos/preview/mixkit-woman-applying-her-eyeshadow-in-front-of-a-mirror-40742-large.mp4",
    alt: "Design minucioso e harmônico de sobrancelhas femininas",
  },
  {
    id: 4,
    title: "MAURA LIMA MAISON SUL",
    subtitle: "Atendimento Exclusivo na Av. Edilson Brasil Soares",
    description:
      "Extensão Volume Brasileiro com fios Y, morena iluminada com brilho espelhado e maquiagem duradoura em nossa nova unidade na Maison Sul.",
    ctaText: "AGENDAR NA MAURA LIMA MAISON SUL",
    ctaLink:
      "https://wa.me/5585985701647?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20na%20Maura%20Lima%20Maison%20Sul.",
    image:
      "/images/cabelo.jpg",
    video:
      "/videos/cabelo.mp4",
    alt: "Produção de cabelo, beleza e estética na Maura Lima Maison Sul",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Beatriz M. Vasconcelos",
    location: "Aldeota, Fortaleza",
    service: "Design de Sobrancelhas",
    rating: 5,
    date: "Há 2 semanas",
    text: "Atendimento impecável! Há anos faço minhas sobrancelhas com a equipe da Maura Lima. O respeito pelo formato original do rosto e o carinho com que cuidam de cada detalhe é sem igual em Fortaleza.",
  },
  {
    id: 2,
    name: "Dra. Camila Albuquerque",
    location: "Meireles, Fortaleza",
    service: "Remoção a Laser Ömer 3D",
    rating: 5,
    date: "Há 1 mês",
    text: "Tinha uma micropigmentação antiga que havia ficado avermelhada e nenhuma clínica conseguia clarear. Com o laser Ömer 3D na Maura Lima o resultado na terceira sessão foi incrível! Não danificou meus pelos.",
  },
  {
    id: 3,
    name: "Larissa F. Menezes",
    location: "Cocó, Fortaleza",
    service: "Extensão de Cílios Volume Brasileiro",
    rating: 5,
    date: "Há 3 semanas",
    text: "Os cílios ficaram leves, naturais e incrivelmente elegantes. Não sinto nenhum peso nas pálpebras e duram perfeitamente na nossa umidade de Fortaleza. Recomendo de olhos fechados!",
  },
  {
    id: 4,
    name: "Juliana Carneiro",
    location: "Aldeota, Fortaleza",
    service: "Cabelo & Maquiagem",
    rating: 5,
    date: "Há 1 mês",
    text: "Fiz produção para meu aniversário com cabelo e maquiagem. A maquiagem durou a noite inteira intacta e a escova ficou com um brilho de cinema. O salão tem um clima calmo e sofisticado.",
  },
];
