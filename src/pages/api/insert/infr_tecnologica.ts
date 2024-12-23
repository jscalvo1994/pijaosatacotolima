/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_tecnologica';

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
      id_tipo_infraestructura_tecnologica,
      marca,
      modelo,
      descripcion,
      id_tipo_pertenencia,
      id_tipo_estado,
      costo_inicial,
      costo_mensual,
      cantidad,
    } = req.body;

    // Validar los campos requeridos
    if (
      !id_emprendimiento ||
      !id_tipo_infraestructura_tecnologica ||
      !marca ||
      !modelo ||
      !descripcion ||
      !id_tipo_pertenencia ||
      !id_tipo_estado ||
      !costo_inicial ||
      !costo_mensual ||
      !cantidad
    ) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }

    // Crear el objeto transformado para enviar a la API externa
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_infraestructura_tecnologica: Number(
        id_tipo_infraestructura_tecnologica,
      ),
      marca: marca.trim(),
      modelo: modelo.trim(),
      descripcion: descripcion.trim(),
      id_tipo_pertenencia: Number(id_tipo_pertenencia),
      id_tipo_estado: Number(id_tipo_estado),
      costo_inicial: costo_inicial.toString(),
      costo_mensual: costo_mensual.toString(),
      cantidad: Number(cantidad),
    };

    console.log('Payload enviado a la API externa:', payload);

    // Enviar el objeto transformado a la API externa
    const response = await axios.post(API_URL, payload);

    // Retornar la respuesta de la API externa al cliente
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al enviar datos a la API externa:', error.message);

    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al registrar la tecnología.',
      details: error.response?.data || error.message,
    });
  }
}
