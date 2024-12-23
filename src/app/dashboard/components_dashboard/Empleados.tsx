/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any*/
/* eslint-disable prettier/prettier */
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
  const [formData, setFormData] = useState({
    id_tipo_contratacion: '',
    descripcion: '',
    cantidad: 0,
    salario_mensual: 0,
    horas_semanales: 0,
  });
  const [contrataciones, setContrataciones] = useState<any[]>([]);

  useEffect(() => {
    // Cargar las opciones de tipo de contratación desde el backend
    const fetchContrataciones = async () => {
      try {
        const response = await fetch('/api/send/tipo_contratacion');
        if (!response.ok) {
          throw new Error('Error al cargar los tipos de contratación');
        }
        const data = await response.json();
        setContrataciones(data);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar la lista de contrataciones.');
      }
    };

    fetchContrataciones();
  }, []);

  const fetchEmpleadoDetails = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/update/Empleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_empleado: id }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setEmpleadoDetails(data);
    } catch (error) {
      setError('No se pudo obtener los detalles del empleado');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === 'cantidad' ||
        name === 'salario_mensual' ||
        name === 'horas_semanales'
          ? parseInt(value, 10)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/insert/empleado', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          id_emprendimiento,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al añadir empleado');
      }

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
          </div>
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
          </div>
          <div className="mb-2">
            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              value={formData.cantidad}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label>Salario Mensual:</label>
            <input
              type="number"
              name="salario_mensual"
              value={formData.salario_mensual}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-2">
            <label>Horas Semanales:</label>
            <input
              type="number"
              name="horas_semanales"
              value={formData.horas_semanales}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Guardar
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="ml-4 px-4 py-2 bg-gray-500 text-white rounded"
          >
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default Empleados;
