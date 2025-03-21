'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectDetails from './ProjectDetails';
import InsertData from './InsertData';

interface ProjectCardProps {
  idGoogle: string;
}

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

const ProjectCard: React.FC<ProjectCardProps> = ({ idGoogle }) => {
  const [emprendimientos, setEmprendimientos] = useState<any[]>([]);
  const [nEmprendimientos, setNEmprendimientos] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({
    empleados: [],
    'infr. fisica': [],
    'infraestructura tecnologica': [],
    maquinaria: [],
    productos: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showInsertForm, setShowInsertForm] = useState(false);

  // 🔄 Cargar emprendimientos al iniciar
  useEffect(() => {
    fetchEmprendimientos();
  }, []);

  const fetchEmprendimientos = async () => {
    try {
      const response = await axios.post('/api/auth/emprendedor', {
        id: idGoogle,
      });

      if (response.data?.emprendimientos) {
        setEmprendimientos(response.data.emprendimientos);
        setNEmprendimientos(response.data.n_emprendimientos || 0);
      }
    } catch (err) {
      console.error('Error al cargar emprendimientos:', err);
    }
  };

  const handleViewDetails = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/send/emprendimientos', {
        id_emprendimiento: id,
      });

      setSelectedProject({ ...response.data.emprendimiento[0], id });
      setMetadata({
        empleados: response.data.empleados || [],
        'infr. fisica': response.data['infr. fisica'] || [],
        'infraestructura tecnologica':
          response.data['infraestructura tecnologica'] || [],
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
      'infraestructura tecnologica': [],
      maquinaria: [],
      productos: [],
    });
  };

  const handleShowInsertForm = () => {
    setShowInsertForm(true);
  };

  const handleCloseInsertForm = () => {
    setShowInsertForm(false);
  };

  const handleInsertSuccess = async () => {
    setShowInsertForm(false);
    await fetchEmprendimientos(); // 🔄 Refresca la lista
    const ultimo = emprendimientos[emprendimientos.length - 1];
    if (ultimo) {
      handleViewDetails(ultimo.id); // Abre el nuevo
    }
    alert('Emprendimiento creado exitosamente.');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Listado de Emprendimientos</h2>

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

      {/* Botón para crear nuevo */}
      {nEmprendimientos < 3 && !showInsertForm && (
        <button
          onClick={handleShowInsertForm}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Crear Nuevo Emprendimiento
        </button>
      )}

      {/* Detalles */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          metadata={metadata}
          onClose={handleCloseDetails}
          onUpdate={() => alert('Lógica para actualizar proyecto')}
        />
      )}

      {/* Formulario */}
      {showInsertForm && (
        <InsertData
          idGoogle={idGoogle}
          onCancel={handleCloseInsertForm}
          onSubmitSuccess={handleInsertSuccess}
        />
      )}

      {loading && <p className="text-blue-500 mt-4">Cargando detalles...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default ProjectCard;
