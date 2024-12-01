'use client';

import React from 'react';

const principles = [
  {
    title: 'Respeto a la Naturaleza',
    description: 'Compromiso de vivir en armonía con la naturaleza.',
    points: [
      'Valorar y respetar la tierra y sus recursos como sagrados.',
      'Proteger la biodiversidad y promover prácticas sostenibles.',
    ],
    icon: '🌱',
  },
  {
    title: 'Preservación Cultural',
    description: 'Mantener y preservar la identidad cultural.',
    points: [
      'Practicar y transmitir tradiciones, danzas, música, artesanía y lenguaje.',
      'Enriquecer la diversidad cultural de la región.',
    ],
    icon: '🌀',
  },
  {
    title: 'Justicia Social',
    description: 'Defender la equidad y la justicia social.',
    points: [
      'Esforzarse por eliminar la discriminación.',
      'Promover igualdad de oportunidades y respeto a los derechos humanos.',
    ],
    icon: '⚖️',
  },
  {
    title: 'Participación Comunitaria',
    description:
      'Fomentar la participación activa y democrática en la toma de decisiones.',
    points: ['Promover la transparencia y la inclusión.'],
    icon: '🤝',
  },
  {
    title: 'Autonomía y Autodeterminación',
    description: 'Buscar la autonomía y autodeterminación del pueblo.',
    points: [
      'Tomar decisiones que beneficien a la comunidad según tradiciones y valores propios.',
    ],
    icon: '🗺️',
  },
];

export default function CardGroup() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {principles.map((principle, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Icono */}
          <div className="text-4xl mb-4 text-center">{principle.icon}</div>
          {/* Título */}
          <h3 className="text-xl font-bold mb-2 text-center">
            {principle.title}
          </h3>
          {/* Descripción */}
          <p className="text-gray-600 mb-4 text-center">
            {principle.description}
          </p>
          {/* Lista de puntos */}
          <ul className="text-gray-600 list-disc list-inside">
            {principle.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
