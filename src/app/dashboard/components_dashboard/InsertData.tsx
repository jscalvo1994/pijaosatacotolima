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
  const [formData, setFormData] = useState<{ [key: string]: string }>({
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
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);
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
  // Inicio del bloque de validación de campos
  useEffect(() => {
    fetchOptions();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    let errorMsg = '';

    // Validaciones para selects vacíos
    if (
      [
        'id_departamento',
        'id_ciudad',
        'id_tipo_canal_distribucion',
        'id_tipo_meta_corto_plazo',
        'id_tipo_capital_inicial',
        'id_tipo_origen_capital_inicial',
        'id_tipo_publico_objetivo',
        'id_tipo_estrategia_precios',
        'id_tipo_admin_emprendimiento',
        'id_tipo_empleado_experiencia',
      ].includes(name) &&
      (value === '' || value === 'Seleccione')
    ) {
      errorMsg = 'Debe seleccionar una opción válida.';
    }

    // Validación para nombre
    if (name === 'nombre' && !/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
      errorMsg = 'Solo se permiten letras y espacios.';
    }

    // Validación para utilidad_neta
    if (name === 'utilidad_neta' && !/^\d*\.?\d*$/.test(value)) {
      errorMsg = 'Ingrese solo números o decimales.';
    }

    // Validación para dirección
    if (name === 'direccion' && value.trim().length < 3) {
      errorMsg = 'La dirección debe tener al menos 3 caracteres.';
    }

    // Si cambia el departamento, cargamos ciudades
    if (name === 'id_departamento') {
      handleDepartamentoChange(value);
    }

    // Guardar errores y actualizar formData
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Carga las ciudades al seleccionar un departamento
  const handleDepartamentoChange = async (value: string) => {
    setFormData((prev) => ({
      ...prev,
      id_departamento: value,
      id_ciudad: '',
    }));
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

  // Envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/insert/emprendimiento', formData);

      if (response.status >= 200 && response.status < 300) {
        const idEmprendimiento = response.data?.data?.id_emprendimiento; // 👈 Asegúrate que lo recibes
        if (idEmprendimiento) {
          // Obtener los datos completos del emprendimiento recién creado
          const detalles = await axios.post('/api/send/emprendimientos', {
            id_emprendimiento: idEmprendimiento,
          });

          console.log('Datos del emprendimiento creado:', detalles.data);
          // Aquí puedes redirigir, mostrar un modal o actualizar el estado para renderizarlo
        }

        onSubmitSuccess(); // Si deseas mostrar confirmación
      } else {
        alert('Error inesperado al crear el emprendimiento');
      }
    } catch (error: any) {
      console.error('Error al crear emprendimiento:', error);
      alert('No se pudo crear el emprendimiento. Intente de nuevo.');
    }
  };

  // Validación global del formulario
  useEffect(() => {
    const requiredFields = [
      'nombre',
      'direccion',
      'id_departamento',
      'id_ciudad',
      'id_tipo_canal_distribucion',
      'id_tipo_meta_corto_plazo',
      'id_tipo_capital_inicial',
      'id_tipo_origen_capital_inicial',
      'id_tipo_publico_objetivo',
      'id_tipo_estrategia_precios',
      'id_tipo_admin_emprendimiento',
      'id_tipo_empleado_experiencia',
      'utilidad_neta',
    ];

    const valid = requiredFields.every(
      (field) => formData[field] && !errors[field],
    );

    setIsFormValid(valid);
  }, [formData, errors]);
  // Fin del bloque de validación de campos

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Crear Nuevo Emprendimiento</h2>

      {/* Nombre */}
      <div>
        <label>Nombre del emprendimiento:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${
            errors.nombre ? 'border-red-500' : ''
          }`}
          required
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm">{errors.nombre}</p>
        )}
      </div>

      {/* Dirección */}
      <div>
        <label>Dirección donde se ubica el emprendimiento:</label>
        <input
          type="text"
          name="direccion"
          value={formData.direccion}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.direccion ? 'border-red-500' : ''}`}
          required
        />
        {errors.direccion && (
          <p className="text-red-500 text-sm">{errors.direccion}</p>
        )}
      </div>

      {/* Departamento */}
      <div>
        <label>Departamento donde se encuentra el emprendimiento:</label>
        <select
          name="id_departamento"
          value={formData.id_departamento}
          onChange={(e) => handleInputChange(e)} // ahora pasamos por handleInputChange
          className={`w-full p-2 border rounded ${errors.id_departamento ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un departamento</option>
          {departamentos.map((dep) => (
            <option key={dep.id} value={dep.id}>
              {dep.nombre}
            </option>
          ))}
        </select>
        {errors.id_departamento && (
          <p className="text-red-500 text-sm">{errors.id_departamento}</p>
        )}
      </div>

      {/* Ciudad */}
      <div>
        <label>Ciudad donde se encuentra el emprendimiento:</label>
        <select
          name="id_ciudad"
          value={formData.id_ciudad}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_ciudad ? 'border-red-500' : ''}`}
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
        {errors.id_ciudad && (
          <p className="text-red-500 text-sm">{errors.id_ciudad}</p>
        )}
      </div>

      {/* Canal de Distribución */}
      <div>
        <label>Canal de Distribución:</label>
        <select
          name="id_tipo_canal_distribucion"
          value={formData.id_tipo_canal_distribucion}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_canal_distribucion ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un canal de distribución</option>
          {canalesDistribucion.map((canal) => (
            <option key={canal.id} value={canal.id}>
              {canal.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_canal_distribucion && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_canal_distribucion}
          </p>
        )}
      </div>

      {/* Meta a Corto Plazo */}
      <div>
        <label>Meta a Corto Plazo:</label>
        <select
          name="id_tipo_meta_corto_plazo"
          value={formData.id_tipo_meta_corto_plazo}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_meta_corto_plazo ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione una meta a corto plazo</option>
          {metasCortoPlazo.map((meta) => (
            <option key={meta.id} value={meta.id}>
              {meta.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_meta_corto_plazo && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_meta_corto_plazo}
          </p>
        )}
      </div>

      {/* Capital Inicial */}
      <div>
        <label>
          Capital Inicial (¿cuanto dinero aproximado posees para iniciar el
          emprendimiento?):
        </label>
        <select
          name="id_tipo_capital_inicial"
          value={formData.id_tipo_capital_inicial}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_capital_inicial ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un capital inicial</option>
          {capitalInicial.map((capital) => (
            <option key={capital.id} value={capital.id}>
              {capital.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_capital_inicial && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_capital_inicial}
          </p>
        )}
      </div>

      {/* Origen del Capital Inicial */}
      <div>
        <label>
          Origen del Capital Inicial (¿cual es el origen del dinero?):
        </label>
        <select
          name="id_tipo_origen_capital_inicial"
          value={formData.id_tipo_origen_capital_inicial}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_origen_capital_inicial ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un origen de capital inicial</option>
          {origenCapitalInicial.map((origen) => (
            <option key={origen.id} value={origen.id}>
              {origen.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_origen_capital_inicial && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_origen_capital_inicial}
          </p>
        )}
      </div>

      {/* Público Objetivo */}
      <div>
        <label>Público Objetivo (¿a quienes le vendemos?):</label>
        <select
          name="id_tipo_publico_objetivo"
          value={formData.id_tipo_publico_objetivo}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_publico_objetivo ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un público objetivo</option>
          {publicoObjetivo.map((publico) => (
            <option key={publico.id} value={publico.id}>
              {publico.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_publico_objetivo && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_publico_objetivo}
          </p>
        )}
      </div>

      {/* Estrategia de Precios */}
      <div>
        <label>
          Estrategia de Precios: (¿por que nos compraran a nosotros?)
        </label>
        <select
          name="id_tipo_estrategia_precios"
          value={formData.id_tipo_estrategia_precios}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_estrategia_precios ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione una estrategia de precios</option>
          {estrategiasPrecios.map((precio) => (
            <option key={precio.id} value={precio.id}>
              {precio.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_estrategia_precios && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_estrategia_precios}
          </p>
        )}
      </div>

      {/* Admin Emprendimiento */}
      <div>
        <label>Administración del Emprendimiento:</label>
        <select
          name="id_tipo_admin_emprendimiento"
          value={formData.id_tipo_admin_emprendimiento}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_admin_emprendimiento ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un tipo de administración</option>
          {adminEmprendimiento.map((admin) => (
            <option key={admin.id} value={admin.id}>
              {admin.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_admin_emprendimiento && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_admin_emprendimiento}
          </p>
        )}
      </div>

      {/* Experiencia del Empleado */}
      <div>
        <label>Experiencia del Empleado:</label>
        <select
          name="id_tipo_empleado_experiencia"
          value={formData.id_tipo_empleado_experiencia}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${errors.id_tipo_empleado_experiencia ? 'border-red-500' : ''}`}
          required
        >
          <option value="">Seleccione un nivel de experiencia</option>
          {empleadoExperiencia.map((experiencia) => (
            <option key={experiencia.id} value={experiencia.id}>
              {experiencia.nombre}
            </option>
          ))}
        </select>
        {errors.id_tipo_empleado_experiencia && (
          <p className="text-red-500 text-sm">
            {errors.id_tipo_empleado_experiencia}
          </p>
        )}
      </div>

      {/* Utilidad Neta */}
      <div>
        <label>Utilidad Neta:</label>
        <input
          type="text"
          name="utilidad_neta"
          value={formData.utilidad_neta}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${
            errors.utilidad_neta ? 'border-red-500' : ''
          }`}
          required
        />
        {errors.utilidad_neta && (
          <p className="text-red-500 text-sm">{errors.utilidad_neta}</p>
        )}
      </div>

      {/* Botones */}
      <div className="flex space-x-4">
        <button
          type="submit"
          className={`px-4 py-2 rounded text-white transition-colors duration-300 ${
            isFormValid
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
          disabled={!isFormValid}
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
