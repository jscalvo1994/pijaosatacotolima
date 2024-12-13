/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import UpdateUser from './UpdateUser';

interface UserCardProps {
  user: {
    id: string;
    name: string | null | undefined;
    email: string | null | undefined;
    emprendedor: any[];
    emprendimiento: any[];
    image?: string | null;
  };
  onUpdate: (data: any) => void; // Función para manejar los datos enviados
}

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const emprendedor = user.emprendedor[0] || {};
  const prefilledData = {
    nombre: emprendedor.nombre || '',
    sexo: emprendedor.sexo || '',
    telefono: emprendedor.telefono || '',
    ciudad_nacimiento: emprendedor.ciudad_nacimiento || '',
    ciudad_residencia: emprendedor.ciudad_residencia || '',
    departamento_nacimiento: emprendedor.departamento_nacimiento || '',
    departamento_residencia: emprendedor.departamento_residencia || '',
    documento: emprendedor.documento || '',
    email: user.email || '',
    fecha_nacimiento: emprendedor.fecha_nacimiento || '',
    minoria: emprendedor.minoria || '',
    nivel_educativo: emprendedor.nivel_educativo || '',
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
      <div className="space-y-4">
        <div>
          <strong>Nombre:</strong> {prefilledData.nombre || 'Sin nombre'}
        </div>
        <div>
          <strong>Email:</strong> {prefilledData.email || 'Sin email'}
        </div>
        <div>
          <strong>Documento:</strong>{' '}
          {prefilledData.documento || 'Sin documento'}
        </div>
        <div>
          <strong>Teléfono:</strong> {prefilledData.telefono || 'Sin teléfono'}
        </div>
        <div>
          <strong>Ciudad de Nacimiento:</strong>{' '}
          {prefilledData.ciudad_nacimiento || 'Sin ciudad'}
        </div>
        <div>
          <strong>Departamento de Nacimiento:</strong>{' '}
          {prefilledData.departamento_nacimiento || 'Sin departamento'}
        </div>
        <div>
          <strong>Ciudad de Residencia:</strong>{' '}
          {prefilledData.ciudad_residencia || 'Sin ciudad'}
        </div>
        <div>
          <strong>Departamento de Residencia:</strong>{' '}
          {prefilledData.departamento_residencia || 'Sin departamento'}
        </div>
        <div>
          <strong>Minoría:</strong> {prefilledData.minoria || 'Sin minoría'}
        </div>
        <div>
          <strong>Nivel Educativo:</strong>{' '}
          {prefilledData.nivel_educativo || 'Sin nivel educativo'}
        </div>

        {/* Botón para mostrar el formulario de actualización */}
        <button
          onClick={() => setShowUpdateForm(!showUpdateForm)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showUpdateForm ? 'Cerrar Formulario' : 'Actualizar Datos'}
        </button>

        {showUpdateForm && (
          <UpdateUser
            prefilledData={prefilledData}
            onSubmit={(data) => {
              console.log('Datos actualizados:', data);
              onUpdate(data); // Manejo de datos actualizados
              setShowUpdateForm(false); // Cierra el formulario
            }}
            onCancel={() => setShowUpdateForm(false)} // Cierra el formulario al cancelar
          />
        )}
      </div>
    </div>
  );
};

export default UserCard;
