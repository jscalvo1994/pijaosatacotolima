/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
'use client';

import React, { useState, useEffect } from 'react';

interface EmpleadosProps {
  id_emprendimiento: number;
  empleados: {
    cargo: string;
    id: number;
  }[];
}

const Empleados: React.FC<EmpleadosProps> = ({
  empleados,
  id_emprendimiento,
}) => {
  const [empleadoDetails, setEmpleadoDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [contrataciones, setContrataciones] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    id_tipo_contratacion: '',
    descripcion: '',
    cantidad: 0,
    salario_mensual: 0,
    horas_semanales: 0,
  });

  const [errors, setErrors] = useState({
    id_tipo_contratacion: '',
    descripcion: '',
    cantidad: '',
    salario_mensual: '',
    horas_semanales: '',
  });

  useEffect(() => {
    const fetchContrataciones = async () => {
      try {
        const response = await fetch('/api/send/tipo_contratacion');
        if (!response.ok)
          throw new Error('Error al cargar tipos de contratación');
        const data = await response.json();
        setContrataciones(data);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la lista de contrataciones.');
      }
    };

    fetchContrataciones();
  }, []);

  useEffect(() => {
    const valid = Boolean(
      formData.id_tipo_contratacion &&
        formData.descripcion.trim().length >= 3 &&
        formData.cantidad > 0 &&
        formData.salario_mensual > 0 &&
        formData.horas_semanales >= 1 &&
        formData.horas_semanales <= 168 &&
        Object.values(errors).every((err) => err === ''),
    );
    setIsFormValid(valid);
  }, [formData, errors]);

  const fetchEmpleadoDetails = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/update/Empleado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_empleado: id }),
      });

      if (!response.ok) throw new Error('Error en la solicitud');

      const data = await response.json();
      setEmpleadoDetails(data);
    } catch {
      setError('No se pudo obtener los detalles del empleado');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    let val: string | number = value;
    let errorMsg = '';

    if (['cantidad', 'salario_mensual', 'horas_semanales'].includes(name)) {
      val = parseInt(value, 10);
    }

    if (name === 'descripcion') {
      if (value.trim().length < 3) {
        errorMsg = 'Debe tener al menos 3 caracteres.';
      }
    }

    if (name === 'cantidad' && (val as number) <= 0) {
      errorMsg = 'Debe ser mayor a 0.';
    }

    if (name === 'salario_mensual' && (val as number) <= 0) {
      errorMsg = 'Ingrese un valor mayor a 0.';
    }

    if (name === 'horas_semanales') {
      if ((val as number) < 1 || (val as number) > 168) {
        errorMsg = 'Debe estar entre 1 y 168.';
      }
    }

    if (name === 'id_tipo_contratacion' && value === '') {
      errorMsg = 'Debe seleccionar una opción.';
    }

    setFormData((prev) => ({ ...prev, [name]: val }));
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/insert/empleado', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          id_emprendimiento,
        }),
      });

      if (!response.ok) throw new Error('Error al añadir empleado');

      alert('Empleado añadido exitosamente.');
      window.location.reload();
      setShowForm(false);
    } catch (err) {
      console.error(err);
      setError('No se pudo añadir el empleado.');
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Detalles de Empleados</h3>

      {empleados.map((empleado) => (
        <div key={empleado.id} className="mb-4">
          <strong>{empleado.cargo}</strong>
          <button
            onClick={() => fetchEmpleadoDetails(empleado.id)}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Ver Detalles
          </button>
        </div>
      ))}

      <button
        onClick={() => setShowForm(true)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Añadir Empleado
      </button>

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {empleadoDetails && (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h4 className="font-semibold">Detalles del Empleado</h4>
          <ul>
            {empleadoDetails.map((detalle: any, index: number) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Contratación:</strong> {detalle.contratacion}
                </p>
                <p>
                  <strong>Descripción:</strong> {detalle.descripcion}
                </p>
                <p>
                  <strong>Horas Semanales:</strong> {detalle['horas semanales']}
                </p>
                <p>
                  <strong>Salario:</strong> {detalle.salario}
                </p>
                <p>
                  <strong>Cantidad:</strong> {detalle.cantidad}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showForm && (
        <form
          className="mt-4 bg-white p-4 shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          <h4 className="font-semibold mb-4">Añadir Nuevo Empleado</h4>

          {/* Tipo de contratación */}
          <div className="mb-2">
            <label>Tipo de Contratación:</label>
            <select
              name="id_tipo_contratacion"
              value={formData.id_tipo_contratacion}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Seleccione una opción</option>
              {contrataciones.map((contrato) => (
                <option key={contrato.id} value={contrato.id}>
                  {contrato.nombre}
                </option>
              ))}
            </select>
            {errors.id_tipo_contratacion && (
              <p className="text-red-500 text-sm">
                {errors.id_tipo_contratacion}
              </p>
            )}
          </div>

          {/* Descripción */}
          <div className="mb-2">
            <label>Descripción:</label>
            <input
              type="text"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-gray-500 text-sm">
              Ej: Supervisor, Cajero, etc.
            </p>
            {errors.descripcion && (
              <p className="text-red-500 text-sm">{errors.descripcion}</p>
            )}
          </div>

          {/* Cantidad */}
          <div className="mb-2">
            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              value={isNaN(formData.cantidad) ? '' : formData.cantidad}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-gray-500 text-sm">
              Número total de empleados en este cargo.
            </p>
            {errors.cantidad && (
              <p className="text-red-500 text-sm">{errors.cantidad}</p>
            )}
          </div>

          {/* Salario Mensual */}
          <div className="mb-2">
            <label>Salario Mensual:</label>
            <input
              type="number"
              name="salario_mensual"
              value={
                isNaN(formData.salario_mensual) ? '' : formData.salario_mensual
              }
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-gray-500 text-sm">Ej: 1200000</p>
            {errors.salario_mensual && (
              <p className="text-red-500 text-sm">{errors.salario_mensual}</p>
            )}
          </div>

          {/* Horas Semanales */}
          <div className="mb-2">
            <label>Horas Semanales:</label>
            <input
              type="number"
              name="horas_semanales"
              value={
                isNaN(formData.horas_semanales) ? '' : formData.horas_semanales
              }
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
            <p className="text-gray-500 text-sm">Debe estar entre 1 y 168.</p>
            {errors.horas_semanales && (
              <p className="text-red-500 text-sm">{errors.horas_semanales}</p>
            )}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-4 py-2 text-white rounded ${
                isFormValid
                  ? 'bg-blue-500 hover:bg-blue-600'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Empleados;
