import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      emprendedor: number;
      emprendimientos: number;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    emprendedor: number;
    emprendimientos: number;
  }

  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    picture?: string;
    emprendedor?: number;
    emprendimientos?: number;
  }
}
