/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_serv_pub';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    console.log('Método HTTP no permitido:', req.method);
    return res
      .status(405)
      .json({ error: 'Método no permitido. Solo se admite POST.' });
  }

  try {
    // Extraer datos del body
    const {
      id_emprendimiento,
      id_tipo_infraestructura_fisica,
      id_tipo_infraestructura_fisica_servicio_publico,
      descripcion,
      proveedor,
      id_tipo_estado,
      costo_inicial,
      costo_mensual,
    } = req.body;

    // Validar los campos requeridos
    if (
      !id_emprendimiento ||
      !id_tipo_infraestructura_fisica ||
      !id_tipo_infraestructura_fisica_servicio_publico ||
      !descripcion ||
      !proveedor ||
      !id_tipo_estado ||
      !costo_inicial ||
      !costo_mensual
    ) {
      console.error('Faltan campos obligatorios en el objeto recibido:', {
        id_emprendimiento,
        id_tipo_infraestructura_fisica,
        id_tipo_infraestructura_fisica_servicio_publico,
        descripcion,
        proveedor,
        id_tipo_estado,
        costo_inicial,
        costo_mensual,
      });
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }
    // Crear el objeto transformado para enviar a la API externa
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_infraestructura_fisica: Number(id_tipo_infraestructura_fisica),
      id_tipo_infraestructura_fisica_servicio_publico: Number(
        id_tipo_infraestructura_fisica_servicio_publico,
      ),
      descripcion: descripcion.trim(),
      proveedor: proveedor.trim(),
      id_tipo_estado: Number(id_tipo_estado),
      costo_inicial: costo_inicial.toString(),
      costo_mensual: costo_mensual.toString(),
    };
    // Enviar el objeto transformado a la API externa
    const response = await axios.post(API_URL, payload);
    // Retornar la respuesta de la API externa al cliente
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al enviar datos a la API externa:', error.message);

    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al registrar el servicio público.',
      details: error.response?.data || error.message,
    });
  }
}
