import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div>
        <span className="eyebrow">Página no encontrada</span>
        <h1>404</h1>
        <p>La página que buscas no está disponible o ya no existe.</p>
        <Link className="button button-primary" href="/">Volver al inicio</Link>
      </div>
    </main>
  );
}
