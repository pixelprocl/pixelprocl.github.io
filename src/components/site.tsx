"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  MousePointer2,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { faqs, projects, services } from "@/data/site-content";
import { siteConfig } from "@/lib/config";
import { ContactForm } from "@/components/contact-form";

const navItems = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Soluciones", "#soluciones"],
  ["Portafolio", "#portafolio"],
  ["Nosotros", "#nosotros"],
  ["Contacto", "#contacto"],
];

function Logo() {
  return (
    <a className="brand" href="#inicio" aria-label="Pixel Pro, inicio">
      <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M5 5h12v12H5zM23 5h12v12H23zM5 23h12v12H5z" fill="#00D4FF" fillOpacity=".85" />
        <path d="M23 23h12v12H23z" fill="#1677FF" />
        <path d="M17 11h6M11 17v6M29 17v6M17 29h6" stroke="#071426" strokeWidth="2" />
      </svg>
      <span>pixel<span className="brand-pro">pro</span></span>
    </a>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduce ? 0 : 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems
        .map(([, href]) => href)
        .filter((href) => {
          const element = document.querySelector(href);
          return element && element.getBoundingClientRect().top <= 130;
        })
        .at(-1);
      if (current) setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <button
          className="mobile-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav id="primary-navigation" className={`nav-links${open ? " mobile-open" : ""}`} aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={active === href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="button button-primary nav-cta" href="#contacto" onClick={() => setOpen(false)}>
            Solicitar cotización <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: React.ReactNode; description?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" />
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.7 }}
        >
          <div className="hero-kicker">Tecnología que impulsa ideas</div>
          <h1>Transformamos ideas en <span className="gradient-text">soluciones digitales.</span></h1>
          <p>
            Diseñamos y desarrollamos experiencias web, sistemas inteligentes y software personalizado para impulsar tu negocio.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#servicios">Conoce nuestros servicios <ArrowRight size={15} /></a>
            <a className="button button-secondary" href="#contacto">Hablemos de tu proyecto <MessageCircle size={15} /></a>
          </div>
          <div className="hero-proof"><span className="proof-dot" /> Soluciones digitales pensadas para tu negocio</div>
        </motion.div>
        <motion.div
          className="hero-art"
          initial={reduce ? false : { opacity: 0, scale: .96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0 : .8, delay: .12 }}
          aria-hidden="true"
        >
          <div className="orb"><div className="orbit"><i className="orbit-dot" /></div></div>
          <div className="float-chip chip-one"><Sparkles size={14} /> Ideas en desarrollo</div>
          <div className="float-chip chip-two"><Zap size={14} /> Soluciones a medida</div>
          <div className="hero-panel">
            <div className="panel-top">
              <div><span className="panel-dots"><i /><i /><i /></span></div>
              <span>pixelpro / solution.ts</span>
              <span className="panel-status"><i /> listo</span>
            </div>
            <div className="code-lines">
              <div className="code-line"><span className="line-number">01</span><span className="code-purple">const</span> idea = <span className="code-cyan">tuNegocio</span>;</div>
              <div className="code-line"><span className="line-number">02</span><span className="code-purple">function</span> crearSolución() {"{"}</div>
              <div className="code-line"><span className="line-number">03</span>&nbsp;&nbsp;<span className="code-blue">diseñar</span>(idea);</div>
              <div className="code-line"><span className="line-number">04</span>&nbsp;&nbsp;<span className="code-blue">desarrollar</span>(conPropósito);</div>
              <div className="code-line"><span className="line-number">05</span>&nbsp;&nbsp;<span className="code-cyan">return</span> crecimiento;</div>
              <div className="code-line"><span className="line-number">06</span>{"}"}</div>
            </div>
            <div className="panel-bottom"><span>✦</span> Tecnología diseñada para resolver problemas reales.</div>
          </div>
        </motion.div>
      </div>
      <div className="hero-bottom" />
    </section>
  );
}

function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Lo que hacemos" title={<>Tecnología para avanzar, <span className="gradient-text">a tu manera.</span></>} description="Un socio tecnológico para crear experiencias digitales, optimizar procesos y dar forma a nuevas ideas." /></Reveal>
        <div className="service-grid">
          {services.map(({ number, title, description, features, icon: Icon, id }, index) => (
            <Reveal key={id} delay={index * .07}>
              <article className="service-card">
                <span className="service-index">SERVICIO / {number}</span>
                <div className="service-icon"><Icon size={20} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="service-features">{features.map((feature) => <span key={feature}><Check size={12} />{feature}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const days = ["L", "M", "X", "J", "V", "S", "D", "27", "28", "29", "30", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  return (
    <section className="section booking-section" id="soluciones">
      <div className="container booking-layout">
        <Reveal>
          <div className="booking-copy">
            <span className="eyebrow">Una solución concreta</span>
            <h2>Tu negocio organizado. <span className="gradient-text">Tus reservas en orden.</span></h2>
            <p>Un sistema de agendamiento pensado para simplificar la administración de horas, reservas y clientes de tu negocio.</p>
            <div className="price-card"><span className="price-label">Sistema de agendamiento personalizado</span><span className="price">$500.000 CLP</span></div>
            <div><a className="button button-primary" href="#contacto">Solicitar mi sistema de agendamiento <ArrowRight size={15} /></a></div>
            <p className="booking-note">El alcance final se acuerda según los requerimientos de tu proyecto. La vista es una demostración visual: no procesa ni guarda reservas.</p>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <div className="booking-visual" aria-label="Demostración visual de un calendario de reservas, sin funcionalidad de reserva activa">
            <div className="booking-window">
              <div><div className="window-title">Agenda · Panel de reservas</div><div className="window-caption">Vista de demostración · datos ficticios</div></div>
              <span className="demo-tag">Demo</span>
            </div>
            <div className="booking-body">
              <div>
                <div className="calendar-head"><span>Octubre 2026</span><span className="calendar-controls"><ChevronLeft size={12} /><ChevronRight size={12} /></span></div>
                <div className="calendar-grid">{days.map((day, i) => <span key={`${day}-${i}`} className={`${i < 7 ? "weekday " : ""}${i === 11 ? "selected" : ""}${[9, 13, 16, 19, 23, 26, 30, 34, 37].includes(i) ? "available" : ""}`}>{day}</span>)}</div>
              </div>
              <div className="slots-column">
                <div className="slots-title">Horas disponibles · 8 oct.</div>
                <div className="slot chosen">09:00 — 09:30</div><div className="slot">10:00 — 10:30</div><div className="slot">11:30 — 12:00</div>
              </div>
            </div>
            <div className="demo-footer">Ejemplo visual con datos ficticios. No se realizan ni almacenan reservas.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const reasons: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Layers3, title: "Soluciones personalizadas", detail: "Cada proyecto responde a necesidades y procesos concretos." },
  { icon: MousePointer2, title: "Diseño moderno y adaptable", detail: "Experiencias claras que se ajustan a distintos dispositivos." },
  { icon: Zap, title: "Desarrollo orientado a objetivos", detail: "Priorizamos lo que tu negocio necesita resolver." },
  { icon: MessageCircle, title: "Comunicación directa", detail: "Conversamos contigo durante el desarrollo de tu solución." },
  { icon: Code2, title: "Tecnología escalable", detail: "Construimos con una base preparada para evolucionar." },
  { icon: ShieldCheck, title: "Atención a cada negocio", detail: "El alcance se define contigo, según los requerimientos reales." },
];

function Difference() {
  return (
    <section className="section difference-section">
      <div className="container difference-layout">
        <Reveal>
          <div className="difference-intro">
            <span className="eyebrow">La diferencia Pixel Pro</span>
            <h2>Más que tecnología. <span className="gradient-text">Un aliado digital.</span></h2>
            <p>Nos involucramos en entender lo que quieres lograr para diseñar una solución útil, bien pensada y alineada con tu negocio.</p>
            <a className="text-link" href="#contacto">Conversemos sobre tu idea <ArrowRight size={14} /></a>
          </div>
        </Reveal>
        <div className="difference-grid">
          {reasons.map(({ icon: Icon, title, detail }, index) => (
            <Reveal key={title} delay={index * .05}>
              <article className="difference-item"><div className="difference-icon"><Icon size={17} /></div><div><h3>{title}</h3><p>{detail}</p></div></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArt({ image, imageAlt, visual }: { image: string; imageAlt: string; visual: string }) {
  return (
    <div className={`project-art ${visual}`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 760px) 100vw, 33vw"
        className="project-image"
        unoptimized
      />
    </div>
  );
}

function Portfolio() {
  return (
    <section className="section portfolio-section" id="portafolio">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Proyectos" title={<>Soluciones que cobran <span className="gradient-text">vida en cada proyecto.</span></>} description="Conoce proyectos de agendamiento y aplicaciones Android, además de un sitio y plataforma de gestión actualmente en desarrollo." /></Reveal>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * .07}>
              <article className="project-card">
                <a className="project-preview" href={project.image} target="_blank" rel="noreferrer" aria-label={`Ver imagen de ${project.name} en una nueva pestaña`}>
                  <ProjectArt visual={project.visual} image={project.image} imageAlt={project.imageAlt} />
                  <span className="project-preview-label">Ver imagen <ArrowUpRight size={12} /></span>
                </a>
                <div className="project-meta"><span className="project-category">{project.category}</span><span className="concept-tag">{project.kind}</span></div>
                <div className="project-info"><h3>{project.name}</h3><p>{project.description}</p><div className="project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="nosotros">
      <div className="container about-layout">
        <Reveal>
          <div className="about-copy">
            <span className="eyebrow">Sobre Pixel Pro</span>
            <h2>La tecnología debe <span className="gradient-text">resolver problemas reales.</span></h2>
            <p>En Pixel Pro convertimos necesidades de negocio en soluciones digitales funcionales, modernas y diseñadas para crecer.</p>
            <p>Trabajamos contigo para comprender el desafío, definir el alcance y desarrollar una respuesta digital a la medida.</p>
          </div>
        </Reveal>
        <Reveal delay={.1}>
          <div className="about-visual" aria-hidden="true">
            <div className="about-square" />
            <div className="about-center"><Code2 size={40} strokeWidth={1.2} /></div>
            <div className="about-pill pill-a"><Layers3 size={13} /> Diseño digital</div>
            <div className="about-pill pill-b"><Zap size={13} /> Desarrollo</div>
            <div className="about-pill pill-c"><MousePointer2 size={13} /> Experiencia</div>
            <div className="about-pill pill-d"><Sparkles size={13} /> Innovación útil</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Conversamos sobre tu idea", "Nos cuentas qué tienes en mente y qué necesitas resolver."],
  ["02", "Analizamos tus necesidades", "Entendemos el contexto y definimos los objetivos."],
  ["03", "Diseñamos la solución", "Acordamos una propuesta alineada con tu proyecto."],
  ["04", "Desarrollamos el proyecto", "Construimos la solución definida contigo."],
  ["05", "Revisamos y entregamos", "Validamos el resultado y coordinamos la entrega."],
];

function Process() {
  return (
    <section className="section process-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Cómo trabajamos" title={<>De la idea al siguiente <span className="gradient-text">paso digital.</span></>} description="Un proceso colaborativo para avanzar con claridad desde la primera conversación." /></Reveal>
        <div className="process-grid">
          {steps.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * .06}>
              <article className="process-step"><span className="process-number">{number}</span><h3>{title}</h3><p>{description}</p></article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="section faq-section" id="preguntas">
      <div className="container faq-layout">
        <Reveal><div><span className="eyebrow">Preguntas frecuentes</span><h2 style={{ margin: "18px 0", fontSize: "clamp(36px,4vw,50px)", lineHeight: 1.08, letterSpacing: "-.05em" }}>Resolvemos tus <span className="gradient-text">dudas.</span></h2><p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.8 }}>¿Tienes otra pregunta? Estamos disponibles para conversar sobre tu proyecto.</p><a className="text-link" href="#contacto">Escríbenos <ArrowRight size={14} /></a></div></Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const expanded = active === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div className="faq-item" key={faq.question}>
                <button className="faq-question" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActive(expanded ? null : index)}>
                  {faq.question}<Plus size={16} />
                </button>
                <AnimatePresence initial={false}>
                  {expanded && <motion.div id={panelId} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .22 }}><p>{faq.answer}</p></motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contacto">
      <div className="container contact-layout">
        <Reveal>
          <div className="contact-copy">
            <span className="eyebrow">Hablemos</span>
            <h2>Tu próxima idea <span className="gradient-text">empieza aquí.</span></h2>
            <p>Cuéntanos qué necesitas y conversemos sobre una solución digital para tu negocio.</p>
            <a className="contact-channel" href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hola, quiero conversar sobre un proyecto.")}`} target="_blank" rel="noreferrer">
              <span className="channel-icon"><Mail size={18} /></span>
              <span><span className="channel-label">WhatsApp Business</span><span className="channel-value">+56 9 2056 8354</span></span>
              <ArrowUpRight size={14} color="var(--cyan)" />
            </a>
            <a className="contact-channel" href={`mailto:${siteConfig.contactEmail}`}>
              <span className="channel-icon"><MessageCircle size={18} /></span>
              <span><span className="channel-label">Correo electrónico</span><span className="channel-value">{siteConfig.contactEmail}</span></span>
              <ArrowUpRight size={14} color="var(--cyan)" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={.08}><ContactForm /></Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-about"><Logo /><p>Soluciones digitales diseñadas para resolver problemas reales y ayudar a tu negocio a avanzar.<br />Contacto: {siteConfig.contactName}</p></div>
          <div className="footer-column"><h3>Explora</h3><a href="#servicios">Servicios</a><a href="#portafolio">Portafolio</a><a href="#nosotros">Nosotros</a><a href="#contacto">Contacto</a></div>
          <div className="footer-column"><h3>Servicios</h3><a href="#servicios">Diseño web</a><a href="#soluciones">Agendamiento</a><a href="#servicios">Aplicaciones Android</a><a href="#servicios">Software personalizado</a></div>
          <div className="footer-column"><h3>Contacto</h3><a href="#contacto">Hablemos de tu proyecto</a><a href="#preguntas">Preguntas frecuentes</a><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><span>Chile · Atención digital</span></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pixel Pro. Todos los derechos reservados.</span><a href="/privacidad">Aviso de privacidad</a></div>
      </div>
    </footer>
  );
}

export function Site() {
  return (
    <>
      <Header />
      <main>
        <Hero /><Services /><Booking /><Difference /><Portfolio /><About /><Process /><FAQ /><Contact />
      </main>
      <Footer />
    </>
  );
}
