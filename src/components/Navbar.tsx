'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

const NavbarContent: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full px-4 lg:px-8 py-3 shadow-md border-b-2 border-black fixed top-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link href="/">
            <Image
              src="/Logoimg/logo-img-public.jpg"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Botón de menú hamburguesa (solo en móviles) */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-black-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-300">
            Quiénes Somos
          </Link>
          <Link href="/communities" className="hover:text-green-300">
            Nuestras Comunidades
          </Link>
          {session && (
            <Link href="/dashboard" className="hover:text-green-300">
              Panel administrador
            </Link>
          )}
          {session ? (
            <button
              onClick={async () => {
                await signOut({ redirect: true, callbackUrl: '/' });
              }}
              className="hover:text-red-500"
            >
              LogOut
            </button>
          ) : (
            <Link href="https://pijaosatacotolima.com.co/login" className="hover:text-green-300">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white border-t border-black shadow-md">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:text-black-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="hover:text-green-300"
            >
              Quiénes Somos
            </Link>
            <Link
              href="/communities"
              onClick={toggleMenu}
              className="hover:text-green-300"
            >
              Nuestras Comunidades
            </Link>
            {session && (
              <Link
                href="/dashboard"
                onClick={toggleMenu}
                className="hover:text-green-300"
              >
                Panel administrador
              </Link>
            )}
            {session ? (
              <button
                onClick={async () => {
                  await signOut({ redirect: true, callbackUrl: '/' });
                  toggleMenu();
                }}
                className="hover:text-red-500"
              >
                LogOut
              </button>
            ) : (
              <Link
                href="https://pijaosatacotolima.com.co/login"
                onClick={toggleMenu}
                className="hover:text-green-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

const Navbar: React.FC = () => (
  <SessionProvider>
    <NavbarContent />
  </SessionProvider>
);

export default Navbar;
