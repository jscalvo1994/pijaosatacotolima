import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // Callback para manejar los tokens JWT
    async jwt({ token, account, profile }) {
      if (account && profile) {
        console.log('Datos capturados del proveedor Google: nextauth.ts', {
          email: profile.email,
          id: account.providerAccountId,
          name: profile.name,
        });

        try {
          console.log('Enviando datos al endpoint: nextauth.ts', account);

          // Envía los datos al endpoint y espera la respuesta
          const response = await axios.post(
            'https://dfwh-5ca5356b291e.herokuapp.com/receive/auth',
            {
              email: profile.email,
              id: account.providerAccountId,
              name: profile.name,
            },
          );
          console.log('Respuesta del endpoint: nextauth.ts', response.data);

          // Agrega los datos al token
          token.id = account.providerAccountId;
          token.name = profile.name;
          token.email = profile.email;
          token.emprendedor = response.data.emprendedor || []; // Asegúrate de asignar un array
          token.emprendimientos = response.data.emprendimientos || []; // Asegúrate de asignar un array
          token.n_emprendedor =
            typeof response.data.n_emprendedor === 'number'
              ? response.data.n_emprendedor
              : 0; // Validación de tipo
          token.n_emprendimientos =
            typeof response.data.n_emprendimientos === 'number'
              ? response.data.n_emprendimientos
              : 0; // Validación de tipo
        } catch (error) {
          console.error('Error al enviar datos al endpoint:', error);
        }
      }
      return token;
    },

    // Callback para manejar la sesión
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        emprendedor: Array.isArray(token.emprendedor) ? token.emprendedor : [], // Validación para asegurar que sea un array
        emprendimientos: Array.isArray(token.emprendimientos)
          ? token.emprendimientos
          : [], // Validación para asegurar que sea un array
        n_emprendedor:
          typeof token.n_emprendedor === 'number' ? token.n_emprendedor : 0, // Validación de tipo
        n_emprendimientos:
          typeof token.n_emprendimientos === 'number'
            ? token.n_emprendimientos
            : 0, // Validación de tipo
      };
      return session;
    },

    // Callback para manejar redirecciones
    async redirect({ url, baseUrl }) {
      if (url.includes('/api/auth/signin')) {
        console.log('Redirigiendo al Dashboard después del signin');
        return url.startsWith(baseUrl) ? url : baseUrl;
      }
      return `${baseUrl}/dashboard`; // Redirige al Dashboard después del login
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Asegúrate de definir esto en tu entorno
  pages: {
    signIn: '/login', // Página personalizada de inicio de sesión
  },
});
