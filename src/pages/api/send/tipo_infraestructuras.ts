/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const endpoints = {
  tipo_infraestructura_fisica:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica',
  tipo_infraestructura_fisica_local:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica_local',
  tipo_infraestructura_fisica_servicio_publico:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica_servicio_publico',
  tipo_infraestructura_fisica_uso_terreno:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica_uso_terreno',
  tipo_infraestructura_fisica_vehiculo:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica_vehiculo',
  tipo_infraestructura_tecnologica:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_tecnologica',
  tipo_maquinaria:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_maquinaria',
  tipo_material: 'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_material',
  tipo_pertenencia:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_pertenencia',
  tipo_clima: 'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_clima',
  tipo_estado:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_estado_ser_pub',
  tipo_inf_fisica_serv_pub:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_infraestructura_fisica_servicio_publico',
  tipo_estado_maquinaria:
    'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_estado_maquinaria',
};

// Transformar la respuesta según el endpoint solicitado
function transformData(endpointKey: keyof typeof endpoints, data: any) {
  switch (endpointKey) {
    case 'tipo_infraestructura_fisica':
      return data.map((item: any) => ({
        id: item.id,
        nombre: item.nombre.toUpperCase(), // Ejemplo de transformación
      }));
    case 'tipo_pertenencia':
      return data.map((item: any) => ({
        id: item.id,
        nombre: `Pertenencia: ${item.nombre}`, // Ejemplo de transformación
      }));
    default:
      return data; // Sin transformación
  }
}

async function fetchEndpoint(
  endpointKey: keyof typeof endpoints,
  res: NextApiResponse,
) {
  try {
    const response = await axios.get(endpoints[endpointKey]);
    const transformedData = transformData(endpointKey, response.data); // Aplicar transformación
    res.status(200).json(transformedData);
  } catch (error: any) {
    console.error(`Error al obtener datos de ${endpointKey}:`, error.message);
    res.status(error.response?.status || 500).json({
      error: `No se pudo obtener los datos de ${endpointKey}`,
    });
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { tipo } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  if (!tipo || !Object.keys(endpoints).includes(tipo as string)) {
    return res.status(400).json({ error: 'Tipo de infraestructura inválido' });
  }

  await fetchEndpoint(tipo as keyof typeof endpoints, res);
}
