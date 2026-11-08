import {
  AppWindow,
  CalendarDays,
  Code2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const services: {
  number: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  id: string;
}[] = [
  {
    number: "01",
    title: "Diseño y desarrollo web",
    description:
      "Sitios web modernos y adaptables que presentan tu negocio con claridad y convierten visitas en conversaciones.",
    features: ["Diseño responsive", "Rendimiento y SEO técnico", "Sitios a medida"],
    icon: AppWindow,
    id: "web",
  },
  {
    number: "02",
    title: "Sistemas de agendamiento",
    description:
      "Organiza reservas, clientes y horas con un sistema pensado para la manera en que funciona tu negocio.",
    features: ["Reservas y horarios", "Gestión de clientes", "Panel administrativo"],
    icon: CalendarDays,
    id: "agendamiento",
  },
  {
    number: "03",
    title: "Aplicaciones Android",
    description:
      "Aplicaciones personalizadas y prototipos funcionales para llevar tus servicios e ideas al entorno móvil.",
    features: ["Experiencias móviles", "Prototipos funcionales", "Soluciones específicas"],
    icon: AppWindow,
    id: "android",
  },
  {
    number: "04",
    title: "Software personalizado",
    description:
      "Herramientas digitales que simplifican tareas, conectan procesos y responden a necesidades concretas.",
    features: ["Sistemas internos", "Automatización", "Integración de procesos"],
    icon: Workflow,
    id: "software",
  },
];

export const projects = [
  {
    number: "01",
    name: "NA Másoterapeuta",
    category: "Sistema de agendamiento",
    kind: "Proyecto de cliente",
    description:
      "Sistema de reservas que muestra los servicios desde Google Sheets y agrega las horas agendadas al Google Calendar.",
    technologies: ["Google Sheets", "Google Calendar", "Agendamiento"],
    visual: "calendar",
    image: "/images/projects/na-masoterapeuta.png",
    imageAlt: "Sitio de NA Másoterapeuta con presentación de servicios de masoterapia y reservas.",
  },
  {
    number: "02",
    name: "Random Dungeon",
    category: "Aplicación Android",
    kind: "Aplicación de juego de mesa",
    description:
      "Aplicación para partidas de juego de mesa: gestiona jugadores y enemigos, registra puntos de vida y conserva el historial.",
    technologies: ["Android", "Gestión de partidas", "Historial"],
    visual: "mobile",
    image: "/images/projects/random-dungeon.png",
    imageAlt: "Captura de Random Dungeon mostrando enemigos, jugadores y puntos de vida.",
  },
  {
    number: "03",
    name: "Casa Agurto",
    category: "Sitio web y plataforma de gestión",
    kind: "Proyecto en desarrollo",
    description:
      "Proyecto para una empresa chilena que desarrolla y fabrica palos de golf. Contempla contacto para ventas, administración, rifas y base de datos.",
    technologies: ["Sitio web", "Panel autoadministrable", "Rifas"],
    visual: "website",
    image: "/images/projects/casa-agurto.png",
    imageAlt: "Diseño de Casa Agurto, empresa chilena dedicada a fabricar palos de golf.",
  },
];

export const faqs = [
  {
    question: "¿Qué tipo de páginas web desarrollan?",
    answer:
      "Creamos sitios corporativos, informativos, landing pages y experiencias web personalizadas. No ofrecemos tiendas online ni carritos de compra.",
  },
  {
    question: "¿Desarrollan sistemas personalizados?",
    answer:
      "Sí. Podemos desarrollar sistemas internos, herramientas de gestión y automatizaciones según los procesos y necesidades de tu negocio.",
  },
  {
    question: "¿Puedo solicitar cambios a un proyecto?",
    answer:
      "Sí. Los ajustes y su alcance se conversan de acuerdo con los requerimientos del proyecto.",
  },
  {
    question: "¿Cuánto demora el desarrollo?",
    answer:
      "El plazo depende del alcance, las funcionalidades y los materiales del proyecto. Lo definimos al revisar tus necesidades.",
  },
  {
    question: "¿Cómo funciona el sistema de agendamiento?",
    answer:
      "Se adapta a cómo atiende tu negocio e incluye gestión de reservas y horas. El sistema tiene un precio de $500.000 CLP; el alcance se acuerda según tus requerimientos.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer:
      "Cuéntanos qué hace tu negocio, qué necesitas resolver y qué resultado buscas. Con esa información podemos conversar sobre el alcance adecuado.",
  },
  {
    question: "¿Cómo puedo solicitar una cotización?",
    answer:
      "Escríbenos mediante el formulario o WhatsApp y describe brevemente tu idea. Te contactaremos para conversar sobre lo que necesitas.",
  },
];
