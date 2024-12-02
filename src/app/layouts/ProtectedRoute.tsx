import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log('Estado de la sesión:', status);
  console.log('Datos de la sesión:', session);

  if (status === 'loading') {
    console.log('Cargando sesión...');
    return <p>Loading...</p>;
  }

  if (!session) {
    console.warn('Usuario no autenticado, redirigiendo a login...');
    router.push('/');
    return null;
  }

  return <>{children}</>;
}
