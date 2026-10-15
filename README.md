# Paradise Nursery 🌿

Front-end de una tienda en línea de plantas de interior, construido con **React** y **Redux Toolkit** (proyecto final).

## Funcionalidades

- **Página de aterrizaje:** imagen de fondo, nombre de la empresa, párrafo "Sobre nosotros" y botón **Comenzar** que lleva al listado de plantas.
- **Listado de productos:** 18 plantas de interior en 3 categorías (aromáticas, purificadoras del aire y tropicales), cada una con miniatura, nombre y precio. El botón **Añadir a la cesta** se desactiva tras añadir la planta y el icono del carrito se actualiza.
- **Carrito de compras:** total de plantas, costo total, miniatura/nombre/precio unitario/subtotal por planta, botones para aumentar y disminuir cantidad, botón eliminar, **Continuar comprando** y **Pagar** (muestra "Próximamente").
- **Cabecera:** presente en plantas y carrito, con enlaces a Inicio, Plantas y Carrito y un contador dinámico de artículos.

## Estructura

| Archivo | Descripción |
| --- | --- |
| `src/App.jsx` / `src/App.css` | Página de aterrizaje y navegación entre páginas |
| `src/AboutUs.jsx` | Texto sobre la empresa |
| `src/CartSlice.jsx` | Slice de Redux (`addItem`, `removeItem`, `updateQuantity`) |
| `src/store.js` | Store de Redux |
| `src/ProductList.jsx` | Listado de productos por categoría |
| `src/CartItem.jsx` | Página del carrito |
| `src/Navbar.jsx` | Cabecera con contador del carrito |

## Ejecutar en local

```bash
npm install
npm run dev
```

## Despliegue en GitHub Pages

El repositorio incluye el workflow `.github/workflows/deploy.yml`. Pasos:

1. Sube el código a un repositorio **público** de GitHub (rama `main`).
2. En **Settings → Pages**, elige **Source: GitHub Actions**.
3. Cada `push` a `main` compila y publica la aplicación en `https://<tu-usuario>.github.io/<repositorio>/`.
