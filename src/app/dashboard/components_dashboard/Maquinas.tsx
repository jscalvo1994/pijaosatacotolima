/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import FormMaquinas from './FormMaquinas';

interface MaquinasProps {
  maquinas: { id: number; maquinaria: string }[];
  id_emprendimiento: number;
}

const Maquinas: React.FC<MaquinasProps> = ({ maquinas, id_emprendimiento }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedDetalles, setSelectedDetalles] = useState<any[] | null>(null);

  const fetchDetalles = async (id: number) => {
    try {
      const response = await fetch(`/api/send/tipo_maquinaria`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_maquinaria: id }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener detalles');
      }

      const data = await response.json();
      console.log('Detalles obtenidos:', data); // Debugging
      setSelectedDetalles(data); // Aseguramos que sea un array
    } catch (error: any) {
      console.error('Error en fetchDetalles:', error.message);
      alert('Error al obtener los detalles de la maquinaria');
    }
  };

  const renderDetalles = (detalles: any[]) => {
    return detalles.map((detalle, index) => (
      <li key={index} className="mb-2">
        {Object.entries(detalle).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {String(value)}
          </p>
        ))}
      </li>
    ));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Maquinarias del Proyecto</h3>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded mb-4"
        onClick={() => setShowForm(true)}
      >
        Añadir Maquinaria
      </button>

      {showForm && (
        <FormMaquinas
          id_emprendimiento={id_emprendimiento}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            alert('Maquinaria añadida correctamente.');
          }}
        />
      )}

      {maquinas.length > 0 ? (
        maquinas.map((maquina) => (
          <div key={maquina.id} className="mb-4 p-4 border rounded bg-gray-100">
            <p>
              <strong>Nombre:</strong> {maquina.maquinaria}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              onClick={() => fetchDetalles(maquina.id)}
            >
              Ver Detalles
            </button>
          </div>
        ))
      ) : (
        <p>No se encontraron máquinas en este proyecto.</p>
      )}

      {selectedDetalles && (
        <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
          <h4 className="font-semibold">Detalles de Maquinaria</h4>
          <ul className="list-disc pl-5">{renderDetalles(selectedDetalles)}</ul>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded mt-4"
            onClick={() => setSelectedDetalles(null)}
          >
            Cerrar Detalles
          </button>
        </div>
      )}
    </div>
  );
};

export default Maquinas;
