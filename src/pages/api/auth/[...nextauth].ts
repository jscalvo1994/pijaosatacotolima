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
    async jwt({ token, account, profile }) {
      if (account && profile) {
        console.log('Datos capturados del proveedor Google: nextauth.ts', {
          email: profile.email,
          id: account.providerAccountId,
          name: profile.name,
        });

        try {
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
          token.id = account.providerAccountId; // Asegúrate de asignar el id
          token.emprendedor = response.data.emprendedor;
          token.emprendimientos = response.data.emprendimientos;
        } catch (error) {
          console.error('Error al enviar datos al endpoint:', error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      console.log('Token recibido en la sesión: nextauth.ts', token);
      session.user = {
        id: token.id as string,
        name: token.name as string,
        email: token.email as string,
        emprendedor: token.emprendedor as number,
        emprendimientos: token.emprendimientos as number,
      };

      console.log(
        'Sesión actualizada con datos del usuario: nextauth.ts',
        session,
      );
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log(`URL recibida: ${url}`);
      console.log(`Base URL: ${baseUrl}`);

      if (url.includes('/api/auth/signin')) {
        console.log('Redirigiendo al Dashboard después del signin');
        return url.startsWith(baseUrl) ? url : baseUrl;
      }
      return `${baseUrl}/dashboard`;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login', // Página de inicio de sesión personalizada
  },
});
