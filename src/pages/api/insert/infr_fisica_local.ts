/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_local';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ error: 'Método no permitido. Solo se admite POST.' });
  }

  try {
    // Extraer datos del body
    const {
      id_emprendimiento,
      id_tipo_infraestructura_fisica,
      ubicacion,
      dimensiones,
      id_tipo_infraestructura_fisica_local,
      id_tipo_pertenencia,
      descripcion,
      costo_inicial,
      costo_mensual,
    } = req.body;

    // Validar los campos requeridos
    if (
      !id_emprendimiento ||
      !id_tipo_infraestructura_fisica ||
      !ubicacion ||
      !dimensiones ||
      !id_tipo_infraestructura_fisica_local ||
      !id_tipo_pertenencia ||
      !descripcion ||
      !costo_inicial ||
      !costo_mensual
    ) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }

    // Crear el objeto transformado para enviar a la API externa
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_infraestructura_fisica: Number(id_tipo_infraestructura_fisica),
      ubicacion: ubicacion.trim(),
      dimensiones: dimensiones.trim(),
      id_tipo_infraestructura_fisica_local: Number(
        id_tipo_infraestructura_fisica_local,
      ),
      id_tipo_pertenencia: Number(id_tipo_pertenencia),
      descripcion: descripcion.trim(),
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
      error: 'Ocurrió un error al registrar el local.',
      details: error.response?.data || error.message,
    });
  }
}
