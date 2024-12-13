'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface ProjectCardProps {
  emprendimientos: {
    id: number;
    nombre: string;
  }[];
  n_emprendimientos: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  emprendimientos,
  n_emprendimientos,
}) => {
  const router = useRouter();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Listado de Emprendimientos</h2>

      {/* Lista de emprendimientos */}
      {emprendimientos.length > 0 ? (
        <ul className="space-y-4">
          {emprendimientos.map((emprendimiento) => (
            <li
              key={emprendimiento.id}
              className="flex items-center justify-between"
            >
              <span>{emprendimiento.nombre}</span>
              <button
                onClick={() =>
                  router.push(`/emprendimientos/${emprendimiento.id}`)
                }
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Ver Detalles
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay emprendimientos disponibles.</p>
      )}

      {/* Botón para crear un nuevo emprendimiento */}
      {n_emprendimientos === 0 || n_emprendimientos < 3 ? (
        <button
          onClick={() => router.push('/dashboard/emprendimientos/crear.tsx')}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Crear Nuevo Emprendimiento
        </button>
      ) : null}
    </div>
  );
};

export default ProjectCard;
