'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  useEffect(() => {
    const initiateLogin = async () => {
      try {
        console.log('Redirigiendo a inicio de sesión con Google...');
        await signIn('google', { callbackUrl: '/dashboard' });
      } catch (error) {
        console.error('Error al intentar iniciar sesión:', error);
      }
    };

    initiateLogin();
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg">Redirigiendo al inicio de sesión...</p>
    </div>
  );
}
