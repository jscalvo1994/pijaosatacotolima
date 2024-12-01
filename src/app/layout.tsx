import '@/globals.css';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '../components/Footer';
export const metadata = {
  title: 'Mi Proyecto',
  description: 'Un proyecto Next.js con Navbar global',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="body-custom">
        <header className="header-custom">
          <Navbar />
        </header>
        <main className="main-custom">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
