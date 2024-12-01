'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const communities = [
  {
    name: 'Comunidad Indígena Indígena Ico Valle de Anape',
    image: '/communities/ico-valle-anape.jpg',
    link: '/communities/ico-valle',
  },
  {
    name: 'Comunidad Indígena Kalapicá Ambulú Territorio Sagrado',
    image: '/communities/kalapica.jpg',
    link: '/communities/kalapica-ambulú',
  },
  {
    name: 'Comunidad Indígena Mesa de Pole',
    image: '/communities/mesa-pole.jpg',
    link: '/communities/mesa-de-pole',
  },
  {
    name: 'Comunidad Indígena Brisas del Atá',
    image: '/communities/brisas-del-ata.jpg',
    link: '/communities/brisas-del-ata',
  },
  {
    name: 'Comunidad Indígena Ancestral Pijao Buenavista',
    image: '/communities/buenavista.jpg',
    link: '/communities/buenavista',
  },
  {
    name: 'Resguardo Indígena Pueblo Viejo Santa Rita La Mina',
    image: '/communities/santa-rita.jpg',
    link: '/communities/santa-rita',
  },
  {
    name: 'Comunidad Indígena Casa de Zinc',
    image: '/communities/casa-de-zinc.jpg',
    link: '/communities/casa-de-zinc',
  },
  {
    name: 'Resguardo Pijao de Beltrán',
    image: '/communities/beltran.jpg',
    link: '/communities/beltran',
  },
  {
    name: 'Comunidad Indígena Cacique de Agua Dulce',
    image: '/communities/agua-dulce.jpg',
    link: '/communities/agua-dulce',
  },
];

export default function CommunitiesCard() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto my-10">
      <h1 className="text-3xl font-bold mb-8">Nuestras Comunidades</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {communities.map((community, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {/* Imagen con enlace */}
            <Link href={community.link}>
              <div className="relative w-full h-64">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            {/* Título */}
            <div className="p-4">
              <h2 className="text-center text-lg font-semibold">
                {community.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
