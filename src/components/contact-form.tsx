"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

type Values = { name: string; email: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
const initial: Values = { name: "", email: "", phone: "", service: "", message: "" };

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Ingresa tu nombre (mínimo 2 caracteres).";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Ingresa un correo electrónico válido.";
  if (!values.service) errors.service = "Selecciona el tipo de servicio.";
  if (values.message.trim().length < 10) errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
  if (values.message.length > 3000) errors.message = "El mensaje no puede superar 3.000 caracteres.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  function update(field: keyof Values, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus(null);
  }

  function openWhatsApp() {
    if (!siteConfig.whatsappNumber) return;
    const text = [
      `Hola, soy ${values.name.trim()}.`,
      `Correo: ${values.email.trim()}`,
      values.phone.trim() ? `Teléfono: ${values.phone.trim()}` : "",
      `Servicio: ${values.service}`,
      `Proyecto: ${values.message.trim()}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setStatus(null);
    if (Object.keys(nextErrors).length) return;
    openWhatsApp();
    setStatus({
      type: "success",
      message: "Se abrirá WhatsApp con tu consulta preparada. Revísala y pulsa Enviar para contactarnos.",
    });
  }

  return (
    <form className="contact-form" id="contact-form" onSubmit={submit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Tu nombre" value={values.name} onChange={(e) => update("name", e.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "error-name" : undefined} />
        {errors.name && <span className="field-error" id="error-name">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Correo electrónico</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="tu@empresa.cl" value={values.email} onChange={(e) => update("email", e.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "error-email" : undefined} />
        {errors.email && <span className="field-error" id="error-email">{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-phone">Teléfono <span style={{ color: "#758ba0" }}>(opcional)</span></label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+56 9 1234 5678" value={values.phone} onChange={(e) => update("phone", e.target.value)} />
      </div>
      <div className="form-field">
        <label htmlFor="contact-service">Tipo de servicio</label>
        <select id="contact-service" name="service" value={values.service} onChange={(e) => update("service", e.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "error-service" : undefined}>
          <option value="">Selecciona un servicio</option>
          <option value="Diseño y desarrollo web">Diseño y desarrollo web</option>
          <option value="Sistema de agendamiento">Sistema de agendamiento</option>
          <option value="Aplicación Android">Aplicación Android</option>
          <option value="Software personalizado">Software personalizado</option>
          <option value="Otro">Otro</option>
        </select>
        {errors.service && <span className="field-error" id="error-service">{errors.service}</span>}
      </div>
      <div className="form-field full">
        <label htmlFor="contact-message">Cuéntanos sobre tu proyecto</label>
        <textarea id="contact-message" name="message" maxLength={3000} placeholder="¿Qué necesitas resolver o crear?" value={values.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "error-message" : undefined} />
        {errors.message && <span className="field-error" id="error-message">{errors.message}</span>}
      </div>
      <div className="form-bottom">
        <span className="form-privacy">Tu consulta se abrirá en WhatsApp; deberás confirmar el envío allí.</span>
        <button className="button button-primary" type="submit">
          Continuar en WhatsApp <ArrowRight size={14} />
        </button>
      </div>
      {status && <p className={`form-status${status.type === "error" ? " error" : ""}`} role="status">{status.message}</p>}
    </form>
  );
}
