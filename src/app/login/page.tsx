'use client';
import { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

export default function LoginPage() {
  return (
    <SessionProvider>
      <LoginContent />
    </SessionProvider>
  );
}

function LoginContent() {
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      console.log('Redirigiendo a inicio de sesión con Google...');
      signIn('google', { callbackUrl: '/dashboard' });
    }
  }, [status]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg">Redirigiendo al inicio de sesión...</p>
    </div>
  );
}
