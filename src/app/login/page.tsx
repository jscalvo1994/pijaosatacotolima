'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleLogin = async () => {
    try {
      console.log('Intentando iniciar sesión con Google...');
      await signIn('google', { callbackUrl: '/dashboard' }); // Redirige al Dashboard
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleLogin}
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
}
