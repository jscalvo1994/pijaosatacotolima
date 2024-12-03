import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      emprendedor: Emprendedor[]; // Cambiado a un array de objetos
      emprendimientos: Emprendimiento[]; // Cambiado a un array de objetos
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    emprendedor: Emprendedor[]; // Cambiado a un array de objetos
    emprendimientos: Emprendimiento[]; // Cambiado a un array de objetos
  }

  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    picture?: string;
    emprendedor?: Emprendedor[]; // Cambiado a un array de objetos
    emprendimientos?: Emprendimiento[]; // Cambiado a un array de objetos
  }

  interface Emprendedor {
    ciudad_nacimiento: string;
    ciudad_residencia: string;
    departamento_nacimiento: string;
    departamento_residencia: string;
    documento: string;
    id_documento: Integer;
    email: string;
    fecha_creacion: string;
    fecha_nacimiento: string;
    id_google: string;
    minoria: string;
    nivel_educativo: string;
    nombre: string;
    sexo: string;
    telefono: string;
  }

  interface Emprendimiento {
    id: number;
    nombre: string;
  }
}
