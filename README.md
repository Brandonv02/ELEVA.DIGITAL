# ELEVA

Web oficial de ELEVA — *Digital solutions for businesses*.

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4.

---

## Arrancar

```bash
npm install
cp .env.example .env.local   # y rellena los valores
npm run dev
```

| Script | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run typecheck` | Comprueba tipos sin emitir |

---

## Antes de publicar

Nada de esto está inventado en el código: mientras falte, la web muestra un
placeholder entre corchetes y no genera el enlace. En desarrollo aparece un
aviso abajo a la izquierda con la lista de lo que falta.

- [ ] `NEXT_PUBLIC_SITE_URL` — **imprescindible**. Sin él, `robots.txt` sirve
      `Disallow: /` a propósito, para que una URL de preview no acabe indexada.
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` — solo dígitos, formato internacional.
      Alimenta los seis CTA de WhatsApp de la página.
- [ ] `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] `NEXT_PUBLIC_PHONE_DISPLAY`
- [ ] `NEXT_PUBLIC_CITY`
- [ ] `NEXT_PUBLIC_INSTAGRAM_URL`, `NEXT_PUBLIC_LINKEDIN_URL`
- [ ] Confirmar responsable legal, correo para solicitudes, fecha de vigencia,
      jurisdicción y el procedimiento de derechos → placeholders centralizados
      en `lib/legal.ts`; las páginas legales ya están publicadas en el sitio.
- [ ] Foto real de Brandon en formato 4:5 → el Founder conserva un placeholder
      visual hasta recibirla.
- [ ] Incorporar proyectos reales cuando puedan publicarse → la lista de
      `components/sections/Projects.tsx` parte vacía y no muestra casos ficticios.

---

## Arquitectura

```
app/
  layout.tsx            Fuentes, metadata, Open Graph, skip link
  page.tsx              Composición de la Home
  json-ld.tsx           Datos estructurados (solo datos reales)
  globals.css           Tokens del design system + base + utilidades
  robots.ts sitemap.ts  SEO técnico
  icon.svg apple-icon.tsx opengraph-image/route.tsx   Assets de marca generados

components/
  ui/         Piezas reutilizables: Button, Card, Badge, Container,
              Section, SectionHeader, Eyebrow, Logo, Icon, Reveal, ContactLink
  layout/     Navbar, Footer, MobileStickyCta
  sections/   Hero, DeliverableMockup, Problem, Services, Care,
              Process, Projects, Founder, Cta
  dev/        EnvNotice (solo en desarrollo)

lib/
  site.ts     Configuración y datos de contacto con placeholders
  content.ts  Servicios, precios, planes CARE, proceso, problemas
  utils.ts    cn()

design/       Artboards aprobados del design system (no entra en el build)
```

### Dónde se cambia cada cosa

- **Precios, planes, copy de servicios** → `lib/content.ts`.
- **Colores, tipografía, radios, movimiento** → bloque `@theme` de
  `app/globals.css`. Es la traducción 1:1 de `design/Foundations.dc.html`.
- **Datos de contacto** → variables de entorno, nunca hardcodeados.

---

## Design system

Los tokens salen de `design/Foundations.dc.html`. Reglas que el código respeta:

- **Un solo azul sólido por pantalla visible.** El resto del azul es borde,
  texto o halo.
- **Contraste**: `#767E8D` es el gris más claro admitido para texto (4.8:1
  sobre carbón). Sobre la banda clara, el mínimo es `#5A6373` (5.8:1). Los
  rellenos sólidos usan `#2558E6` para que el blanco quede a 5.8:1.
  `#4E5563` queda reservado a estados deshabilitados.
- **Ritmo vertical variable**: cada sección tiene su densidad, definida por la
  prop `rhythm` de `<Section>`.
- **Iconos**: un solo estilo, trazo 1.8 sobre grid de 24. Nunca emoji.

### Movimiento

- Hover de cards y botones: 250ms, curva `cubic-bezier(0.16, 1, 0.3, 1)`.
- Entrada al scroll: opacidad + 16px, **una sola vez**, escalonada 80ms.
- Un único movimiento ambiental: el halo azul del hero y del CTA.
- `prefers-reduced-motion` desactiva todo.
- El estado oculto de las entradas vive bajo la clase `.js` que añade un
  script en línea del `<head>`: **sin JavaScript la página se ve completa**.
  Nunca se esconde texto detrás de una animación.

---

## Rendimiento

- Las páginas se prerenderizan estáticamente; la imagen Open Graph se genera
  bajo demanda. ~108 kB de JS en la primera carga.
- Cero imágenes de mapa de bits: logo, iconos y la maqueta del hero son SVG y
  CSS. No hay peticiones de red más allá del documento, el CSS y el JS.
- Fuentes autoalojadas con `next/font` (Sora, Manrope, JetBrains Mono),
  subset latino, `display: swap`.
- La maqueta del hero se dibuja a tamaño fijo y se escala con `transform`
  dentro de un contenedor de altura fija por breakpoint: no reflows ni
  scroll horizontal.

---

## Notas de implementación

- **`hidden` sobre un `<Button>` no funciona**: la clase base del botón trae
  `inline-flex` y gana según el orden del CSS, no del atributo. Para ocultarlo
  por breakpoint, envuélvelo en un `<span className="hidden sm:block">`.
- **La maqueta del hero es una demo**, no un cliente real: la identidad va
  entre corchetes (`[ TU NEGOCIO ]`, `[ Sector ]`) a propósito.
- **Breakpoints**: los planes pasan a tres columnas en `lg`; el proceso, a
  cinco en `xl`. Entre medias se apilan, que es más legible que apretarlos.
