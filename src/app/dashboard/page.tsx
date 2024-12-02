'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Manejar redirección cuando no hay sesión
  useEffect(() => {
    if (status === 'unauthenticated') {
      console.warn('No se encontró sesión, redirigiendo al login...');
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }

  if (!session) {
    return null; // Mostrar nada mientras se redirige
  }

  const { name, emprendedor, emprendimientos } = session.user;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido al Dashboard, {name}
      </h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Estado del Usuario</h2>
          <p>
            <strong>Emprendedor:</strong> {emprendedor}
          </p>
          <p>
            <strong>Emprendimientos:</strong> {emprendimientos}
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">Acciones</h2>
          <ul className="list-disc pl-5">
            {emprendedor > 0 ? (
              <li>Puedes gestionar tus emprendimientos</li>
            ) : (
              <li>Regístrate como emprendedor para comenzar</li>
            )}
            {emprendimientos > 0 ? (
              <li>Ver tus {emprendimientos} emprendimientos</li>
            ) : (
              <li>Añade tu primer emprendimiento</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
