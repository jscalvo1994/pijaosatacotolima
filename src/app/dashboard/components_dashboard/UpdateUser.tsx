/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UpdateUserProps {
  prefilledData: any;
  onSubmit: (data: any) => void;
  onCancel: () => void; // Nueva función para manejar la cancelación
}

const UpdateUser: React.FC<UpdateUserProps> = ({
  prefilledData,
  onSubmit,
  onCancel,
}) => {
  const [tipoDocumentos, setTipoDocumentos] = useState<any[]>([]);
  const [sexos, setSexos] = useState<any[]>([]);
  const [nivelesEducativos, setNivelesEducativos] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [minorias, setMinorias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch inicial de los datos necesarios para el formulario
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/api/send/tipo_documento'),
          axios.get('/api/send/sexo'),
          axios.get('/api/send/nivel_educativo'),
          axios.get('/api/send/departamento'),
          axios.get('/api/send/minorias'),
        ]);

        setTipoDocumentos(responses[0].data);
        setSexos(responses[1].data);
        setNivelesEducativos(responses[2].data);
        setDepartamentos(responses[3].data);
        setMinorias(responses[4].data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSubmit(data); // Envía los datos actualizados al componente padre
  };

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Actualizar Datos</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="id_documento" className="mb-2 font-semibold">
            Tipo de Documento
          </label>
          <select
            id="id_documento"
            name="id_documento"
            required
            defaultValue={prefilledData.id_documento}
            className="border rounded px-3 py-2"
          >
            {tipoDocumentos.map((tipo) => (
              <option key={tipo.id} value={tipo.id}>
                {tipo.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="documento" className="mb-2 font-semibold">
            Documento
          </label>
          <input
            id="documento"
            type="text"
            name="documento"
            defaultValue={prefilledData.documento}
            required
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="id_sexo" className="mb-2 font-semibold">
            Sexo
          </label>
          <select
            id="id_sexo"
            name="id_sexo"
            required
            defaultValue={prefilledData.id_sexo}
            className="border rounded px-3 py-2"
          >
            {sexos.map((sexo) => (
              <option key={sexo.id} value={sexo.id}>
                {sexo.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="id_nivel_educativo" className="mb-2 font-semibold">
            Nivel Educativo
          </label>
          <select
            id="id_nivel_educativo"
            name="id_nivel_educativo"
            required
            defaultValue={prefilledData.id_nivel_educativo}
            className="border rounded px-3 py-2"
          >
            {nivelesEducativos.map((nivel) => (
              <option key={nivel.id} value={nivel.id}>
                {nivel.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="nombre" className="mb-2 font-semibold">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            defaultValue={prefilledData.nombre}
            required
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="telefono" className="mb-2 font-semibold">
            Teléfono
          </label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            defaultValue={prefilledData.telefono}
            required
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            defaultValue={prefilledData.email}
            disabled
            className="border rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="fecha_nacimiento" className="mb-2 font-semibold">
            Fecha de Nacimiento
          </label>
          <input
            id="fecha_nacimiento"
            type="date"
            name="fecha_nacimiento"
            defaultValue={prefilledData.fecha_nacimiento}
            required
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="id_departamento_nacimiento"
            className="mb-2 font-semibold"
          >
            Departamento de Nacimiento
          </label>
          <select
            id="id_departamento_nacimiento"
            name="id_departamento_nacimiento"
            required
            defaultValue={prefilledData.id_departamento_nacimiento}
            className="border rounded px-3 py-2"
          >
            {departamentos.map((departamento) => (
              <option key={departamento.id} value={departamento.id}>
                {departamento.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="id_minorias" className="mb-2 font-semibold">
            Minoría Perteneciente
          </label>
          <select
            id="id_minorias"
            name="id_minorias"
            required
            defaultValue={prefilledData.minorias}
            className="border rounded px-3 py-2"
          >
            {minorias.map((minoria) => (
              <option key={minoria.id} value={minoria.id}>
                {minoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Actualizar
          </button>
          <button
            type="button"
            onClick={onCancel} // Llama a la función para manejar la cancelación
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
