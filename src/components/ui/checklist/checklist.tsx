'use client'
import React, { useState } from 'react';

const opciones = [
  { id: '01', nombre: 'Acceso a Activos Productivos' },
  { id: '02', nombre: 'Adecuación de Tierra' },
  { id: '03', nombre: 'Ambiental' },
  { id: '04', nombre: 'Comercialización' },
  { id: '05', nombre: 'Establecimiento y Sostenimiento' },
  { id: '06', nombre: 'Extensión Rural' },
  { id: '07', nombre: 'Forestal' },
  { id: '08', nombre: 'Infraestructura Productiva' },
  { id: '09', nombre: 'No Agropecuarios' },
  { id: '10', nombre: 'Riegos y Drenajes' },
  // Agrega más opciones aquí
];

export const CheckboxList = () => {
  const [seleccionados, setSeleccionados] = useState<string[]>([]);

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSeleccionados(prev => [...prev, value]);
    } else {
      setSeleccionados(prev => prev.filter(id => id !== value));
    }
  };

  return (
    <div>
      {opciones.map(opcion => (
        <div key={opcion.id}>
          <input
            type="checkbox"
            id={opcion.id}
            value={opcion.id}
            onChange={manejarCambio}
          />
          <label htmlFor={opcion.id}>{opcion.nombre}</label>
        </div>
      ))}
    </div>
  );
};