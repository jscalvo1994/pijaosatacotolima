/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface ProjectCardProps {
  project: {
    nombre: string | null | undefined;
    id_google: string;
    direccion: string | null | undefined;
    id_ciiu: number;
    id_alcance_emprendimiento: number;
    id_tipo_clima: number;
    id_departamento: number;
    id_ciudad: number;
  } | null; // Si viene vacío, se mostrará el formulario
  onSubmit: (data: any) => void; // Función para manejar los datos enviados
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSubmit }) => {
  const [formData, setFormData] = useState<any>(project || {});
  const [ciius, setCiius] = useState<any[]>([]);
  const [alcances, setAlcances] = useState<any[]>([]);
  const [climas, setClimas] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);

  // Fetch de datos para los select
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/api/send/ciiu'),
          axios.get('/api/send/alcance_emprendimiento'),
          axios.get('/api/send/tipo_clima'),
          axios.get('/api/send/departamento'),
        ]);

        setCiius(responses[0].data);
        setAlcances(responses[1].data);
        setClimas(responses[2].data);
        setDepartamentos(responses[3].data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);

  // Manejar el cambio de valores en el formulario
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Asignación de Proyecto</h2>
      {project ? (
        // Mostrar datos del proyecto si existen
        <div className="space-y-4">
          <div>
            <strong>Nombre del proyecto:</strong>{' '}
            {project.nombre || 'Sin nombre'}
          </div>
          <div>
            <strong>Dirección del proyecto:</strong>{' '}
            {project.direccion || 'Sin dirección'}
          </div>
          <div>
            <strong>Departamento donde se realiza el proyecto:</strong>{' '}
            {departamentos.find((dep) => dep.id === project.id_departamento)
              ?.nombre || 'Desconocido'}
          </div>
          <button
            onClick={() => setFormData(null)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Editar Proyecto
          </button>
        </div>
      ) : (
        // Mostrar formulario si el array está vacío o se desea editar
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Dirección</label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">CIIU</label>
            <select
              name="id_ciiu"
              value={formData.id_ciiu || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Seleccione</option>
              {ciius.map((ciiu) => (
                <option key={ciiu.id} value={ciiu.id}>
                  {ciiu.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">
              Alcance del Emprendimiento
            </label>
            <select
              name="id_alcance_emprendimiento"
              value={formData.id_alcance_emprendimiento || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Seleccione</option>
              {alcances.map((alcance) => (
                <option key={alcance.id} value={alcance.id}>
                  {alcance.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Clima</label>
            <select
              name="id_tipo_clima"
              value={formData.id_tipo_clima || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Seleccione</option>
              {climas.map((clima) => (
                <option key={clima.id} value={clima.id}>
                  {clima.nombre}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Departamento</label>
            <select
              name="id_departamento"
              value={formData.id_departamento || ''}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2"
            >
              <option value="">Seleccione</option>
              {departamentos.map((departamento) => (
                <option key={departamento.id} value={departamento.id}>
                  {departamento.nombre}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Guardar Proyecto
          </button>
        </form>
      )}
    </div>
  );
};

export default ProjectCard;
