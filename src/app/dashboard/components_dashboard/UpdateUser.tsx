/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface UpdateUserProps {
  prefilledData: any;
  onSuccess: () => void; // Callback después de enviar exitosamente
  onCancel: () => void; // Manejar la cancelación
}

const UpdateUser: React.FC<UpdateUserProps> = ({
  prefilledData,
  onSuccess,
  onCancel,
}) => {
  const [tipoDocumentos, setTipoDocumentos] = useState<any[]>([]);
  const [sexos, setSexos] = useState<any[]>([]);
  const [nivelesEducativos, setNivelesEducativos] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [minorias, setMinorias] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      } catch (err) {
        console.error('Error al cargar datos:', err);
        setError('Ocurrió un error al cargar los datos.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /*   const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const form = event.currentTarget;

      // Preparar los datos del JSON directamente desde el formulario
      const data = {
        id_documento: Number(form.id_documento.value),
        documento: form.documento.value,
        id_sexo: Number(form.id_sexo.value),
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        telefono: form.telefono.value,
        email: prefilledData.email, // Dato fijo
        id_google: prefilledData.id_google, // Dato fijo
        id_nivel_educativo: Number(form.id_nivel_educativo.value),
        fecha_nacimiento: form.fecha_nacimiento.value || null,
        id_departamento_nacimiento: Number(
          form.id_departamento_nacimiento.value,
        ),
        id_ciudad_nacimiento: Number(form.id_ciudad_nacimiento.value),
        id_departamento_residencia: Number(
          form.id_departamento_residencia.value,
        ),
        id_ciudad_residencia: Number(form.id_ciudad_residencia.value),
        id_minoria: Number(form.id_minoria.value),
      };

      console.log('Datos enviados al backend:', data);

      // Enviar los datos al backend
      const response = await axios.post('/api/update/update_emprendedor', data);
      console.log('Datos enviados exitosamente:', response.data);

      onSuccess(); // Notificar al componente padre del éxito
    } catch (err) {
      console.log('Error al enviar los datos:', err);
      setError(
        'Ocurrió un error al enviar los datos. Por favor, inténtalo nuevamente.',
      );
    }
  }; */
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const form = event.currentTarget;

      // Preparar los datos del JSON directamente desde el formulario
      const data = {
        id_documento: Number(form.id_documento.value),
        documento: form.documento.value,
        id_sexo: Number(form.id_sexo.value),
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        telefono: form.telefono.value,
        email: prefilledData.email, // Dato fijo
        id_google: prefilledData.id_google, // Dato fijo
        id_nivel_educativo: Number(form.id_nivel_educativo.value),
        fecha_nacimiento: form.fecha_nacimiento.value || null,
        id_departamento_nacimiento: Number(
          form.id_departamento_nacimiento.value,
        ),
        id_ciudad_nacimiento: Number(form.id_ciudad_nacimiento.value),
        id_departamento_residencia: Number(
          form.id_departamento_residencia.value,
        ),
        id_ciudad_residencia: Number(form.id_ciudad_residencia.value),
        id_minoria: Number(form.id_minoria.value),
      };

      console.log('Datos enviados al backend:', data);

      // Enviar los datos al backend
      const response = await axios.post('/api/update/update_emprendedor', data);
      console.log('Datos enviados exitosamente:', response.data);

      onSuccess(); // Notificar al componente padre del éxito
    } catch (err) {
      console.log('Error al enviar los datos:', err);
      setError(
        'Ocurrió un error al enviar los datos. Por favor, inténtalo nuevamente.',
      );
    }
  };
  if (loading) {
    return <p>Cargando datos...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      {/* Campos visibles */}
      <div>
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          type="text"
          name="nombre"
          defaultValue={prefilledData.nombre || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Apellido</label>
        <input
          type="text"
          name="apellido"
          defaultValue={prefilledData.apellido || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Tipo de Documento</label>
        <select
          name="id_documento"
          defaultValue={prefilledData.id_documento || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {tipoDocumentos.map((doc) => (
            <option key={doc.id} value={doc.id}>
              {doc.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Documento</label>
        <input
          type="text"
          name="documento"
          defaultValue={prefilledData.documento || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Teléfono</label>
        <input
          type="text"
          name="telefono"
          defaultValue={prefilledData.telefono || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Sexo</label>
        <select
          name="id_sexo"
          defaultValue={prefilledData.id_sexo || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {sexos.map((sexo) => (
            <option key={sexo.id} value={sexo.id}>
              {sexo.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Fecha de Nacimiento</label>
        <input
          type="date"
          name="fecha_nacimiento"
          defaultValue={prefilledData.fecha_nacimiento || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Nivel Educativo</label>
        <select
          name="id_nivel_educativo"
          defaultValue={prefilledData.id_nivel_educativo || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {nivelesEducativos.map((nivel) => (
            <option key={nivel.id} value={nivel.id}>
              {nivel.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Departamento de Nacimiento
        </label>
        <select
          name="id_departamento_nacimiento"
          defaultValue={prefilledData.id_departamento_nacimiento || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {departamentos.map((dep) => (
            <option key={dep.id} value={dep.id}>
              {dep.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Ciudad de Nacimiento</label>
        <input
          type="text"
          name="id_ciudad_nacimiento"
          defaultValue={prefilledData.id_ciudad_nacimiento || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">
          Departamento de Residencia
        </label>
        <select
          name="id_departamento_residencia"
          defaultValue={prefilledData.id_departamento_residencia || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {departamentos.map((dep) => (
            <option key={dep.id} value={dep.id}>
              {dep.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold">Ciudad de Residencia</label>
        <input
          type="text"
          name="id_ciudad_residencia"
          defaultValue={prefilledData.id_ciudad_residencia || ''}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Minoría</label>
        <select
          name="id_minoria"
          defaultValue={prefilledData.id_minoria || ''}
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Seleccione</option>
          {minorias.map((minoria) => (
            <option key={minoria.id} value={minoria.id}>
              {minoria.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Campos ocultos */}
      <input type="hidden" name="email" value={prefilledData.email || ''} />
      <input
        type="hidden"
        name="id_google"
        value={prefilledData.id_google || ''}
      />

      {/* Botones */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Actualizar
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Cancelar
      </button>
    </form>
  );
};

export default UpdateUser;
