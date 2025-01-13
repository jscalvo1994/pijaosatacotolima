/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import Empleados from './Empleados';
import InfFisica from './InfFisica';
import InfTecnologica from './InfTecnologica';
import Maquinas from './Maquinas';
import Productos from './Productos';
import axios from 'axios';

interface Metadata {
  empleados: { cargo: string; id: number }[];
  'infr. fisica': {
    terrenos?: { id: number; tipo: string }[];
    locales?: { id: number; tipo: string }[];
    vehículos?: { id: number; tipo: string }[];
    'servicios publicos'?: { id: number; tipo: string }[];
  }[];
  'infraestructura tecnologica': { id: number; 'infr.': string }[];
  maquinaria: { id: number; maquinaria: string }[];
  productos: { id: number; producto: string }[];
}

interface ProjectDetailsProps {
  project: {
    id: number;
    nombre: string;
    direccion: string;
    ciudad: string;
    departamento: string;
    alcance_emprendimiento: string;
    ciiu: string;
    id_google: string;
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
}) => {
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [loadingPDF, setLoadingPDF] = useState(false); // Estado para el botón de PDF

  const handleViewDetails = (key: string) => {
    setSelectedKey((prevKey) => (prevKey === key ? null : key));
  };

  const renderComponent = (key: string) => {
    switch (key) {
      case 'empleados':
        return (
          <Empleados
            empleados={metadata.empleados}
            id_emprendimiento={project.id}
          />
        );
      case 'infr. fisica':
        return (
          <InfFisica
            infrFisica={metadata['infr. fisica']}
            id_emprendimiento={project.id}
          />
        );
      case 'infraestructura tecnologica':
        return (
          <InfTecnologica
            infrTecnologica={metadata['infraestructura tecnologica']}
            id_emprendimiento={project.id}
          />
        );
      case 'maquinaria':
        return (
          <Maquinas
            maquinas={metadata.maquinaria}
            id_emprendimiento={project.id}
          />
        );
      case 'productos':
        return (
          <Productos
            productos={metadata.productos}
            id_emprendimiento={project.id}
          />
        );
      default:
        return null;
    }
  };

  // Manejador para generar PDF
  const handleGeneratePDF = async () => {
    try {
      setLoadingPDF(true);
      const response = await axios.post('/api/insert/PDFgenerate', {
        id_emprendimiento: project.id,
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert(
        'Hubo un problema al generar el PDF. Por favor, intente nuevamente.',
      );
    } finally {
      setLoadingPDF(false);
    }
  };

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
      </div>

      {/* Botones y lógica de apertura de componentes */}
      <div className="space-y-4">
        {Object.entries(metadata).map(([key]) => (
          <div key={key} className="flex justify-between items-center">
            <span>{key}</span>
            <button
              onClick={() => handleViewDetails(key)}
              className={`px-4 py-2 rounded ${
                selectedKey === key ? 'bg-red-500' : 'bg-blue-500'
              } text-white`}
            >
              {selectedKey === key ? 'Cerrar' : 'Ver Detalles'}
            </button>
          </div>
        ))}
      </div>

      {/* Renderizado Condicional del Componente Seleccionado */}
      <div className="mt-4">{selectedKey && renderComponent(selectedKey)}</div>

      {/* Botones de acción */}
      <div className="mt-6 flex justify-end space-x-4">
        {/* Botón para generar PDF */}
        <button
          onClick={handleGeneratePDF}
          disabled={loadingPDF} // Desactivar mientras se genera el PDF
          className={`px-4 py-2 rounded ${
            loadingPDF ? 'bg-gray-400' : 'bg-green-500'
          } text-white`}
        >
          {loadingPDF ? 'Generando...' : 'Generar PDF'}
        </button>

        {/* Botón de cierre */}
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
