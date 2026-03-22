# Memoria del proyecto EPD2 - "Sabores de Barrio"

## 1. Objetivo y finalidad
"Sabores de Barrio" es una web de una sola pagina para promocionar rutas gastronomicas locales en Sevilla. El objetivo es mostrar una interfaz moderna, coherente y accesible aplicando Bootstrap 5.3, principios Gestalt, teoria del color, criterios tipograficos y recomendaciones WCAG.

## 2. Tecnologias usadas
- HTML5
- CSS3
- JavaScript (cliente)
- Bootstrap 5.3.3 (CDN)
- Bootstrap Icons 1.11.3 (CDN)
- Google Fonts: Bricolage Grotesque y Newsreader

## 3. Componentes Bootstrap utilizados
Se utilizan mas de 10 componentes distintos:
1. Navbar
2. Offcanvas
3. Breadcrumb
4. Carousel
5. Cards
6. Badge
7. Alert
8. Nav pills (tabs)
9. Progress
10. Accordion
11. Table responsive
12. List group
13. Form controls + validation
14. Modal
15. Toast

## 4. Criterios de diseno visual
- Tema: gastronomia local y rutas urbanas.
- Unidad estetica: paleta calida basada en tonos crema, terracota y marron.
- Tipografia: contraste entre serif expresiva para titulares (Newsreader) y sans legible para cuerpo (Bricolage Grotesque).
- Uso de imagenes contextuales reales (mercado, cocina y mesa compartida).

## 5. Leyes de Gestalt aplicadas
- Proximidad: elementos de cada bloque agrupados por secciones claras (rutas, sabores, agenda, reserva).
- Similitud: tarjetas de rutas con estructura y estilos consistentes.
- Jerarquia figura/fondo: encabezado con gradientes y bloques contrastados para guiar la atencion.
- Continuidad: flujo lineal del contenido y CTA visibles en cada etapa.

## 6. Color y tipografia
- Colores principales:
  - Fondo principal: #FFFAF2
  - Fondo contraste: #F3ECE0
  - Texto principal: #1E1C1A
  - Marca principal: #C2410C
  - Marca secundaria: #7C2D12
  - Acento funcional: #0F766E
- Tipografias:
  - Titulos: Newsreader
  - Cuerpo: Bricolage Grotesque

## 7. Accesibilidad (WCAG)
Medidas aplicadas:
- Estructura semantica con `header`, `main`, `section`, `footer`.
- Enlace "Saltar al contenido" para navegacion por teclado.
- Textos alternativos descriptivos en imagenes del carrusel.
- Estados `focus-visible` reforzados en controles interactivos.
- Contraste de color revisado para texto principal y elementos de accion.
- Formularios con etiquetas asociadas, feedback de error y validacion.
- Respeto de `prefers-reduced-motion` para reducir animaciones.
- Atributos ARIA en offcanvas, tabs, acordeon y toast.

## 8. Responsive y compatibilidad
- Diseno mobile-first.
- Uso de grid, utilidades responsivas y componentes adaptativos de Bootstrap.
- Pruebas previstas en Chrome, Firefox y Safari para verificar comportamiento equivalente.

## 9. Enlaces y recursos externos
- Bootstrap docs: https://getbootstrap.com/docs/5.3/
- Bootstrap Icons: https://icons.getbootstrap.com/
- Google Fonts: https://fonts.google.com/
- Unsplash (imagenes):
  - https://images.unsplash.com/photo-1555396273-367ea4eb4db5
  - https://images.unsplash.com/photo-1547592166-23ac45744acd
  - https://images.unsplash.com/photo-1504674900247-0877df9cc836

## 10. Problemas encontrados y solucion
- Problema: mantener contraste alto con una paleta calida.
  - Solucion: se fijaron tonos oscuros para texto y botones clave, reservando colores suaves al fondo.
- Problema: evitar una estetica generica.
  - Solucion: identidad visual propia con tipografia editorial, gradientes y tarjetas con estilo.
- Problema: validacion de formulario sin backend.
  - Solucion: validacion nativa + JavaScript para feedback y toast de confirmacion.

## 11. Enlace a repositorio y GitHub Pages
- Repositorio publico: [pendiente de completar tras publicar]
- GitHub Pages: [pendiente de completar tras activar Pages]

## 12. Capturas de pantalla
Para la entrega final en PDF, anadir capturas de:
1. Hero y navegacion
2. Seccion rutas
3. Seccion sabores + acordeon
4. Tabla agenda
5. Formulario con validacion
6. Vista movil (menu offcanvas)
