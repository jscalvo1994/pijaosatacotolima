'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import UserCard from './components_dashboard/UserCard';
import ProjectCard from './components_dashboard/ProjectCard';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Cargando...</p>;
  }

  if (!session || !session.user) {
    return null;
  }

  const {
    id,
    name,
    email,
    image,
    emprendedor,
    emprendimientos,
    n_emprendimientos,
  } = session.user;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido al Panel de administración, {name || 'Usuario'}
      </h1>

      {/* Tarjeta de Usuario */}
      <UserCard
        user={{
          id,
          name,
          email,
          image,
          emprendedor: emprendedor || [],
          emprendimiento: emprendimientos || [],
        }}
        onUpdate={(updatedData) => {
          console.log('Datos actualizados del usuario:', updatedData);
        }}
      />

      {/* Tarjeta de Proyectos */}
      <ProjectCard
        emprendimientos={emprendimientos || []}
        n_emprendimientos={n_emprendimientos || 0}
      />
    </div>
  );
}
