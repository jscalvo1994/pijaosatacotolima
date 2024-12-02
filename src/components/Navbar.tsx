'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-4 lg:px-8 py-3 shadow-md border-b-2 border-black fixed top-0 z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link href="/" className="hover:text-green-300">
            <Image
              src="/Logoimg/logo-img-public.jpg"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
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
          <Link href="/login" className="hover:text-green-300">
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-700 text-white space-y-2 p-4">
          <Link
            href="/"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Quiénes Somos
          </Link>
          <Link
            href="/communities"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Nuestras Comunidades
          </Link>
          <Link
            href="/contact"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Contacto
          </Link>
          <Link
            href="/contact2"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Contacto2
          </Link>
          <Link
            href="/contact3"
            className="block hover:text-gray-300"
            onClick={closeMenu}
          >
            Contacto3
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
