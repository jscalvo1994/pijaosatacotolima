# PijaosPage

PijaosPage es un proyecto web construido con **Next.js 13+**, diseñado para representar y preservar la identidad cultural y los valores de la comunidad indígena Pijao. Este proyecto utiliza **React**, **Tailwind CSS**, y una estructura modular para facilitar la escalabilidad.

---

## **Características principales**

- **Acceso público**:
  - Todas las rutas actuales son de acceso público.
- **Sección "Quiénes Somos"**:
  - Presenta la misión y visión de la comunidad.
  - Detalla los principios y valores fundamentales en formato de cards.
- **Sección "Nuestras Comunidades"**:
  - Lista de comunidades indígenas con imágenes y enlaces específicos a cada una.
  - Una sección con videos de YouTube relacionados con la comunidad.
- **Diseño responsivo**:
  - Adaptado para móviles, tablets y pantallas grandes.
- **Organización modular**:
  - Componentes separados por contexto para facilitar el mantenimiento.

---

## **Estructura del proyecto**

src/├── app/
│ ├── about/
│ │ ├── page.tsx # Página "Quiénes Somos"
│ │ └── components_about/ # Componentes específicos de esta sección
│ │ ├── CardGrup.tsx
│ │ ├── CardGrup2.tsx
│ │ └── MissionVision.tsx
│ ├── communities/
│ │ ├── page.tsx # Página "Nuestras Comunidades"
│ │ └── components_communities/ # Componentes específicos de esta sección
│ │ ├── CardGroupCommunities.tsx
│ │ ├── CardGroupVideos.tsx
│ │ └── Carrousel.tsx
│ ├── contact/
│ │ └── page.tsx # Página "Contacto"
│ ├── layout.tsx # Layout global (Navbar + Footer)
│ ├── globals.css # Estilos globales del proyecto
├── components/
│ ├── Footer.tsx # Componente global Footer
│ ├── Navbar.tsx # Componente global Navbar
│ ├── Maps.tsx # Componente para integrar mapas
│ ├── TeamSection.tsx # Sección para el equipo
├── features/ # Actualmente vacío
├── layouts/ # Actualmente vacío
├── pages/ # Actualmente vacío
├── tests/ # Carpeta para pruebas (vacía)

---

## **Tecnologías utilizadas**

- **Framework:** [Next.js 13+](https://nextjs.org/)
- **Frontend:** React, Tailwind CSS
- **Imágenes:** Next.js `<Image>` para optimización.
- **Videos:** Embeds de YouTube con `<iframe>`.

---

## **Cómo ejecutar el proyecto**

### 1. Clonar el repositorio

````bash
git clone https://github.com/tu-usuario/pijaospage.git
cd pijaospage
---
### 2. Instalar dependencias
```bash
npm install
### 3. Iniciar servidor de desarrollo
```bash
npm run dev
---
### 4. Abrir en el navegador
Accede a http://localhost:3000.

Próximos pasos
1. Funcionalidades pendientes:
Autenticación:
Implementar protección para secciones privadas con NextAuth.
Integración de mapas interactivos:
Añadir funcionalidad en el componente Maps.tsx para mostrar ubicaciones relevantes.
Sección de contacto:
Diseñar e implementar un formulario de contacto funcional.
2. Carpetas vacías por definir:
features/:
Para funcionalidades específicas como autenticación o lógica avanzada.
layouts/:
Diseños adicionales si se divide entre vistas públicas y privadas.
tests/:
Implementar pruebas unitarias e integrales.
````

## **Actualización reciente: Configuración de envío de correos con Nodemailer**

### **1. Implementación de una API para enviar correos**

Se creó una API personalizada en `src/pages/api/send-mail.ts` que utiliza **Nodemailer** para enviar correos electrónicos. Esta funcionalidad permite:

- Enviar un mensaje al correo principal configurado en el archivo `.env`(configuracion local).
- Enviar una copia del mensaje al remitente.

### **2. Configuración de variables de entorno**

Se añadieron nuevas variables de entorno para la configuración del transporte SMTP en el archivo `.env`. Estas variables incluyen:

```env
EMAIL_HOST=smtp.ejemplo.com
EMAIL_PORT=587
EMAIL_USER=tu-usuario
EMAIL_PASS=tu-contraseña
EMAIL_FROM=Tu Nombre <tu-email@ejemplo.com>
En el despliegue de next se configuaran y se probaran pero si sale error se aplazara la solucion para otro momento
```
