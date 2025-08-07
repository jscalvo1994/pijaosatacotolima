# PijaosPage

PijaosPage es un proyecto web construido con **Next.js 13+**, diseñado para representar y preservar la identidad cultural y los valores de la comunidad indígena Pijao. Este proyecto utiliza **React**, **NextAuth**, **Tailwind CSS**, y una estructura modular para facilitar la escalabilidad y la autenticación de usuarios.

---

## **Características principales**

- **Autenticación de usuarios**:
  - Inicio de sesión con Google mediante **NextAuth**.
  - Gestión de rutas protegidas según el estado de sesión del usuario.
- **Sección "Quiénes Somos"**:
  - Presenta la misión y visión de la comunidad.
  - Detalla los principios y valores fundamentales en formato de cards.
- **Sección "Nuestras Comunidades"**:
  - Lista de comunidades indígenas con imágenes y enlaces específicos a cada una.
  - Una sección con videos de YouTube relacionados con la comunidad.
- **Sección "Login" (antes "Contacto")**:
  - Página rediseñada para gestionar el inicio de sesión de los usuarios.
- **Diseño responsivo**:
  - Adaptado para móviles, tablets y pantallas grandes.
- **Organización modular**:
  - Componentes separados por contexto para facilitar el mantenimiento.

---

## **Estructura del proyecto**

```plaintext
src/
├── app/
│   ├── about/                  # Página "Quiénes Somos"
│   │   ├── page.tsx
│   ├── communities/            # Página "Nuestras Comunidades"
│   │   ├── page.tsx
│   ├── dashboard/              # Dashboard para usuarios autenticados
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── login/                  # Página de inicio de sesión
│   │   ├── page.tsx
│   │   ├── test/               # Pruebas relacionadas con el Login
│   ├── layouts/                # Diseño para rutas protegidas
│   │   ├── ProtectedRoute.tsx
├── components/                 # Componentes globales
│   ├── components_about/       # Componentes específicos de "Quiénes Somos"
│   ├── components_communities/ # Componentes específicos de "Nuestras Comunidades"
│   ├── components_contact/     # Componentes relacionados con mapas y secciones del proyecto
│   │   ├── ContactPage.tsx
│   │   ├── Maps.tsx
│   │   ├── Carrousel.tsx
│   ├── Navbar.tsx              # Barra de navegación global
│   ├── Footer.tsx              # Pie de página global
├── pages/
│   ├── api/
│   │   ├── auth/               # Configuración de NextAuth
│   │   │   ├── [...nextauth].ts
├── services/                   # Servicios globales del proyecto
├── middleware.ts               # Middleware para proteger rutas
├── globals.css                 # Estilos globales del proyecto

Tecnologías utilizadas
Framework: Next.js 13+
Autenticación: NextAuth.js
Frontend: React, Tailwind CSS
Gestión de rutas protegidas: Middleware de Next.js
Videos: Embeds de YouTube con <iframe>.
Imágenes: Componente optimizado <Image> de Next.js.
```

Actualización del README
Con base en tu solicitud, aquí tienes un README.md actualizado que refleja los cambios recientes, como la integración del inicio de sesión (Login), la eliminación de la funcionalidad de envío de correos, y la estructura actualizada del proyecto:

markdown
Copiar código

# PijaosPage

PijaosPage es un proyecto web construido con **Next.js 13+**, diseñado para representar y preservar la identidad cultural y los valores de la comunidad indígena Pijao. Este proyecto utiliza **React**, **NextAuth**, **Tailwind CSS**, y una estructura modular para facilitar la escalabilidad y la autenticación de usuarios.

---

## **Características principales**

- **Autenticación de usuarios**:
  - Inicio de sesión con Google mediante **NextAuth**.
  - Gestión de rutas protegidas según el estado de sesión del usuario.
- **Sección "Quiénes Somos"**:
  - Presenta la misión y visión de la comunidad.
  - Detalla los principios y valores fundamentales en formato de cards.
- **Sección "Nuestras Comunidades"**:
  - Lista de comunidades indígenas con imágenes y enlaces específicos a cada una.
  - Una sección con videos de YouTube relacionados con la comunidad.
- **Sección "Login" (antes "Contacto")**:
  - Página rediseñada para gestionar el inicio de sesión de los usuarios.
- **Diseño responsivo**:
  - Adaptado para móviles, tablets y pantallas grandes.
- **Organización modular**:
  - Componentes separados por contexto para facilitar el mantenimiento.

---

## **Estructura del proyecto**

```plaintext
src/
├── app/
│   ├── about/                  # Página "Quiénes Somos"
│   │   ├── page.tsx
│   ├── communities/            # Página "Nuestras Comunidades"
│   │   ├── page.tsx
│   ├── dashboard/              # Dashboard para usuarios autenticados
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   ├── login/                  # Página de inicio de sesión
│   │   ├── page.tsx
│   │   ├── test/               # Pruebas relacionadas con el Login
│   ├── layouts/                # Diseño para rutas protegidas
│   │   ├── ProtectedRoute.tsx
├── components/                 # Componentes globales
│   ├── components_about/       # Componentes específicos de "Quiénes Somos"
│   ├── components_communities/ # Componentes específicos de "Nuestras Comunidades"
│   ├── components_contact/     # Componentes relacionados con mapas y secciones del proyecto
│   │   ├── ContactPage.tsx
│   │   ├── Maps.tsx
│   │   ├── Carrousel.tsx
│   ├── Navbar.tsx              # Barra de navegación global
│   ├── Footer.tsx              # Pie de página global
├── pages/
│   ├── api/
│   │   ├── auth/               # Configuración de NextAuth
│   │   │   ├── [...nextauth].ts
├── services/                   # Servicios globales del proyecto
├── middleware.ts               # Middleware para proteger rutas
├── globals.css # Estilos globales del proyecto

- ##Tecnologías utilizadas
Framework: Next.js 13+
Autenticación: NextAuth.js
Frontend: React, Tailwind CSS
Gestión de rutas protegidas: Middleware de Next.js
Videos: Embeds de YouTube con <iframe>.
Imágenes: Componente optimizado <Image> de Next.js.
Cómo ejecutar el proyecto

### **1. Clonar el repositorio**
bash
Copiar código
git clone https://github.com/tu-usuario/pijaospage.git
cd pijaospage
###**2. Instalar dependencias**
bash
Copiar código
npm install
###**3. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

plaintext
Copiar código

NEXTAUTH_SECRET=tu-clave-secreta
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=tu-google-client-id
GOOGLE_CLIENT_SECRET=tu-google-client-secret

###**4. Iniciar servidor de desarrollo**
bash
npm run dev
Abre tu navegador en http://localhost:3000.

###**5. Construir para producción
bash
npm run build

Próximos pasos
-Optimización del Dashboard:
-Mejorar la interfaz del Dashboard con métricas y personalización.
```
Se aññade este perfil al repositorio para tener acceso al codigo fuente de la pagina web pijaosatatocolima



se
