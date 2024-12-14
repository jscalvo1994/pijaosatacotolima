'use client';

import React from 'react';

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

interface ProjectDetailsProps {
  project: {
    alcance_emprendimiento: string;
    ciiu: string;
    ciudad: string;
    departamento: string;
    direccion: string;
    id: number;
    id_google: string;
    nombre: string;
    tipo_canal_distribucion: string;
    tipo_capital_inicial: string;
    tipo_marketing_general: string;
    tipo_meta_corto_plazo: string;
    tipo_modelo_negocio: string;
    tipo_origen_capital_inicial: string;
  };
  metadata: Metadata;
  onClose: () => void;
  onUpdate: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  project,
  metadata,
  onClose,
  onUpdate,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Detalles del Proyecto</h2>

      {/* Información del proyecto */}
      <div className="mb-4">
        <p>
          <strong>Nombre:</strong> {project.nombre}
        </p>
        <p>
          <strong>Dirección:</strong> {project.direccion}
        </p>
        <p>
          <strong>Ciudad:</strong> {project.ciudad}
        </p>
        <p>
          <strong>Departamento:</strong> {project.departamento}
        </p>
        <p>
          <strong>Alcance:</strong> {project.alcance_emprendimiento}
        </p>
        <p>
          <strong>CIIU:</strong> {project.ciiu}
        </p>
        <p>
          <strong>ID Emprendedor:</strong> {project.id_google}
        </p>
        <p>
          <strong>Tipo Canal Distribución:</strong>{' '}
          {project.tipo_canal_distribucion}
        </p>
        <p>
          <strong>Tipo Capital Inicial:</strong> {project.tipo_capital_inicial}
        </p>
        <p>
          <strong>Tipo Marketing General:</strong>{' '}
          {project.tipo_marketing_general}
        </p>
        <p>
          <strong>Meta a Corto Plazo:</strong> {project.tipo_meta_corto_plazo}
        </p>
        <p>
          <strong>Modelo de Negocio:</strong> {project.tipo_modelo_negocio}
        </p>
        <p>
          <strong>Origen del Capital Inicial:</strong>{' '}
          {project.tipo_origen_capital_inicial}
        </p>
      </div>

      {/* Botones para datos adicionales */}
      <div className="space-y-4">
        {Object.entries(metadata).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span>{key}</span>
            {Array.isArray(value) && value.length === 0 ? (
              <button
                onClick={onUpdate}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Actualizar
              </button>
            ) : (
              <button
                onClick={() => alert(`Ver detalles de ${key}`)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Ver Detalles
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Botones de cierre */}
      <div className="mt-6 flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
