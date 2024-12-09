/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState, useEffect } from 'react';
import { Emprendedor, Emprendimiento } from 'next-auth';
import axios from 'axios';

interface UserCardProps {
  user: {
    id: string;
    name: string | null | undefined;
    email: string | null | undefined;
    emprendedor: Emprendedor[];
    emprendimiento: Emprendimiento[];
    image?: string | null;
  };
  onUpdate: (data: any) => void; // Función para manejar los datos enviados
}

const UserCard: React.FC<UserCardProps> = ({ user, onUpdate }) => {
  const [showIframe, setShowIframe] = useState(false);
  const [tipoDocumentos, setTipoDocumentos] = useState<any[]>([]);
  const [sexos, setSexos] = useState<any[]>([]);
  const [nivelesEducativos, setNivelesEducativos] = useState<any[]>([]);
  const [departamentos, setDepartamentos] = useState<any[]>([]);
  const [minorias, setMinorias] = useState<any[]>([]);

  // Fetch de datos para los select
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          axios.get('/api/send/tipo_documento'),
          axios.get('/api/send/sexo'),
          axios.get('/api/send/nivel_educativo'),
          axios.get('/api/send/departamento'),
          axios.get('/api/send/minoria'),
        ]);

        setTipoDocumentos(responses[0].data);
        setSexos(responses[1].data);
        setNivelesEducativos(responses[2].data);
        setDepartamentos(responses[3].data);
        setMinorias(responses[4].data);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchData();
  }, []);

  // Datos prellenados para el formulario en el iframe
  const prefilledData = {
    id_documento: user.emprendedor[0]?.id_documento || 1,
    documento: user.emprendedor[0]?.documento || '',
    nombre: user.name || '',
    telefono: user.emprendedor[0]?.telefono || '',
    email: user.email || '',
    id_google: user.id,
    fecha_nacimiento: user.emprendedor[0]?.fecha_nacimiento || '',
    id_departamento_nacimiento: 0,
    id_ciudad_nacimiento: 1,
    id_departamento_residencia: 2,
    id_ciudad_residencia: 2,
    id_minoria: 3,
    id_nivel_educativo: user.emprendedor[0]?.id_nivel_educativo || 1,
  };

  // Escucha los mensajes enviados desde el iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;

      const updatedData = event.data;
      console.log('Datos recibidos del iframe:', updatedData);
      onUpdate(updatedData); // Envía los datos actualizados al backend
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onUpdate]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
      <div className="space-y-4">
        <div>
          <strong>Nombre:</strong> {user.name || 'Sin nombre'}
        </div>
        <div>
          <strong>Email:</strong> {user.email || 'Sin email'}
        </div>
        <div>
          <strong>Documento:</strong> {prefilledData.documento}
        </div>
        <div>
          <strong>Teléfono:</strong> {prefilledData.telefono}
        </div>
        <div>
          <strong>Fecha de Nacimiento:</strong> {prefilledData.fecha_nacimiento}
        </div>
        <div>
          <strong>Ciudad de Nacimiento:</strong>{' '}
          {prefilledData.id_ciudad_nacimiento}
        </div>
        <div>
          <strong>Departamento de Nacimiento:</strong>{' '}
          {prefilledData.id_departamento_nacimiento}
        </div>
        <div>
          <strong>Departamento de residencia:</strong>{' '}
          {prefilledData.id_departamento_residencia}
        </div>
        <div>
          <strong>Ciudad de residencia:</strong>{' '}
          {prefilledData.id_ciudad_residencia}
        </div>
        <div>
          <strong>Minoria Perteneciente:</strong> {prefilledData.id_minoria}
        </div>
        <div>
          <strong>Nivel Educativo Actual</strong>{' '}
          {prefilledData.id_nivel_educativo}
        </div>

        {/* Botón para mostrar el iframe */}
        <button
          onClick={() => setShowIframe(!showIframe)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {showIframe ? 'Cerrar Formulario' : 'Actualizar Datos'}
        </button>

        {/* Iframe que muestra el formulario para actualizar */}
        {showIframe && (
          <div className="mt-4">
            <iframe
              title="Actualizar Datos"
              srcDoc={`<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Actualizar Datos</title>
                    <style>
                      body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                      }
                      input, select, button {
                        display: block;
                        margin-bottom: 10px;
                        padding: 8px;
                        width: 100%;
                      }
                    </style>
                  </head>
                  <body>
                    <form id="updateForm">
                      <label>Tipo de Documento</label>
                      <select name="id_documento" required>
                        ${tipoDocumentos
                          .map(
                            (tipo) =>
                              `<option value="${tipo.id}" ${
                                tipo.id === prefilledData.id_documento
                                  ? 'selected'
                                  : ''
                              }>${tipo.nombre}</option>`,
                          )
                          .join('')}
                      </select>

                      <label>Documento</label>
                      <input type="text" name="documento" value="${prefilledData.documento}" required />

                      <label>Sexo</label>
                      <select name="id_sexo" required>
                        ${sexos
                          .map(
                            (sexo) =>
                              `<option value="${sexo.id}">${sexo.nombre}</option>`,
                          )
                          .join('')}
                      </select>

                      <label>Nivel Educativo</label>
                      <select name="id_nivel_educativo" required>
                        ${nivelesEducativos
                          .map(
                            (nivel) =>
                              `<option value="${nivel.id}" ${
                                nivel.id === prefilledData.id_nivel_educativo
                                  ? 'selected'
                                  : ''
                              }>${nivel.nombre}</option>`,
                          )
                          .join('')}
                      </select>

                      <label>Nombre</label>
                      <input type="text" name="nombre" value="${prefilledData.nombre}" required />

                      <label>Teléfono</label>
                      <input type="text" name="telefono" value="${prefilledData.telefono}" required />

                      <label>Email</label>
                      <input type="email" name="email" value="${prefilledData.email}" disabled />

                      <label>Fecha de Nacimiento</label>
                      <input type="date" name="fecha_nacimiento" value="${prefilledData.fecha_nacimiento}" required />

                      <label>Departamento de Nacimiento</label>
                      <select name="id_departamento_nacimiento" required>
                        ${departamentos
                          .map(
                            (departamento) =>
                              `<option value="${departamento.id}">${departamento.nombre}</option>`,
                          )
                          .join('')}
                      </select>

                      <label>Minoría</label>
                      <select name="id_minoria" required>
                        ${minorias
                          .map(
                            (minoria) =>
                              `<option value="${minoria.id}">${minoria.nombre}</option>`,
                          )
                          .join('')}
                      </select>

                      <button type="button" onclick="submitForm()">Actualizar</button>
                    </form>
                    <script>
                      function submitForm() {
                        const form = document.getElementById('updateForm');
                        const formData = new FormData(form);
                        const data = Object.fromEntries(formData);
                        parent.postMessage(data, '*');
                      }
                    </script>
                  </body>
                </html>`}
              style={{
                width: '100%',
                height: '600px',
                border: '1px solid #ddd',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
