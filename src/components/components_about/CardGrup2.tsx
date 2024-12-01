'use client';

import React from 'react';

const values = [
  {
    title: 'Respeto y Solidaridad',
    description: 'Cultivar un ambiente de respeto mutuo.',
    points: [
      'Reconocer la diversidad de opiniones y experiencias dentro de la comunidad.',
    ],
    icon: '🤝',
  },
  {
    title: 'Integridad',
    description: 'Actuar con honestidad y coherencia.',
    points: [
      'Ser responsables de nuestras acciones y comprometidos con la verdad y la transparencia.',
    ],
    icon: '⚖️',
  },
  {
    title: 'Reciprocidad',
    description: 'Practicar la reciprocidad como valor esencial.',
    points: [
      'Fomentar el intercambio y la colaboración en la comunidad para fortalecer lazos.',
    ],
    icon: '🔄',
  },
  {
    title: 'Aprendizaje Continuo',
    description: 'Valorar el aprendizaje continuo.',
    points: ['Buscar el desarrollo personal y colectivo.'],
    icon: '📚',
  },
  {
    title: 'Espiritualidad',
    description: 'Buscar la autonomía y autodeterminación del pueblo.',
    points: [
      'Tomar decisiones que beneficien a la comunidad según tradiciones y valores propios.',
    ],
    icon: '🕊️',
  },
  {
    title: 'Resiliencia',
    description: 'Desarrollar la resiliencia como comunidad.',
    points: [
      'Afrontar desafíos con fortaleza y adaptabilidad.',
      'Aprender de adversidades para construir un futuro más fuerte.',
    ],
    icon: '🌱',
  },
  {
    title: 'Amor y Cuidado',
    description: 'Promover el amor y el cuidado hacia la comunidad y entorno.',
    points: [
      'Reconocer la importancia de estos valores para construir relaciones saludables y sostenibles.',
    ],
    icon: '❤️',
  },
];

export default function CardGroup2() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Icono */}
          <div className="text-4xl mb-4 text-center">{value.icon}</div>
          {/* Título */}
          <h3 className="text-xl font-bold mb-2 text-center">{value.title}</h3>
          {/* Descripción */}
          <p className="text-gray-600 mb-4 text-center">{value.description}</p>
          {/* Lista de puntos */}
          <ul className="text-gray-600 list-disc list-inside">
            {value.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
