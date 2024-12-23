/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface InsertDataProps {
  idGoogle: string; // ID del usuario que será enviado
  onCancel: () => void; // Para cerrar el formulario
  onSubmitSuccess: () => void; // Para realizar acciones tras el envío
}

const InsertData: React.FC<InsertDataProps> = ({
  idGoogle,
  onCancel,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    id_google: idGoogle,
    direccion: '',
    id_departamento: '',
    id_ciudad: '',
    id_tipo_canal_distribucion: '',
    id_tipo_meta_corto_plazo: '',
    id_tipo_capital_inicial: '',
    id_tipo_origen_capital_inicial: '',
    id_tipo_publico_objetivo: '',
    id_tipo_estrategia_precios: '',
    id_tipo_admin_emprendimiento: '',
    id_tipo_empleado_experiencia: '',
    utilidad_neta: '',
  });
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [ciudades, setCiudades] = useState<any[]>([]);
  const [canalesDistribucion, setCanalesDistribucion] = useState<any[]>([]);
  const [metasCortoPlazo, setMetasCortoPlazo] = useState<any[]>([]);
  const [capitalInicial, setCapitalInicial] = useState<any[]>([]);
  const [origenCapitalInicial, setOrigenCapitalInicial] = useState<any[]>([]);
  const [publicoObjetivo, setPublicoObjetivo] = useState<any[]>([]);
  const [estrategiasPrecios, setEstrategiasPrecios] = useState<any[]>([]);
  const [adminEmprendimiento, setAdminEmprendimiento] = useState<any[]>([]);
  const [empleadoExperiencia, setEmpleadoExperiencia] = useState<any[]>([]);
  const [loadingCiudades, setLoadingCiudades] = useState(false);
  const fetchOptions = async () => {
    try {
      const [
        deptRes,
        canalRes,
        metaRes,
        capitalRes,
        origenRes,
        publicoRes,
        precioRes,
        adminRes,
        experienciaRes,
      ] = await Promise.all([
        axios.get('/api/send/departamentos'),
        axios.get('/api/send/tipo_canal_distribucion'),
        axios.get('/api/send/tipo_meta_corto_plazo'),
        axios.get('/api/send/tipo_capital_inicial'),
        axios.get('/api/send/tipo_origen_capital_inicial'),
        axios.get('/api/send/tipo_publico_objetivo'),
        axios.get('/api/send/tipo_estrategia_precios'),
        axios.get('/api/send/tipo_admin_emprendimiento'),
        axios.get('/api/send/tipo_empleado_experiencia'),
      ]);

      setDepartamentos(deptRes.data);
      setCanalesDistribucion(canalRes.data);
      setMetasCortoPlazo(metaRes.data);
      setCapitalInicial(capitalRes.data);
      setOrigenCapitalInicial(origenRes.data);
      setPublicoObjetivo(publicoRes.data);
      setEstrategiasPrecios(precioRes.data);
      setAdminEmprendimiento(adminRes.data);
      setEmpleadoExperiencia(experienciaRes.data);
    } catch (error) {
      console.error('Error al cargar opciones:', error);
    }
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleDepartamentoChange = async (value: string) => {
    setFormData({ ...formData, id_departamento: value, id_ciudad: '' });
    setLoadingCiudades(true);
    try {
      const response = await axios.put('/api/send/Ciudad', {
        id_departamento: value,
      });
      setCiudades(response.data);
    } catch (error) {
      console.error('Error al cargar ciudades:', error);
    } finally {
      setLoadingCiudades(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/insert/emprendimiento', formData);

      if (response.status === 200) {
        // Llamar la función de éxito proporcionada
        onSubmitSuccess();
      } else {
        console.error('Error inesperado:', response.data);
        alert(
          'Ocurrió un error al crear el emprendimiento. Por favor, inténtelo de nuevo.',
        );
      }
    } catch (error: any) {
      console.error('Error al crear emprendimiento:', error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Crear Nuevo Emprendimiento</h2>

      {/* Nombre */}
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Dirección */}
      <div>
        <label>Dirección:</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Departamento */}
      <div>
        <label>Departamento:</label>
        <select
          name="id_departamento"
          value={formData.id_departamento}
          onChange={(e) => handleDepartamentoChange(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un departamento</option>
          {departamentos.map((dep) => (
            <option key={dep.id} value={dep.id}>
              {dep.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Ciudad */}
      <div>
        <label>Ciudad:</label>
        <select
          name="id_ciudad"
          value={formData.id_ciudad}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
          disabled={!formData.id_departamento || loadingCiudades}
        >
          <option value="">Seleccione una ciudad</option>
          {ciudades.map((city) => (
            <option key={city.id} value={city.id}>
              {city.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Canal de Distribución */}
      <div>
        <label>Canal de Distribución:</label>
        <select
          name="id_tipo_canal_distribucion"
          value={formData.id_tipo_canal_distribucion}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un canal de distribución</option>
          {canalesDistribucion.map((canal) => (
            <option key={canal.id} value={canal.id}>
              {canal.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Meta a Corto Plazo */}
      <div>
        <label>Meta a Corto Plazo:</label>
        <select
          name="id_tipo_meta_corto_plazo"
          value={formData.id_tipo_meta_corto_plazo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione una meta a corto plazo</option>
          {metasCortoPlazo.map((meta) => (
            <option key={meta.id} value={meta.id}>
              {meta.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Capital Inicial */}
      <div>
        <label>Capital Inicial:</label>
        <select
          name="id_tipo_capital_inicial"
          value={formData.id_tipo_capital_inicial}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un capital inicial</option>
          {capitalInicial.map((capital) => (
            <option key={capital.id} value={capital.id}>
              {capital.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Origen del Capital Inicial */}
      <div>
        <label>Origen del Capital Inicial:</label>
        <select
          name="id_tipo_origen_capital_inicial"
          value={formData.id_tipo_origen_capital_inicial}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un origen de capital inicial</option>
          {origenCapitalInicial.map((origen) => (
            <option key={origen.id} value={origen.id}>
              {origen.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Público Objetivo */}
      <div>
        <label>Público Objetivo:</label>
        <select
          name="id_tipo_publico_objetivo"
          value={formData.id_tipo_publico_objetivo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un público objetivo</option>
          {publicoObjetivo.map((publico) => (
            <option key={publico.id} value={publico.id}>
              {publico.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Estrategia de Precios */}
      <div>
        <label>Estrategia de Precios:</label>
        <select
          name="id_tipo_estrategia_precios"
          value={formData.id_tipo_estrategia_precios}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione una estrategia de precios</option>
          {estrategiasPrecios.map((precio) => (
            <option key={precio.id} value={precio.id}>
              {precio.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Admin Emprendimiento */}
      <div>
        <label>Administración del Emprendimiento:</label>
        <select
          name="id_tipo_admin_emprendimiento"
          value={formData.id_tipo_admin_emprendimiento}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un tipo de administración</option>
          {adminEmprendimiento.map((admin) => (
            <option key={admin.id} value={admin.id}>
              {admin.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Experiencia del Empleado */}
      <div>
        <label>Experiencia del Empleado:</label>
        <select
          name="id_tipo_empleado_experiencia"
          value={formData.id_tipo_empleado_experiencia}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione un nivel de experiencia</option>
          {empleadoExperiencia.map((experiencia) => (
            <option key={experiencia.id} value={experiencia.id}>
              {experiencia.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Utilidad Neta */}
      <div>
        <label>Utilidad Neta:</label>
        <input
          type="text"
          name="utilidad_neta"
          value={formData.utilidad_neta}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      {/* Botones */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Crear Emprendimiento
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default InsertData;
