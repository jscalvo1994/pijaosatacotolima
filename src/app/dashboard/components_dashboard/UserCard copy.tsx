/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  image: string;
  email: string;
  emprendedor: {
    id_google: string;
    nombre?: string;
    sexo?: string;
    telefono?: string;
    tipo_documento?: string;
    documento?: string;
    ciudad_nacimiento?: string;
    ciudad_residencia?: string;
    departamento_nacimiento?: string;
    departamento_residencia?: string;
    fecha_nacimiento?: string;
    minoria?: string;
    nivel_educativo?: string;
  }[];
  emprendimiento: any[];
}

interface UserCardProps {
  user: User;
  onUpdate: (data: any) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [tipoDocumentos, setTipoDocumentos] = useState<any[]>([]);
  const [sexos, setSexos] = useState<any[]>([]);
  const [nivelesEducativos, setNivelesEducativos] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [minorias, setMinorias] = useState<any[]>([]);
  const [ciudadXdepartamento, setCiudadxDepartamento] = useState<any[]>([]);
  const [departamentosNacimiento, setDepartamentosNacimiento] = useState<any[]>(
    [],
  );
  const [ciudadXdepartamentoNacimiento, setCiudadxDepartamentoNacimiento] =
    useState<any[]>([]);
  // Inicializar los datos del formulario al cargar el usuario
  useEffect(() => {
    if (user.emprendedor?.length > 0) {
      const emprendedor = user.emprendedor[0];
      setFormData({
        nombre: emprendedor.nombre,
        telefono: emprendedor.telefono,
        documento: emprendedor.documento,
        email: user.email,
        minoria: emprendedor.minoria,
        departamento_nacimiento: emprendedor.departamento_nacimiento,
        ciudad_nacimiento: emprendedor.ciudad_nacimiento,
        departamento_residencia: emprendedor.departamento_residencia,
        ciudad_residencia: emprendedor.ciudad_residencia,
        nivel_educativo: emprendedor.nivel_educativo,
        sexo: emprendedor.sexo,
        id_google: user.id, // Mantener oculto
      });
    }
  }, [user]);
  console.log('email', user.email);
  console.log('id google', user.id);
  // Obtener datos de las listas dinámicas
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
        setDepartamentosNacimiento(responses[3].data);
        setMinorias(responses[4].data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);

  // Manejar cambios en los inputs del formulario
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  // Manejar el cambio del departamento de residencia
  const handleDepartamentoChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedDepartamento = Number(e.target.value);
    setFormData((prev: any) => ({
      ...prev,
      id_departamento_residencia: selectedDepartamento,
      id_ciudad_residencia: '', // Limpiar la ciudad seleccionada
    }));

    try {
      const response = await axios.post('/api/send/Ciudad', {
        id_departamento: selectedDepartamento,
      });
      setCiudadxDepartamento(response.data); // Cargar ciudades del departamento de residencia
    } catch (error) {
      console.error('Error al cargar ciudades:', error);
      setCiudadxDepartamento([]);
    }
  };

  // Manejar el cambio del departamento de nacimiento
  const handleDepartamentoNacimientoChange = async (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedDepartamento = Number(e.target.value);
    setFormData((prev: any) => ({
      ...prev,
      id_departamento_nacimiento: selectedDepartamento,
      id_ciudad_nacimiento: '', // Limpiar la ciudad seleccionada
    }));

    try {
      const response = await axios.post('/api/send/Ciudad', {
        id_departamento: selectedDepartamento,
      });
      setCiudadxDepartamentoNacimiento(response.data); // Cargar ciudades del departamento de nacimiento
    } catch (error) {
      console.error('Error al cargar ciudades:', error);
      setCiudadxDepartamentoNacimiento([]);
    }
  };
  // Manejar la acción de enviar el formulario al backend
  const handleSubmit = async () => {
    try {
      // Convertir fecha de nacimiento a formato YYYY-MM-DD
      const formattedDate = formData.fecha_nacimiento
        ? new Date(formData.fecha_nacimiento).toISOString().split('T')[0]
        : null;

      if (!formattedDate) {
        alert('Por favor, ingrese una fecha válida.');
        return;
      }

      // Crear el payload con datos transformados si es necesario
      const payload = {
        ...formData,
        fecha_nacimiento: formattedDate,
        email: user.email,
        id_google: user.id,
      };

      console.log('Enviando datos al backend:', payload);

      // Enviar los datos al backend
      const response = await axios.post(
        '/api/update/update_emprendedor',
        payload,
      );
      console.log('Respuesta del backend:', response.data);

      // Notificar al componente padre y cerrar el formulario
      onUpdate(response.data);
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Error al actualizar los datos:', error);

      // Mostrar un mensaje de error al usuario
      alert(
        'Hubo un error al actualizar los datos. Por favor, intente de nuevo.',
      );
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
      <div className="space-y-4">
        {!showUpdateForm ? (
          <>
            <div>
              <strong>Nombre:</strong> {formData.nombre || 'Sin nombre'}
            </div>
            <div>
              <strong>Teléfono:</strong> {formData.telefono || 'Sin teléfono'}
            </div>
            <div>
              <strong>Documento:</strong>{' '}
              {formData.documento || 'Sin documento'}
            </div>
            <div>
              <strong>Minorías:</strong> {formData.minoria || 'Sin minoría'}
            </div>
            <div>
              <strong>Departamento de Nacimiento:</strong>{' '}
              {formData.departamento_nacimiento || 'Sin departamento'}
            </div>
            <div>
              <strong>Ciudad de Nacimiento:</strong>{' '}
              {formData.ciudad_nacimiento || 'Sin ciudad'}
            </div>
            <div>
              <strong>Departamento de Residencia:</strong>{' '}
              {formData.departamento_residencia || 'Sin departamento'}
            </div>
            <div>
              <strong>Ciudad de Residencia:</strong>{' '}
              {formData.ciudad_residencia || 'Sin ciudad'}
            </div>
            <div>
              <strong>Nivel Educativo:</strong>{' '}
              {formData.nivel_educativo || 'Sin nivel educativo'}
            </div>
            <div>
              <strong>Sexo:</strong> {formData.sexo || 'Sin sexo seleccionado'}
            </div>
            <button
              onClick={() => setShowUpdateForm(true)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Actualizar Datos
            </button>
          </>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Teléfono</label>
              <input
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Tipo de Documento
              </label>
              <select
                name="tipo_documento"
                value={formData.tipo_documento}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Seleccione</option>
                {tipoDocumentos.map((tipo) => (
                  <option key={tipo.id} value={tipo.nombre}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Número de Documento
              </label>
              <input
                type="text"
                name="documento"
                value={formData.documento}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Minorías</label>
              <select
                name="id_minoria"
                value={formData.id_minoria}
                onChange={handleInputChange}
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
            <div>
              <label className="block mb-1 font-semibold">
                Departamento de Residencia
              </label>
              <select
                name="id_departamento_residencia"
                value={formData.id_departamento_residencia}
                onChange={handleDepartamentoChange}
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
              <label className="block mb-1 font-semibold">
                Ciudad de Residencia
              </label>
              <select
                name="id_ciudad_residencia"
                value={formData.id_ciudad_residencia}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Seleccione</option>
                {ciudadXdepartamento.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
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
                value={formData.id_departamento_nacimiento}
                onChange={handleDepartamentoNacimientoChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Seleccione</option>
                {departamentosNacimiento.map((dep) => (
                  <option key={dep.id} value={dep.id}>
                    {dep.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Ciudad de Nacimiento
              </label>
              <select
                name="id_ciudad_nacimiento"
                value={formData.id_ciudad_nacimiento}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Seleccione</option>
                {ciudadXdepartamentoNacimiento.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                name="fecha_nacimiento"
                value={formData.fecha_nacimiento || ''}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                Nivel Educativo
              </label>
              <select
                name="id_nivel_educativo"
                value={formData.id_nivel_educativo}
                onChange={handleInputChange}
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
              <label className="block mb-1 font-semibold">Sexo</label>
              <select
                name="id_sexo"
                value={formData.id_sexo}
                onChange={handleInputChange}
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
            <button type="button" onClick={handleSubmit}>
              Guardar Cambios
            </button>
            <button
              type="button"
              onClick={() => setShowUpdateForm(false)}
              className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancelar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserCard;
