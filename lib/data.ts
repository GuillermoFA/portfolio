import type { Lang } from "./i18n"

type ML = Record<Lang, string>

export type ExperienceItem = {
  company: string
  location: ML
  role: ML
  period: ML
  description: ML
  tech: string[]
  current?: boolean
}

export const experience: ExperienceItem[] = [
  {
    company: "Universidad Católica del Norte",
    location: { es: "Antofagasta, Chile", en: "Antofagasta, Chile", pt: "Antofagasta, Chile" },
    role: {
      es: "Tech Lead · Profesor Guía de Memorias",
      en: "Tech Lead · Thesis Advisor",
      pt: "Tech Lead · Orientador de Teses",
    },
    period: { es: "Ene 2026 – Dic 2026", en: "Jan 2026 – Dec 2026", pt: "Jan 2026 – Dez 2026" },
    description: {
      es: "Líder técnico y profesor guía de memorias universitarias, entregando alineamiento arquitectónico, mejores prácticas y gestión ágil de proyectos. Stack principal en arquitecturas .NET y Next.js.",
      en: "Technical lead and thesis advisor, providing architectural alignment, best practices and agile project management. Main stack focused on .NET and Next.js architectures.",
      pt: "Líder técnico e orientador de teses, fornecendo alinhamento arquitetônico, boas práticas e gestão ágil de projetos. Stack principal em arquiteturas .NET e Next.js.",
    },
    tech: [".NET", "Next.js", "Agile"],
    current: true,
  },
  {
    company: "DRIMO — LATAM Airlines Group",
    location: { es: "Santiago, Chile (Remoto)", en: "Santiago, Chile (Remote)", pt: "Santiago, Chile (Remoto)" },
    role: {
      es: "Desarrollador Full Stack · Digital Talent Management",
      en: "Full Stack Developer · Digital Talent Management",
      pt: "Desenvolvedor Full Stack · Digital Talent Management",
    },
    period: { es: "Abr 2025 – Actual", en: "Apr 2025 – Present", pt: "Abr 2025 – Atual" },
    description: {
      es: "Miembro del equipo HR Talent. Desarrollo de TEAMFLOW, la fuente única de la verdad de toda la dotación de LATAM, y del Portal de Observabilidad Aumentada (OA) con métricas de Growth y Glow.",
      en: "Member of the HR Talent team. Built TEAMFLOW, the single source of truth for LATAM's entire workforce, and the Augmented Observability (OA) Portal delivering Growth and Glow metrics.",
      pt: "Membro da equipe HR Talent. Desenvolvimento do TEAMFLOW, a fonte única da verdade de todo o quadro da LATAM, e do Portal de Observabilidade Aumentada (OA) com métricas de Growth e Glow.",
    },
    tech: ["Angular", "Java"],
    current: true,
  },
  {
    company: "Thermo Solutions SpA",
    location: { es: "Chile (Remoto)", en: "Chile (Remote)", pt: "Chile (Remoto)" },
    role: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
      pt: "Desenvolvedor Full Stack",
    },
    period: { es: "Feb 2025 – Jul 2025", en: "Feb 2025 – Jul 2025", pt: "Fev 2025 – Jul 2025" },
    description: {
      es: "Desarrollo de la Cartilla de Identificación Segura (CIS) y una aplicación web crítica para la trazabilidad de documentación de seguridad en terreno para Minera Escondida BHP.",
      en: "Built the Safe Identification Card (CIS) and a critical web app for field safety documentation traceability for Minera Escondida BHP.",
      pt: "Desenvolvimento da Cartilha de Identificação Segura (CIS) e de uma aplicação web crítica para rastreabilidade de documentação de segurança em campo para a Minera Escondida BHP.",
    },
    tech: ["NestJS", "Vue.js", "GCP", "Firebase"],
  },
  {
    company: "LATAM Airlines Group",
    location: { es: "Santiago, Chile (Remoto)", en: "Santiago, Chile (Remote)", pt: "Santiago, Chile (Remoto)" },
    role: {
      es: "Data Analytics Engineer · Network Planning",
      en: "Data Analytics Engineer · Network Planning",
      pt: "Data Analytics Engineer · Network Planning",
    },
    period: { es: "Jul 2024 – Dic 2024", en: "Jul 2024 – Dec 2024", pt: "Jul 2024 – Dez 2024" },
    description: {
      es: "Módulo automatizado de analítica avanzada para la detección temprana de errores críticos en itinerarios de vuelos comerciales, con pipelines de datos y paso a producción en la nube.",
      en: "Automated advanced analytics module for early detection of critical errors in commercial flight itineraries, with data pipelines and cloud production deployment.",
      pt: "Módulo automatizado de analítica avançada para detecção precoce de erros críticos em itinerários de voos comerciais, com pipelines de dados e implantação em produção na nuvem.",
    },
    tech: ["GCP", "BigQuery", "Dataform", "Apps Script"],
  },
  {
    company: "Compañía Minera Lomas Bayas",
    location: { es: "Sierra Gorda, Chile", en: "Sierra Gorda, Chile", pt: "Sierra Gorda, Chile" },
    role: {
      es: "Desarrollador Full Stack · HSEC",
      en: "Full Stack Developer · HSEC",
      pt: "Desenvolvedor Full Stack · HSEC",
    },
    period: { es: "Ene 2024 – Mar 2024", en: "Jan 2024 – Mar 2024", pt: "Jan 2024 – Mar 2024" },
    description: {
      es: "Sistemas para la gestión de carpetas de arranque, acreditación de contratistas y dotación en faena minera. Automatización con Python del envío de reportes diarios de Salud y Seguridad.",
      en: "Systems for onboarding folders, contractor accreditation and workforce management at a mining site. Python automation of daily Health & Safety report delivery.",
      pt: "Sistemas para gestão de pastas de início, credenciamento de contratados e quadro de pessoal em mineração. Automação em Python do envio de relatórios diários de Saúde e Segurança.",
    },
    tech: [".NET Core", "Angular", "Python", "SQL Server"],
  },
  {
    company: "Transportes Yireh SpA",
    location: { es: "Antofagasta, Chile", en: "Antofagasta, Chile", pt: "Antofagasta, Chile" },
    role: {
      es: "Desarrollador de Automatización",
      en: "Automation Developer",
      pt: "Desenvolvedor de Automação",
    },
    period: { es: "Ene 2021 – Ago 2022", en: "Jan 2021 – Aug 2022", pt: "Jan 2021 – Ago 2022" },
    description: {
      es: "Optimización de flujos logísticos y operativos mediante digitalización. Sistemas de control pre-tarea, post-tarea y formularios de checklist operativos de flota.",
      en: "Optimization of logistics and operational flows through digitization. Pre-task, post-task control systems and operational fleet checklist forms.",
      pt: "Otimização de fluxos logísticos e operacionais via digitalização. Sistemas de controle pré-tarefa, pós-tarefa e formulários de checklist operacionais de frota.",
    },
    tech: ["JavaScript", "React", "Next.js", "Node.js"],
  },
]

export type Project = {
  title: string
  category: ML
  description: ML
  highlights: Record<Lang, string[]>
  tech: string[]
  image: string
  href?: string
}

export const projects: Project[] = [
  {
    title: "TEAMFLOW",
    category: { es: "Plataforma empresarial", en: "Enterprise platform", pt: "Plataforma empresarial" },
    description: {
      es: "Plataforma corporativa que centraliza la información de toda la dotación de LATAM Airlines en un solo lugar, eliminando planillas dispersas y procesos manuales. Permite gestionar cambios organizacionales, aprobar solicitudes operativas y visualizar la jerarquía completa de la compañía en tiempo real.",
      en: "Corporate platform that centralizes information for LATAM Airlines' entire workforce in one place, removing scattered spreadsheets and manual processes. It manages organizational changes, approves operational requests and visualizes the company's full hierarchy in real time.",
      pt: "Plataforma corporativa que centraliza as informações de todo o quadro da LATAM Airlines em um só lugar, eliminando planilhas dispersas e processos manuais. Permite gerenciar mudanças organizacionais, aprovar solicitações operacionais e visualizar a hierarquia completa da empresa em tempo real.",
    },
    highlights: {
      es: ["Fuente única de la verdad", "Organigrama dinámico", "Flujos de aprobación"],
      en: ["Single source of truth", "Dynamic org chart", "Approval workflows"],
      pt: ["Fonte única da verdade", "Organograma dinâmico", "Fluxos de aprovação"],
    },
    tech: ["Angular", "Java"],
    image: "/projects/teamflow.png",
  },
  {
    title: "Portal de Observabilidad (OA)",
    category: { es: "Analítica & Métricas", en: "Analytics & Metrics", pt: "Analítica & Métricas" },
    description: {
      es: "Portal de analítica que transforma datos de talento en métricas accionables de Growth y Glow. Entrega a cada colaborador y líder dashboards claros para hacer seguimiento al desempeño, fortalecer el feedback continuo e impulsar el crecimiento interno con decisiones basadas en datos.",
      en: "Analytics portal that turns talent data into actionable Growth and Glow metrics. It gives every employee and leader clear dashboards to track performance, strengthen continuous feedback and drive internal growth with data-driven decisions.",
      pt: "Portal de analítica que transforma dados de talento em métricas acionáveis de Growth e Glow. Entrega a cada colaborador e líder dashboards claros para acompanhar o desempenho, fortalecer o feedback contínuo e impulsionar o crescimento interno com decisões baseadas em dados.",
    },
    highlights: {
      es: ["Dashboards de desempeño", "Métricas Growth & Glow", "Feedback continuo"],
      en: ["Performance dashboards", "Growth & Glow metrics", "Continuous feedback"],
      pt: ["Dashboards de desempenho", "Métricas Growth & Glow", "Feedback contínuo"],
    },
    tech: ["Angular", "Java", "Data Viz"],
    image: "/projects/oa-portal.png",
  },
  {
    title: "Cartilla de Identificación Segura (CIS)",
    category: { es: "App crítica de seguridad", en: "Critical safety app", pt: "App crítico de segurança" },
    description: {
      es: "Aplicación web crítica para Minera Escondida BHP que digitaliza y da trazabilidad a la documentación de seguridad en terreno. Reemplaza el papel por registros digitales auditables, asegurando que cada trabajador cumpla los protocolos antes de ingresar a faena y reduciendo riesgos operacionales.",
      en: "Critical web app for Minera Escondida BHP that digitizes and traces field safety documentation. It replaces paper with auditable digital records, ensuring every worker meets protocols before entering the site and reducing operational risks.",
      pt: "Aplicação web crítica para a Minera Escondida BHP que digitaliza e dá rastreabilidade à documentação de segurança em campo. Substitui o papel por registros digitais auditáveis, garantindo que cada trabalhador cumpra os protocolos antes de entrar na operação e reduzindo riscos operacionais.",
    },
    highlights: {
      es: ["Registros auditables", "Validación en terreno", "Cumplimiento de protocolos"],
      en: ["Auditable records", "On-site validation", "Protocol compliance"],
      pt: ["Registros auditáveis", "Validação em campo", "Cumprimento de protocolos"],
    },
    tech: ["NestJS", "Vue.js", "GCP"],
    image: "/projects/cis.png",
  },
  {
    title: "Detección de errores en itinerarios",
    category: { es: "Data Analytics", en: "Data Analytics", pt: "Data Analytics" },
    description: {
      es: "Módulo automatizado de analítica avanzada que monitorea los itinerarios de vuelos comerciales de LATAM y detecta errores críticos antes de que impacten la operación. Mediante pipelines de datos en la nube, alerta de forma temprana inconsistencias que antes se descubrían tarde, evitando costos y problemas en la red de vuelos.",
      en: "Automated advanced analytics module that monitors LATAM commercial flight itineraries and detects critical errors before they impact operations. Through cloud data pipelines, it raises early alerts on inconsistencies that used to be caught late, avoiding costs and issues across the flight network.",
      pt: "Módulo automatizado de analítica avançada que monitora os itinerários de voos comerciais da LATAM e detecta erros críticos antes que impactem a operação. Por meio de pipelines de dados na nuvem, alerta precocemente inconsistências que antes eram descobertas tarde, evitando custos e problemas na malha de voos.",
    },
    highlights: {
      es: ["Detección temprana", "Pipelines en la nube", "Alertas automáticas"],
      en: ["Early detection", "Cloud pipelines", "Automated alerts"],
      pt: ["Detecção precoce", "Pipelines na nuvem", "Alertas automáticos"],
    },
    tech: ["BigQuery", "Dataform", "GCP"],
    image: "/projects/itinerary.png",
  },
  {
    title: "Automatización HSEC minera",
    category: { es: "Automatización", en: "Automation", pt: "Automação" },
    description: {
      es: "Conjunto de sistemas para el área HSEC de Compañía Minera Lomas Bayas: gestión de carpetas de arranque, acreditación de contratistas y control de dotación en faena. Incluye una automatización en Python que genera y envía los reportes diarios de Salud y Seguridad, ahorrando horas de trabajo manual al equipo.",
      en: "A set of systems for Compañía Minera Lomas Bayas' HSEC area: onboarding folder management, contractor accreditation and on-site workforce control. It includes a Python automation that generates and sends daily Health & Safety reports, saving the team hours of manual work.",
      pt: "Conjunto de sistemas para a área HSEC da Compañía Minera Lomas Bayas: gestão de pastas de início, credenciamento de contratados e controle de pessoal na operação. Inclui uma automação em Python que gera e envia os relatórios diários de Saúde e Segurança, poupando horas de trabalho manual da equipe.",
    },
    highlights: {
      es: ["Acreditación de contratistas", "Reportes automáticos", "Control de dotación"],
      en: ["Contractor accreditation", "Automated reports", "Workforce control"],
      pt: ["Credenciamento de contratados", "Relatórios automáticos", "Controle de pessoal"],
    },
    tech: [".NET Core", "Angular", "Python"],
    image: "/projects/hsec.png",
  },
  {
    title: "Control de flota — Yireh",
    category: { es: "Logística & Operaciones", en: "Logistics & Operations", pt: "Logística & Operações" },
    description: {
      es: "Digitalización completa de los flujos logísticos y operativos de Transportes Yireh. Reemplacé los checklists en papel por sistemas de control pre-tarea y post-tarea, dando trazabilidad a cada operación de la flota y optimizando los tiempos del equipo en terreno.",
      en: "Full digitization of Transportes Yireh's logistics and operational flows. I replaced paper checklists with pre-task and post-task control systems, giving traceability to every fleet operation and optimizing the field team's time.",
      pt: "Digitalização completa dos fluxos logísticos e operacionais da Transportes Yireh. Substituí os checklists em papel por sistemas de controle pré-tarefa e pós-tarefa, dando rastreabilidade a cada operação da frota e otimizando o tempo da equipe em campo.",
    },
    highlights: {
      es: ["Checklists digitales", "Control pre y post tarea", "Trazabilidad de flota"],
      en: ["Digital checklists", "Pre & post-task control", "Fleet traceability"],
      pt: ["Checklists digitais", "Controle pré e pós-tarefa", "Rastreabilidade de frota"],
    },
    tech: ["React", "Next.js", "Node.js"],
    image: "/projects/fleet.png",
  },
]

export type Certificate = {
  name: string
  issuer: string
}

export const certificates: Certificate[] = [
  { name: "Claude Code", issuer: "Anthropic" },
  { name: "Full Stack Next.js", issuer: "Certificación" },
  { name: "Next.js (English)", issuer: "Certificación" },
  { name: "Java Fundamentals", issuer: "Udemy" },
  { name: ".NET Development", issuer: "Udemy" },
  { name: "Next.js Development", issuer: "Udemy" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "Networking Basics", issuer: "Cisco" },
  { name: "Microsoft Excel Intermedio", issuer: "APRENMINOTEC" },
]

export const skills = {
  Backend: ["Java", ".NET Core", "Node.js", "NestJS", "Python"],
  Frontend: ["Angular", "Next.js", "React", "Vue.js", "TypeScript"],
  "Data & Cloud": ["GCP", "Firebase", "BigQuery", "PostgreSQL", "SQL Server"],
  Tools: ["Git", "Figma", "Scrum", "Software Architecture"],
}

export const LINKEDIN_URL = "https://linkedin.com/in/guillermofuentesavila"
export const EMAIL = "guillermofuentes24@gmail.com"
