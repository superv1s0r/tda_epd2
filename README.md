# Sabores de Barrio - EPD2 (Bootstrap 5.3)

Proyecto completo de la EPD2 de Tecnologias Avanzadas de Desarrollo.

## Descripcion
Web responsive de una pagina sobre rutas gastronomicas locales en Sevilla.

## Tecnologias
- HTML5
- CSS3
- JavaScript (cliente)
- Bootstrap 5.3.3

## Estructura
- `index.html`: pagina principal
- `assets/css/styles.css`: estilos personalizados
- `assets/js/main.js`: validacion del formulario y toast
- `docs/memoria.md`: memoria tecnica del proyecto en formato .md
- `docs/memoria.pdf`: memoria en formato PDF
- `docs/memoria.tex`: fichero LaTeX que se compiló en PDF
- `.github/workflows/deploy-pages.yml`: despliegue automatico a GitHub Pages

## Como ejecutar en local
Abre `index.html` en el navegador.

## Publicacion en GitHub Pages
Si desea replicar la página, puede seguir estos pasos:

1. Sube el repositorio a GitHub.
2. Asegura que la rama principal es `main`.
3. Ve a `Settings > Pages` y en `Build and deployment` selecciona `Deploy from a branch`.
4. En `Branch` selecciona `gh-pages` y carpeta `/(root)`. Guarda los cambios.
5. Haz push a `main`. El workflow `Deploy static site to GitHub Pages` actualizara la rama `gh-pages` automaticamente.

## Requisitos EPD2 cubiertos
- Uso de Bootstrap 5.3
- Uso de mas de 10 componentes Bootstrap
- Tema definido y coherente
- Sin texto de relleno
- Solo HTML/CSS/JS cliente
- Responsive
- Memoria tecnica incluida
