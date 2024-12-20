/* eslint-disable @typescript-eslint/no-explicit-any*/
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';

interface EmpleadosProps {
  empleados: {
    cargo: string;
    id: number;
  }[];
}

const Empleados: React.FC<EmpleadosProps> = ({ empleados }) => {
  const [empleadoDetails, setEmpleadoDetails] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
      setEmpleadoDetails(data); // Almacena los detalles del empleado en el estado
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('No se pudo obtener los detalles del empleado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Detalles de Empleados</h3>
      {empleados.map((empleado) => (
        <div key={empleado.id} className="mb-4">
          <strong>{empleado.cargo}</strong>
          <button
            onClick={() => fetchEmpleadoDetails(empleado.id)} // Enviar el id al hacer clic
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Ver Detalles
          </button>
        </div>
      ))}

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Mostrar detalles si están disponibles */}
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
    </div>
  );
};

export default Empleados;
