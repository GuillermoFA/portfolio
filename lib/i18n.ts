export type Lang = "es" | "en" | "pt"

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "es", label: "Español", flag: "ES" },
  { code: "en", label: "English", flag: "EN" },
  { code: "pt", label: "Português", flag: "PT" },
]

type Dict = {
  nav: {
    about: string
    value: string
    services: string
    process: string
    experience: string
    projects: string
    certificates: string
    contact: string
  }
  hero: {
    available: string
    role: string
    title: string
    subtitle: string
    ctaContact: string
    ctaCv: string
    location: string
  }
  about: {
    tag: string
    title: string
    p1: string
    p2: string
    statsExp: string
    statsProjects: string
    statsStack: string
    downloadCv: string
  }
  value: {
    tag: string
    title: string
    subtitle: string
    items: { title: string; desc: string }[]
  }
  services: {
    tag: string
    title: string
    subtitle: string
    items: { title: string; desc: string; features: string[] }[]
    cta: string
  }
  process: {
    tag: string
    title: string
    subtitle: string
    steps: { title: string; desc: string }[]
    supportTitle: string
    supportDesc: string
  }
  experience: {
    tag: string
    title: string
    subtitle: string
    present: string
  }
  projects: {
    tag: string
    title: string
    subtitle: string
    viewProject: string
  }
  certificates: {
    tag: string
    title: string
    subtitle: string
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    linkedinTitle: string
    linkedinDesc: string
    linkedinCta: string
    scheduleTitle: string
    scheduleDesc: string
    pickDate: string
    pickTime: string
    confirm: string
    confirmed: string
    confirmedNote: string
  }
  footer: {
    rights: string
    built: string
  }
}

export const translations: Record<Lang, Dict> = {
  es: {
    nav: {
      about: "Sobre mí",
      value: "Valor",
      services: "Servicios",
      process: "Proceso",
      experience: "Trayectoria",
      projects: "Proyectos",
      certificates: "Certificados",
      contact: "Contacto",
    },
    hero: {
      available: "Disponible para proyectos freelance",
      role: "Desarrollador Full Stack · Semi Senior",
      title: "Construyo software que genera valor real a las empresas",
      subtitle:
        "Ingeniero Civil en Computación enfocado en transformar necesidades del negocio en soluciones escalables, medibles y bien diseñadas.",
      ctaContact: "Trabajemos juntos",
      ctaCv: "Descargar CV",
      location: "Antofagasta, Chile",
    },
    about: {
      tag: "Sobre mí",
      title: "Un poco sobre quién soy",
      p1: "Tengo 26 años, soy de Antofagasta, Chile, y soy Desarrollador Full Stack enfocado en generar valor a las empresas. Me considero un perfil Semi Senior por mi trayectoria en entornos de alta exigencia como la industria aeronáutica, el sector minero y el desarrollo académico.",
      p2: "Diseño arquitecturas escalables, implemento soluciones alineadas al negocio y guío equipos bajo metodologías ágiles y mejores prácticas de desarrollo. Lo que más me motiva es construir productos que tengan impacto directo y medible.",
      statsExp: "Años de experiencia",
      statsProjects: "Empresas / proyectos",
      statsStack: "Tecnologías principales",
      downloadCv: "Descargar mi CV",
    },
    value: {
      tag: "Cómo genero valor",
      title: "No solo escribo código, resuelvo problemas de negocio",
      subtitle:
        "Cada solución que construyo está pensada para tener impacto real en las métricas y la operación de la empresa.",
      items: [
        {
          title: "Soluciones alineadas al negocio",
          desc: "Traduzco objetivos comerciales en software concreto, priorizando lo que mueve la aguja.",
        },
        {
          title: "Automatización de procesos",
          desc: "Elimino tareas manuales y repetitivas con automatizaciones que ahorran tiempo y reducen errores.",
        },
        {
          title: "Arquitecturas escalables",
          desc: "Diseño sistemas que crecen con la empresa, mantenibles y preparados para el futuro.",
        },
        {
          title: "Liderazgo técnico",
          desc: "Guío equipos con metodologías ágiles, buenas prácticas y producción estructurada de backlog.",
        },
      ],
    },
    services: {
      tag: "Servicios",
      title: "Lo que puedo construir para ti",
      subtitle:
        "Servicios freelance de desarrollo de software a la medida, desde la idea hasta producción.",
      items: [
        {
          title: "Páginas web & Landing pages",
          desc: "Sitios modernos, rápidos y optimizados que convierten visitantes en clientes.",
          features: ["Diseño responsivo", "SEO & rendimiento", "Animaciones a medida"],
        },
        {
          title: "Aplicaciones web a medida",
          desc: "Software empresarial full stack para gestionar y escalar tu operación.",
          features: ["Dashboards & paneles", "Integraciones API", "Bases de datos"],
        },
      ],
      cta: "Cotizar un proyecto",
    },
    process: {
      tag: "Mi proceso",
      title: "Cómo trabajamos tu proyecto, paso a paso",
      subtitle:
        "Un proceso claro y transparente donde estoy contigo en cada etapa. Sin sorpresas: sabrás siempre en qué punto va tu software.",
      steps: [
        {
          title: "Toma de requerimientos",
          desc: "Conversamos a fondo sobre tu negocio, tus objetivos y lo que necesitas resolver.",
        },
        {
          title: "Análisis del software",
          desc: "Defino el alcance, la arquitectura y las tecnologías ideales para tu solución.",
        },
        {
          title: "Propuesta",
          desc: "Te entrego una propuesta clara con tiempos, entregables y costos, sin letra chica.",
        },
        {
          title: "Desarrollo",
          desc: "Construyo tu software con entregas iterativas y comunicación constante en cada avance.",
        },
        {
          title: "Entrega final",
          desc: "Despliegue a producción, pruebas finales y capacitación para que uses todo sin fricción.",
        },
      ],
      supportTitle: "Siempre contigo, también después de la entrega",
      supportDesc:
        "No desaparezco al terminar el proyecto. Ofrezco soporte post-venta, mantenimiento y mejoras continuas para que tu software siga creciendo contigo.",
    },
    experience: {
      tag: "Trayectoria",
      title: "Mi línea de tiempo profesional",
      subtitle: "Un recorrido por las empresas y proyectos que han formado mi experiencia.",
      present: "Actual",
    },
    projects: {
      tag: "Proyectos",
      title: "Trabajos seleccionados",
      subtitle: "Una muestra de los productos y soluciones en los que he trabajado.",
      viewProject: "Ver proyecto",
    },
    certificates: {
      tag: "Certificados",
      title: "Formación y certificaciones",
      subtitle: "Aprendizaje continuo para mantenerme a la vanguardia.",
    },
    contact: {
      tag: "Contacto",
      title: "Construyamos algo juntos",
      subtitle: "Conectemos por LinkedIn o agenda una reunión directamente en mi calendario.",
      linkedinTitle: "Conecta conmigo",
      linkedinDesc: "Hablemos sobre tu proyecto, ideas o una posible colaboración.",
      linkedinCta: "Ir a LinkedIn",
      scheduleTitle: "Agenda una hora",
      scheduleDesc: "Elige un día y horario. Pronto se integrará con Google Calendar.",
      pickDate: "Elige una fecha",
      pickTime: "Elige un horario",
      confirm: "Confirmar reunión",
      confirmed: "¡Reunión agendada!",
      confirmedNote: "Te contactaré para confirmar los detalles.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Desarrollado con Next.js & Tailwind CSS.",
    },
  },
  en: {
    nav: {
      about: "About",
      value: "Value",
      services: "Services",
      process: "Process",
      experience: "Experience",
      projects: "Projects",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      available: "Available for freelance work",
      role: "Full Stack Developer · Semi Senior",
      title: "I build software that delivers real value to companies",
      subtitle:
        "Computer Engineer focused on turning business needs into scalable, measurable and well-designed solutions.",
      ctaContact: "Let's work together",
      ctaCv: "Download CV",
      location: "Antofagasta, Chile",
    },
    about: {
      tag: "About me",
      title: "A little about who I am",
      p1: "I'm 26 years old, from Antofagasta, Chile, and I'm a Full Stack Developer focused on generating value for companies. I consider myself a Semi Senior profile thanks to my experience in demanding environments such as the aeronautics industry, the mining sector and academic development.",
      p2: "I design scalable architectures, implement business-aligned solutions and lead teams using agile methodologies and development best practices. What drives me most is building products with direct, measurable impact.",
      statsExp: "Years of experience",
      statsProjects: "Companies / projects",
      statsStack: "Core technologies",
      downloadCv: "Download my CV",
    },
    value: {
      tag: "How I create value",
      title: "I don't just write code, I solve business problems",
      subtitle:
        "Every solution I build is designed to have real impact on the company's metrics and operations.",
      items: [
        {
          title: "Business-aligned solutions",
          desc: "I translate commercial goals into concrete software, prioritizing what moves the needle.",
        },
        {
          title: "Process automation",
          desc: "I remove manual, repetitive tasks with automations that save time and reduce errors.",
        },
        {
          title: "Scalable architectures",
          desc: "I design systems that grow with the company, maintainable and future-proof.",
        },
        {
          title: "Technical leadership",
          desc: "I guide teams with agile methodologies, best practices and structured backlog production.",
        },
      ],
    },
    services: {
      tag: "Services",
      title: "What I can build for you",
      subtitle: "Custom freelance software development services, from idea to production.",
      items: [
        {
          title: "Websites & Landing pages",
          desc: "Modern, fast and optimized sites that turn visitors into customers.",
          features: ["Responsive design", "SEO & performance", "Custom animations"],
        },
        {
          title: "Custom web apps",
          desc: "Full stack business software to manage and scale your operation.",
          features: ["Dashboards & panels", "API integrations", "Databases"],
        },
      ],
      cta: "Request a quote",
    },
    process: {
      tag: "My process",
      title: "How we build your project, step by step",
      subtitle:
        "A clear, transparent process where I'm with you at every stage. No surprises: you'll always know exactly where your software stands.",
      steps: [
        {
          title: "Requirements gathering",
          desc: "We dive deep into your business, your goals and what you need to solve.",
        },
        {
          title: "Software analysis",
          desc: "I define the scope, architecture and the ideal technologies for your solution.",
        },
        {
          title: "Proposal",
          desc: "You get a clear proposal with timelines, deliverables and costs, no fine print.",
        },
        {
          title: "Development",
          desc: "I build your software with iterative deliveries and constant communication on every step.",
        },
        {
          title: "Final delivery",
          desc: "Production deployment, final testing and training so you can use everything without friction.",
        },
      ],
      supportTitle: "Always with you, even after delivery",
      supportDesc:
        "I don't disappear when the project ends. I offer post-sale support, maintenance and continuous improvements so your software keeps growing with you.",
    },
    experience: {
      tag: "Experience",
      title: "My professional timeline",
      subtitle: "A journey through the companies and projects that shaped my experience.",
      present: "Present",
    },
    projects: {
      tag: "Projects",
      title: "Selected work",
      subtitle: "A sample of the products and solutions I've worked on.",
      viewProject: "View project",
    },
    certificates: {
      tag: "Certificates",
      title: "Training & certifications",
      subtitle: "Continuous learning to stay at the cutting edge.",
    },
    contact: {
      tag: "Contact",
      title: "Let's build something together",
      subtitle: "Connect with me on LinkedIn or book a meeting directly on my calendar.",
      linkedinTitle: "Connect with me",
      linkedinDesc: "Let's talk about your project, ideas or a possible collaboration.",
      linkedinCta: "Go to LinkedIn",
      scheduleTitle: "Book a slot",
      scheduleDesc: "Pick a day and time. Google Calendar integration coming soon.",
      pickDate: "Pick a date",
      pickTime: "Pick a time",
      confirm: "Confirm meeting",
      confirmed: "Meeting booked!",
      confirmedNote: "I'll reach out to confirm the details.",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with Next.js & Tailwind CSS.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      value: "Valor",
      services: "Serviços",
      process: "Processo",
      experience: "Trajetória",
      projects: "Projetos",
      certificates: "Certificados",
      contact: "Contato",
    },
    hero: {
      available: "Disponível para projetos freelance",
      role: "Desenvolvedor Full Stack · Pleno",
      title: "Eu construo software que gera valor real para as empresas",
      subtitle:
        "Engenheiro de Computação focado em transformar necessidades de negócio em soluções escaláveis, mensuráveis e bem projetadas.",
      ctaContact: "Vamos trabalhar juntos",
      ctaCv: "Baixar CV",
      location: "Antofagasta, Chile",
    },
    about: {
      tag: "Sobre mim",
      title: "Um pouco sobre quem eu sou",
      p1: "Tenho 26 anos, sou de Antofagasta, Chile, e sou Desenvolvedor Full Stack focado em gerar valor para as empresas. Considero-me um perfil Pleno graças à minha trajetória em ambientes de alta exigência como a indústria aeronáutica, o setor de mineração e o desenvolvimento acadêmico.",
      p2: "Projeto arquiteturas escaláveis, implemento soluções alinhadas ao negócio e lidero equipes com metodologias ágeis e boas práticas de desenvolvimento. O que mais me motiva é construir produtos com impacto direto e mensurável.",
      statsExp: "Anos de experiência",
      statsProjects: "Empresas / projetos",
      statsStack: "Tecnologias principais",
      downloadCv: "Baixar meu CV",
    },
    value: {
      tag: "Como gero valor",
      title: "Não apenas escrevo código, resolvo problemas de negócio",
      subtitle:
        "Cada solução que construo é pensada para ter impacto real nas métricas e na operação da empresa.",
      items: [
        {
          title: "Soluções alinhadas ao negócio",
          desc: "Traduzo objetivos comerciais em software concreto, priorizando o que faz diferença.",
        },
        {
          title: "Automação de processos",
          desc: "Elimino tarefas manuais e repetitivas com automações que poupam tempo e reduzem erros.",
        },
        {
          title: "Arquiteturas escaláveis",
          desc: "Projeto sistemas que crescem com a empresa, mantíveis e preparados para o futuro.",
        },
        {
          title: "Liderança técnica",
          desc: "Oriento equipes com metodologias ágeis, boas práticas e produção estruturada de backlog.",
        },
      ],
    },
    services: {
      tag: "Serviços",
      title: "O que posso construir para você",
      subtitle: "Serviços freelance de desenvolvimento de software sob medida, da ideia à produção.",
      items: [
        {
          title: "Sites & Landing pages",
          desc: "Sites modernos, rápidos e otimizados que convertem visitantes em clientes.",
          features: ["Design responsivo", "SEO & performance", "Animações sob medida"],
        },
        {
          title: "Aplicações web sob medida",
          desc: "Software empresarial full stack para gerenciar e escalar sua operação.",
          features: ["Dashboards & painéis", "Integrações de API", "Bancos de dados"],
        },
      ],
      cta: "Solicitar orçamento",
    },
    process: {
      tag: "Meu processo",
      title: "Como construímos seu projeto, passo a passo",
      subtitle:
        "Um processo claro e transparente onde estou com você em cada etapa. Sem surpresas: você sempre saberá em que ponto está o seu software.",
      steps: [
        {
          title: "Levantamento de requisitos",
          desc: "Conversamos a fundo sobre o seu negócio, seus objetivos e o que precisa resolver.",
        },
        {
          title: "Análise do software",
          desc: "Defino o escopo, a arquitetura e as tecnologias ideais para a sua solução.",
        },
        {
          title: "Proposta",
          desc: "Entrego uma proposta clara com prazos, entregáveis e custos, sem letras miúdas.",
        },
        {
          title: "Desenvolvimento",
          desc: "Construo seu software com entregas iterativas e comunicação constante em cada avanço.",
        },
        {
          title: "Entrega final",
          desc: "Implantação em produção, testes finais e treinamento para você usar tudo sem fricção.",
        },
      ],
      supportTitle: "Sempre com você, também após a entrega",
      supportDesc:
        "Eu não desapareço quando o projeto termina. Ofereço suporte pós-venda, manutenção e melhorias contínuas para que seu software continue crescendo com você.",
    },
    experience: {
      tag: "Trajetória",
      title: "Minha linha do tempo profissional",
      subtitle: "Um percurso pelas empresas e projetos que formaram minha experiência.",
      present: "Atual",
    },
    projects: {
      tag: "Projetos",
      title: "Trabalhos selecionados",
      subtitle: "Uma amostra dos produtos e soluções em que trabalhei.",
      viewProject: "Ver projeto",
    },
    certificates: {
      tag: "Certificados",
      title: "Formação e certificações",
      subtitle: "Aprendizado contínuo para me manter na vanguarda.",
    },
    contact: {
      tag: "Contato",
      title: "Vamos construir algo juntos",
      subtitle: "Conecte-se comigo no LinkedIn ou agende uma reunião direto na minha agenda.",
      linkedinTitle: "Conecte-se comigo",
      linkedinDesc: "Vamos falar sobre seu projeto, ideias ou uma possível colaboração.",
      linkedinCta: "Ir para o LinkedIn",
      scheduleTitle: "Agende um horário",
      scheduleDesc: "Escolha um dia e horário. Integração com Google Calendar em breve.",
      pickDate: "Escolha uma data",
      pickTime: "Escolha um horário",
      confirm: "Confirmar reunião",
      confirmed: "Reunião agendada!",
      confirmedNote: "Entrarei em contato para confirmar os detalhes.",
    },
    footer: {
      rights: "Todos os direitos reservados.",
      built: "Desenvolvido com Next.js & Tailwind CSS.",
    },
  },
}
