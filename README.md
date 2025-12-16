# 🛍️ Productos Número 4 - Plataforma de E-commerce

Una aplicación web moderna de e-commerce desarrollada con **React** y **Vite**, con autenticación de usuarios, carrito de compras funcional y gestión de productos categorizados.

## 📋 Tabla de Contenidos

- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Complicaciones y Soluciones](#complicaciones-y-soluciones)
- [Mejoras Realizadas](#mejoras-realizadas)

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca UI para construir interfaces interactivas
- **Vite 7.1.7** - Herramienta de construcción super rápida y moderna
- **React Router DOM 7.9.6** - Enrutamiento de aplicación de una sola página (SPA)
- **Font Awesome 7.1.0** - Iconografía profesional

### Herramientas de Desarrollo
- **ESLint 9.36.0** - Linter para mantener código limpio
- **SWC** - Compilador ultra-rápido para JavaScript/TypeScript

### Gestión de Estado
- **Context API** - Manejo global de estado (Carrito y Autenticación)
- **Custom Hooks** - `useCartContext` y `useAuthContext` para acceso fácil al estado

---

## ✨ Características

✅ **Autenticación de Usuarios**
- Sistema de login protegido
- Rutas protegidas para usuarios autenticados
- Gestión de sesión con Context API

✅ **Carrito de Compras**
- Agregar/eliminar productos
- Ajustar cantidades
- Cálculo automático de totales
- Procesar checkout

✅ **Catálogo de Productos**
- Productos categorizados (Destacados, Mayorista, Minorista)
- Búsqueda y filtrado por categoría
- Detalles completos de cada producto

✅ **Diseño Responsive**
- Adapta perfectamente a celulares, tablets y desktops
- Grid adaptativo con CSS Grid
- Tipografía fluida con `clamp()`
- Efectos hover suaves

✅ **Componentes Reutilizables**
- Item individual de producto
- ItemList para listados
- Navbar con contador de carrito
- Cart con gestión de items

---

## 📦 Instalación

### Requisitos previos
- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Pasos

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd ProductosNumero4
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar el servidor de desarrollo**
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

4. **Build para producción**
```bash
npm run build
```

---

## 💻 Uso

### Flujo Principal
1. El usuario llega a la página de inicio
2. Puede navegar por categorías (Destacados, Mayorista, Minorista)
3. Hace clic en un producto para ver detalles
4. Agrega productos al carrito
5. Accede al carrito para revisar su compra
6. Realiza el checkout

### Estructura de Rutas
- `/` - Página de inicio
- `/category/:categoryName` - Productos por categoría
- `/detail/:id` - Detalle del producto
- `/cart` - Carrito de compras
- `/admin` - Panel de administrador (ruta protegida)
- `/login` - Login de usuarios

---

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── Cart/               # Carrito de compras
│   ├── Count/              # Contador de cantidad
│   ├── Item/               # Producto individual (MEJORADO)
│   ├── ItemDetail/         # Detalle completo de producto
│   ├── ItemDetailContainer/
│   ├── ItemList/           # Lista de productos (MEJORADO)
│   ├── ItemListContainer/
│   ├── Login/              # Autenticación
│   ├── Navbar/             # Barra de navegación
│   ├── RutaProtegida/      # Componente para rutas protegidas
│   └── productList/
├── context/
│   ├── AuthContext/        # Contexto de autenticación
│   └── CartContext/        # Contexto de carrito (MEJORADO)
├── services/
│   ├── products.js         # Servicios de productos
│   └── uploadImage.js      # Carga de imágenes
├── Layouts/
│   ├── MainLayout.jsx      # Layout principal (MEJORADO)
│   └── AdminLayout.jsx
├── utils/
│   └── validateProduct.js  # Validaciones
├── App.jsx                 # Componente raíz
└── main.jsx                # Punto de entrada
```

---

## 🛠️ Proceso de Desarrollo

### Fase 1: Estructuración Inicial
- Setup del proyecto con Vite y React
- Configuración de React Router para navegación
- Implementación de Context API para estado global

### Fase 2: Componentes Core
- Desarrollo de componentes base (Item, ItemList, Cart)
- Integración con datos de productos
- Sistema de autenticación básico

### Fase 3: Mejoras CSS y Responsive
- Rediseño completo de estilos con focus en UX
- Implementación de media queries robustos
- Uso de `clamp()` para tipografía fluida
- Grid CSS para layout adaptativo

### Fase 4: Optimización
- Corrección de errores de importación
- Mejora del hook `useCartContext`
- Optimización del código de componentes

---

## ⚠️ Complicaciones y Soluciones

### 1. **Error: "Failed to resolve import .../../context/CartContext/useCartContext"**

**Problema:**
El archivo se llamaba `UserCartContext.js` pero se importaba como `useCartContext`.

**Solución:**
```javascript
// ❌ Incorrecto
import { useCartContext } from ".../../context/CartContext/useCartContext";

// ✅ Correcto
import { useCartContext } from ".../../context/CartContext/UserCartContext";
```

### 2. **Error: "Navbar does not provide an export named 'Navbar'"**

**Problema:**
`MainLayout.jsx` importaba con destructuring `{ Navbar }`, pero el componente usaba `export default`.

**Solución:**
```javascript
// ❌ Incorrecto
import { Navbar } from "../components/Navbar/Navbar"
<Nav /> {/* Nombre incorrecto */}

// ✅ Correcto
import Navbar from "../components/Navbar/Navbar"
<Navbar />
```

## 🎨 Mejoras Realizadas

### CSS y Diseño Responsivo
✅ **Tipografía Fluida** - Uso de `clamp()` para tamaños que se adapten suavemente
```css
font-size: clamp(1rem, 4vw, 1.25rem);
```

✅ **Grid Adaptativo** - Diferentes columnas según pantalla
- Celulares: 1 columna
- Tablets: 2 columnas
- Desktops: 3-4 columnas

✅ **Transiciones Suaves** - Efectos hover mejorados
```css
transition: transform 0.18s ease, box-shadow 0.18s ease;
```

✅ **Sombras y Profundidad** - Box-shadow coherente
```css
box-shadow: 0 6px 18px rgba(0,0,0,0.08);
```

### Código y Estructura
✅ Corrección de imports/exports inconsistentes
✅ Uso correcto de hooks personalizados
✅ Componentes mejor organizados
✅ CSS modular y mantenible

---

## 🚀 Próximas Mejoras Sugeridas

- [ ] Agregar paginación al catálogo
- [ ] Implementar búsqueda de productos
- [ ] Persistencia de carrito en localStorage
- [ ] Sistema de reviews/ratings
- [ ] Integración con pasarela de pago
- [ ] Dashboard admin mejorado
- [ ] Dark mode
- [ ] Internacionalización (i18n)

---



## 👨‍💻 Autor

Desarrollado como proyecto de e-commerce con React y Vite por Pablo Perez

---

**Última actualización:** 14 de diciembre de 2025
