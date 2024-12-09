'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, useEffect } from 'react';
import UserCard from './components_dashboard/UserCard';
import ProjectCard from './components_dashboard/ProjectCard'; // Importa el nuevo componente

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

  if (!session) {
    return null;
  }

  const { id, name, email, image, emprendedor, emprendimientos } = session.user;

  // Datos ficticios o estado inicial para proyectos
  const initialProject = null; // Puedes cambiarlo a un objeto si ya tienes datos

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido al Panel de administración, {name}
      </h1>

      {/* Tarjeta de Usuario */}
      <UserCard
        user={{
          id,
          name,
          email,
          image,
          emprendedor: emprendedor,
          emprendimiento: emprendimientos,
        }}
        onUpdate={(updatedData) => {
          console.log('Datos actualizados del usuario:', updatedData);
          // Aquí puedes manejar los datos actualizados, como enviarlos al backend
        }}
      />

      {/* Tarjeta de Proyecto */}
      <ProjectCard
        project={initialProject} // Aquí pasas los datos del proyecto si existen
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={(formData: any) => {
          console.log('Datos del proyecto enviados:', formData);
          // Aquí puedes enviar los datos al backend
        }}
      />
    </div>
  );
}
