/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import InfraestructuraForm from './InfraestructuraForm'; // Importar el formulario reutilizable

interface InfFisicaProps {
  id_emprendimiento: number;
  infrFisica: {
    terrenos?: { id: number; tipo: string }[];
    locales?: { id: number; tipo: string }[];
    vehículos?: { id: number; tipo: string }[];
    'servicios publicos'?: { id: number; tipo: string }[];
  }[];
}

const InfFisica: React.FC<InfFisicaProps> = ({
  id_emprendimiento,
  infrFisica,
}) => {
  const [detalle, setDetalle] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  const fetchDetalles = async (id: number, tipo: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send/InfrFisicaLocal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, tipo }),
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }

      const data = await response.json();
      setDetalle(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error('Error en fetchDetalles:', error);
      setError('No se pudo obtener los detalles de la infraestructura');
    } finally {
      setLoading(false);
    }
  };

  // Consolidar los datos existentes para mostrarlos agrupados
  const consolidatedData = infrFisica.reduce(
    (acc, item) => {
      Object.keys(item).forEach((key) => {
        const category = key as keyof typeof acc;
        if (item[category]) {
          acc[category] = [...(acc[category] || []), ...(item[category] || [])];
        }
      });
      return acc;
    },
    {
      terrenos: [],
      locales: [],
      vehículos: [],
      'servicios publicos': [],
    } as {
      terrenos?: { id: number; tipo: string }[];
      locales?: { id: number; tipo: string }[];
      vehículos?: { id: number; tipo: string }[];
      'servicios publicos'?: { id: number; tipo: string }[];
    },
  );

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Infraestructura Física</h3>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        {showForm ? 'Cerrar Formulario' : 'Añadir Infraestructura'}
      </button>

      {/* Mostrar el formulario si está activado */}
      {showForm && (
        <InfraestructuraForm
          id_emprendimiento={id_emprendimiento}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            alert('Infraestructura añadida exitosamente.');
          }}
        />
      )}

      {/* Mostrar detalles consolidados */}
      {Object.entries(consolidatedData).map(([key, value]) => (
        <div key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
          {value?.map((item) => (
            <div key={item.id} className="mb-2">
              {item.tipo}
              <button
                onClick={() => fetchDetalles(item.id, key)}
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Ver Detalles
              </button>
            </div>
          ))}
        </div>
      ))}

      {/* Mostrar detalles específicos si se selecciona alguno */}
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {detalle && detalle.length > 0 && (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h4 className="font-semibold">Detalles</h4>
          <ul className="list-disc pl-5">
            {detalle.map(
              (item: { label: string; value: string }, index: number) => (
                <li key={index} className="mb-1">
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfFisica;
