# Around — Galería social con perfil (React + Vite + REST API)

**Demo:** https://lina079.github.io/web_project_around/  
**Stack:** React 18/19 · Vite · CSS · ESLint · GitHub Pages · REST API

## 🧭 Resumen 

Aplicación tipo “galería social” donde un usuario:
- Edita su **perfil** (nombre / bio / avatar)
- **Crea** y **elimina** tarjetas con imagen y título
- **Da/quita likes** a las tarjetas
- Interactúa con **modales** (popups), formularios validados y confirmaciones

**Qué evaluará un equipo técnico aquí:**
- Integración con **REST API** (GET/POST/DELETE/PUT/PATCH)
- Gestión de estado con **hooks** y **Context API**
- Componentización, **accesibilidad básica** y responsive
- Empaquetado con **Vite** y **deploy** en GitHub Pages

---

## ✨ Funcionalidades

- **Perfil del usuario:** edición de nombre, descripción y avatar.
- **Tarjetas (cards):** crear, listar, eliminar, like/unlike.
- **Modales (UI/UX):** formularios y confirmaciones con enfoque accesible (focus trap básico).
- **Validación:** campos requeridos y feedback visual.
- **Consumo de API:** sincronización de estado local con servidor (efectos y manejo de errores).
- **Responsive:** estilos adaptados (mobile-first).

> **API:** durante el desarrollo se usó el endpoint de formación de TripleTen (endpoints tipo `me`, `cards`, etc.).

---

## 🧱 Arquitectura & decisiones

- **React + Vite** para desarrollo rápido y build eficiente.
- **Context API** para compartir el usuario actual entre componentes.
- **Componentes reutilizables** (`Popup`, `NewCard`, `ConfirmDelete`, etc.) para escalar sin duplicación.
- **Reglas ESLint** para mantener estilo y calidad.
- **Rutas de assets base-aware** (compatibles con GitHub Pages).

**Estructura simplificada**
src/
components/
Card/
EditProfile/
Header/
Popup/
Profile/
...
contexts/
CurrentUserContext.js
pages/
index.css
scripts/
api.js // capa de acceso a la API (fetch)
formValidator.js
...
public/
vite.config.js

---

## 🚀 Cómo levantar en local

```bash
# 1) clona el repo
git clone https://github.com/Lina079/web_project_around.git
cd web_project_around

# 2) instala dependencias
npm install

# 3) ejecuta en desarrollo (Vite)
npm run dev
# abre la URL que te muestra Vite (http://localhost:3000 por defecto)
```
```
# build de producción
npm run build

# despliegue a GitHub Pages (rama gh-pages)
npm run deploy
```

---

### 🔍 Lo que aprendí construyendo este proyecto

- Conectar un frontend React a una REST API real con CRUD.

- Manejar estado, efectos y contexto en React de forma limpia.

- Crear componentes modales y formularios con validación.

- Ajustar el build para GitHub Pages (rutas, assets, 404 fallback).

- Hacer troubleshooting de despliegue (ramas, gh-pages, base URLs).

### 📌 Próximos pasos

- Guardar tokens/keys de forma segura según el backend objetivo.

- Tests unitarios de componentes críticos (React Testing Library).

- Mejoras de accesibilidad (focus management completo en modales).

- Migrar estilos a CSS Modules o Styled Components.

### 👩‍💻 Autor

Lina Castro — Full Stack Dev Jr.
LinkedIn: https://www.linkedin.com/in/lina-castro079/

GitHub: https://github.com/Lina079
