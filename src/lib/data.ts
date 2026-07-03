import {
  AngularIcon,
  ChatgptIcon,
  CIcon,
  ClaudeIcon,
  CleanArchIcon,
  CleanCodeIcon,
  CopilotIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  ExpressIcon,
  FirebaseIcon,
  GhActionsIcon,
  GitIcon,
  HtmlIcon,
  IonicIcon,
  JavascriptIcon,
  MysqlIcon,
  NextIcon,
  NodeIcon,
  PhpIcon,
  PnpmIcon,
  PostgresIcon,
  PostmanIcon,
  PrismaIcon,
  ReactIcon,
  RestIcon,
  ScrumIcon,
  StorybookIcon,
  SupabaseIcon,
  TailwindIcon,
  TddIcon,
  TypescriptIcon,
  VitestIcon,
} from "@/components/icons/tech-icons";

export const personalInfo = {
  name: "Micaela Vázquez",
  role: "Desarrolladora Full Stack",
  location: "Buenos Aires, Argentina",
  email: "micaelavazquez470sl@gmail.com",
  github: "https://github.com/MicaVazquez",
  linkedin: "https://linkedin.com/in/micaela-vazquez21",
  tagline:
    "Me motiva entender el problema detrás de cada feature y construir soluciones que escalen: código que se pueda mantener, extender y que otras personas puedan retomar sin fricción.",
};

export const projects = [
  {
    id: "01",
    company: "ForIT Software Factory",
    title: "Plataforma de reconocimiento entre pares",
    problem:
      "Los equipos de desarrollo necesitaban una forma visible de reconocer el trabajo de sus pares: badges, likes, comentarios y un feed en tiempo real.",
    role: "Implementé Clean Architecture con capa de dominio desacoplada, patrón Repository y más de 30 casos de uso. Autenticación con OAuth 2.0 (Discord) y JWT, pruebas con Vitest y CI/CD con GitHub Actions, en un monorepo con pnpm Workspaces.",
    desktopImage: { src: "/projects/forit-desktop.png", width: 1885, height: 941 },
    mobileImage: { src: "/projects/forit-mobile.png", width: 377, height: 846 },
    stack: [
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Clean Architecture", icon: CleanArchIcon },
    ],
  },
  {
    id: "02",
    company: "AMIA",
    title: "Plataforma de recruiting multi-tenant",
    problem:
      "Una plataforma integral de recruiting multi-tenant que necesitaba mayor cobertura de tests y corrección de bugs en módulos productivos.",
    role: "Incrementé el coverage con Vitest, refactoricé componentes en Storybook y resolví bugs en flujos críticos del producto, aplicando programación funcional en un monorepo con Yarn.",
    desktopImage: { src: "/projects/amia-desktop.png", width: 1906, height: 931 },
    mobileImage: null,
    stack: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "Node.js", icon: NodeIcon },
      { name: "Vitest", icon: VitestIcon },
      { name: "TailwindCSS", icon: TailwindIcon },
      { name: "Storybook", icon: StorybookIcon },
    ],
  },
];

export const timeline = [
  {
    date: "Feb 2026 — Presente",
    title: "Desarrolladora Full Stack",
    org: "ForIT Software Factory",
    desc: "Desarrollo full stack en proyectos reales: plataforma de reconocimiento entre pares y plataforma de recruiting multi-tenant para AMIA. Clean Architecture, testing con Vitest, CI/CD con GitHub Actions, TDD y Docker.",
  },
  {
    date: "Feb 2026",
    title: "Curso de programación Full Stack avanzado",
    org: "Academia ForIT — ForIT Software Factory",
    desc: "Formación intensiva en prácticas profesionales: Git Avanzado, TypeScript, TDD, Visual TDD, Arquitectura Limpia, Código Limpio y Docker.",
  },
  {
    date: "2022 — 2025",
    title: "Tecnicatura Universitaria en Programación",
    org: "Universidad Tecnológica Nacional (UTN)",
    desc: "Formación en programación, estructuras de datos, bases de datos y desarrollo de software.",
  },
];

export const skillGroups = [
  {
    name: "Frontend",
    items: [
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "TypeScript", icon: TypescriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "Angular", icon: AngularIcon },
      { name: "Ionic", icon: IonicIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: NodeIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "PHP", icon: PhpIcon },
      { name: "C", icon: CIcon },
      { name: "C#", icon: CsharpIcon },
    ],
  },
  {
    name: "Bases de datos",
    items: [
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "MySQL", icon: MysqlIcon },
      { name: "Prisma ORM", icon: PrismaIcon },
    ],
  },
  {
    name: "DevOps y herramientas",
    items: [
      { name: "Docker", icon: DockerIcon },
      { name: "GitHub Actions", icon: GhActionsIcon },
      { name: "Git Avanzado", icon: GitIcon },
      { name: "pnpm", icon: PnpmIcon },
    ],
  },
  {
    name: "Plataformas y APIs",
    items: [
      { name: "Firebase", icon: FirebaseIcon },
      { name: "Supabase", icon: SupabaseIcon },
      { name: "API REST", icon: RestIcon },
      { name: "Postman", icon: PostmanIcon },
    ],
  },
  {
    name: "Desarrollo asistido por IA",
    items: [
      { name: "Claude", icon: ClaudeIcon },
      { name: "ChatGPT", icon: ChatgptIcon },
      { name: "GitHub Copilot", icon: CopilotIcon },
    ],
  },
  {
    name: "Metodologías",
    items: [
      { name: "TDD", icon: TddIcon },
      { name: "Código Limpio", icon: CleanCodeIcon },
      { name: "Arquitectura Limpia", icon: CleanArchIcon },
      { name: "Scrum", icon: ScrumIcon },
    ],
  },
];
