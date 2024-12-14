/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import axios from 'axios';
import ProjectDetails from './ProjectDetails';

interface ProjectCardProps {
  emprendimientos: {
    id: number;
    nombre: string;
  }[];
  n_emprendimientos: number;
}

interface Metadata {
  empleados: {
    cargo: string;
    id: number;
  }[];
  'infr. fisica': {
    terrenos?: {
      id: number;
      tipo: string;
    }[];
    locales?: {
      id: number;
      tipo: string;
    }[];
    vehículos?: {
      id: number;
      tipo: string;
    }[];
    'servicios publicos'?: {
      id: number;
      tipo: string;
    }[];
  }[];
  'infr. tecnologica': {
    id: number;
    'infr.': string;
  }[];
  maquinaria: {
    id: number;
    maquinaria: string;
  }[];
  productos: {
    id: number;
    producto: string;
  }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  emprendimientos,
  n_emprendimientos,
}) => {
  const [selectedProject, setSelectedProject] = useState<any | null>(null); // Datos del proyecto seleccionado
  const [metadata, setMetadata] = useState<Metadata>({
    empleados: [],
    'infr. fisica': [],
    'infr. tecnologica': [],
    maquinaria: [],
    productos: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleViewDetails = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/send/emprendimientos', {
        id_emprendimiento: id,
      });

      setSelectedProject(response.data.emprendimiento[0]);
      setMetadata({
        empleados: response.data.empleados || [],
        'infr. fisica': response.data['infr. fisica'] || [],
        'infr. tecnologica': response.data['infr. tecnologica'] || [],
        maquinaria: response.data.maquinaria || [],
        productos: response.data.productos || [],
      });
    } catch (err) {
      console.error('Error al cargar los detalles del emprendimiento:', err);
      setError('Ocurrió un error al cargar los detalles del proyecto.');
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
    setMetadata({
      empleados: [],
      'infr. fisica': [],
      'infr. tecnologica': [],
      maquinaria: [],
      productos: [],
    });
  };

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
                onClick={() => handleViewDetails(emprendimiento.id)}
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
      {n_emprendimientos < 3 && (
        <button
          onClick={() =>
            alert('Aquí iría la lógica para crear un nuevo proyecto')
          }
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Crear Nuevo Emprendimiento
        </button>
      )}

      {/* Detalles del proyecto seleccionado */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          metadata={metadata}
          onClose={handleCloseDetails}
          onUpdate={() => alert('Lógica para actualizar proyecto')}
        />
      )}

      {/* Indicador de carga */}
      {loading && <p className="text-blue-500 mt-4">Cargando detalles...</p>}

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ProjectCard;
