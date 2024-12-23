/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria';

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
      id_tipo_maquinaria,
      descripcion,
      cantidad,
      id_tipo_pertenencia,
      costo_inicial,
      costo_mensual,
      id_tipo_estado,
    } = req.body;

    // Validar campos requeridos
    if (
      !id_emprendimiento ||
      !id_tipo_maquinaria ||
      !descripcion ||
      !cantidad ||
      !id_tipo_pertenencia ||
      !costo_inicial ||
      !costo_mensual ||
      !id_tipo_estado
    ) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }

    // Crear el payload para enviar al backend externo
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_maquinaria: Number(id_tipo_maquinaria),
      descripcion: descripcion.trim(),
      cantidad: Number(cantidad),
      id_tipo_pertenencia: Number(id_tipo_pertenencia),
      costo_inicial: costo_inicial.toString(),
      costo_mensual: costo_mensual.toString(),
      id_tipo_estado: Number(id_tipo_estado),
    };

    console.log('Payload enviado a la API externa:', payload);

    // Enviar la solicitud al backend externo
    const response = await axios.post(API_URL, payload);

    // Devolver la respuesta de la API externa
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al enviar los datos a la API externa:', error.message);
    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al registrar la maquinaria.',
      details: error.response?.data || error.message,
    });
  }
}
