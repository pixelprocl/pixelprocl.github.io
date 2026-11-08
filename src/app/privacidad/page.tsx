import Link from "next/link";

export const metadata = { title: "Aviso de privacidad" };

export default function PrivacyPage() {
  return (
    <main className="not-found">
      <div style={{ maxWidth: 620 }}>
        <span className="eyebrow">Pixel Pro</span>
        <h1 style={{ fontSize: "clamp(38px, 7vw, 64px)", letterSpacing: "-.05em" }}>Aviso de privacidad</h1>
        <p>El formulario de este sitio valida los datos en tu navegador y prepara un mensaje en WhatsApp. La información no se transmite al completar el formulario: solo se comparte con WhatsApp si revisas y envías el mensaje. También puedes escribir directamente al correo de contacto.</p>
        <p>Este sitio no almacena los datos del formulario en una base de datos. Para consultas relacionadas con la privacidad, utiliza los canales de contacto publicados en el sitio.</p>
        <Link className="button button-primary" href="/">Volver al inicio</Link>
      </div>
    </main>
  );
}
