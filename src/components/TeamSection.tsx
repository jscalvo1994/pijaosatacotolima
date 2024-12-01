'use client';

import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Inelda Bustos Acosta',
    role: ' Gobernadora',
    description: 'Comunidad resguardo indígena Santarita la Mina',
    image: '/team/IneldaBustosAcosta.png',
  },
  {
    name: 'Diana Maritza Figueroa',
    role: 'Gobernadora',
    description: 'Comunidad indígena Kalapica Ambulu Territorio Sagrado',
    image: '/team/DianaMaritzaFigueroa.png',
  },
  {
    name: 'GuillermoMartinez',
    role: 'Gobernador ',
    description: 'Comunidad indígena cacique Agua Dulce',
    image: '/team/GuillermoMartinez.png',
  },
  {
    name: 'Rosmira Luna Castañeda',
    role: 'Gobernadora',
    description: 'Comunidad Indigena Mesa de Pole',
    image: '/team/RosmiraLunaCastañeda.png',
  },
  {
    name: 'Jair González Muñoz',
    role: 'Gobernador',
    description: 'Comunidad indígena Ancestral Pijao Buenavista',
    image: '/team/JairGonzálezMuñoz.png',
  },
  {
    name: 'Efren Zambrano Jimenez',
    role: 'Gobernador',
    description: 'Comunidad Indígena',
    image: '/team/EfrenZambranoJimenez.png',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-100 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold mb-8">Nuestro Equipo</h2>
        <p className="text-lg text-gray-600 mb-12">
          Conoce a las personas detrás de nuestro éxito.
        </p>

        {/* Grid de miembros del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Imagen con next/image */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              {/* Información */}
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <p className="text-sm text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
