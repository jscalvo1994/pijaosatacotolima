/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import FormTech from './FormTech'; // Importar el nuevo formulario

interface InfTecnologicaProps {
  infrTecnologica: { id: number; 'infr.': string }[];
  id_emprendimiento: number;
}

const InfTecnologica: React.FC<InfTecnologicaProps> = ({
  infrTecnologica,
  id_emprendimiento,
}) => {
  const [detalle, setDetalle] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false); // Estado para mostrar/ocultar el formulario

  const fetchDetalles = async (id: number) => {
    console.log('ID recibido en fetchDetalles:', id);
    const id_infr_tecnologica = id;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/send/InfrTecnologica`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_infr_tecnologica }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener los detalles');
      }

      const data = await response.json();
      console.log('Datos recibidos del backend:', data);
      setDetalle(data);
    } catch (error: any) {
      console.error('Error en fetchDetalles:', error.message);
      setError('No se pudo obtener los detalles de la infraestructura');
    } finally {
      setLoading(false);
    }
  };

  const renderDetalle = (detalle: any[]) => {
    return detalle.map((item, index) => (
      <li key={index} className="mb-1">
        {Object.entries(item).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {String(value)}
          </p>
        ))}
      </li>
    ));
  };
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold">Infraestructura Tecnológica</h3>

      {/* Botón para añadir tecnología */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        {showForm ? 'Cerrar Formulario' : 'Añadir Tecnología'}
      </button>

      {/* Mostrar el formulario si está activado */}
      {showForm && (
        <FormTech
          onSuccess={() => {
            setShowForm(false);
            alert('Tecnología añadida correctamente.');
          }}
          onClose={() => setShowForm(false)}
          id_emprendimiento={id_emprendimiento}
        />
      )}

      {infrTecnologica.map((item) => (
        <div key={item.id} className="mb-4">
          <p>{item['infr.']}</p>
          <button
            onClick={() => fetchDetalles(item.id)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Ver Detalles
          </button>
        </div>
      ))}

      {loading && <p>Cargando detalles...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {detalle && (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h4 className="font-semibold">Detalles de Infraestructura</h4>
          <ul className="list-disc pl-5">{renderDetalle(detalle)}</ul>
        </div>
      )}
    </div>
  );
};

export default InfTecnologica;
