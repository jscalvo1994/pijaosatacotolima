import React, { useState, useEffect } from 'react';

interface InfFisicaProps {
  infrFisica: {
    terrenos?: { id: number; tipo: string }[];
    locales?: { id: number; tipo: string }[];
    vehículos?: { id: number; tipo: string }[];
    'servicios publicos'?: { id: number; tipo: string }[];
  }[];
}

const InfFisica: React.FC<InfFisicaProps> = ({ infrFisica }) => {
  const [detalle, setDetalle] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Consolidar los datos en un solo objeto
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

  const fetchDetalles = async (id: number, tipo: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/update/InfrFisicaLocal', {
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
      setDetalle(data);
    } catch (error) {
      setError('No se pudo obtener los detalles de la infraestructura');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Infraestructura Física</h3>

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

      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {detalle && (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h4 className="font-semibold">Detalles</h4>
          <ul>
            {detalle.map((info: any, index: number) => (
              <li key={index} className="mb-2">
                <p>
                  <strong>Tipo:</strong> {info.tipo}
                </p>
                <p>
                  <strong>Descripción:</strong> {info.descripcion}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfFisica;
