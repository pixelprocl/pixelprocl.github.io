# Pixel Pro

Sitio corporativo estático de Pixel Pro, construido con Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion y Lucide React. Se publica en GitHub Pages mediante GitHub Actions.

## Requisitos

- Node.js 20.9 o posterior.
- npm.

## Ejecución local

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos

- `npm run dev`: inicia el servidor local de desarrollo.
- `npm run typecheck`: comprueba los tipos TypeScript.
- `npm run build`: genera la web estática en `out/`.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado **`pixelprocl.github.io`** en la cuenta `pixelprocl`.
2. Sube el contenido de este proyecto a la rama `main`, incluyendo `package-lock.json`.
3. En el repositorio, ve a **Settings → Pages → Build and deployment** y selecciona **GitHub Actions** como fuente.
4. El workflow `.github/workflows/deploy.yml` compila y publica el sitio después de cada push a `main`. También se puede iniciar manualmente desde la pestaña **Actions**.
5. La dirección del sitio será [https://pixelprocl.github.io](https://pixelprocl.github.io). No se requiere dominio externo ni configuración DNS.

## Contenido y datos de contacto

- Servicios, preguntas frecuentes y proyectos: `src/data/site-content.ts`.
- Imágenes del portafolio: `public/images/projects/`.
- Datos públicos de contacto y URL canónica: `src/lib/config.ts`.
- Estilos y diseño responsive: `src/app/globals.css`.

El portafolio contiene tres proyectos proporcionados por Pixel Pro. Casa Agurto está indicado como proyecto en desarrollo. La sección de agendamiento comercial mantiene el precio definido de **$500.000 CLP** y su calendario es solo demostrativo: no crea ni almacena reservas.

## Formulario de contacto

GitHub Pages sirve sitios estáticos y no ejecuta Route Handlers ni servicios backend de Next.js. Por eso, el formulario valida los campos en el navegador y abre WhatsApp con el texto preparado. La consulta **no se envía hasta que la persona la confirme en WhatsApp**. También se ofrece un enlace directo al correo publicado en el sitio.

## Privacidad

El formulario no almacena los datos en esta web. Al continuar, la información escrita se incorpora al mensaje de WhatsApp para que el visitante la revise y decida si desea enviarla.
