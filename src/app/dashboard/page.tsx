'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import UserCard from './components_dashboard/UserCard';

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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido al Dashboard, {name}
      </h1>
      <UserCard
        user={{
          id,
          name,
          email,
          image,
          emprendedor: emprendedor,
          emprendimientos: emprendimientos,
        }}
      />
    </div>
  );
}
