/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'https://dfwh-5ca5356b291e.herokuapp.com/receive/producto';

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
    // Extraer los datos del cuerpo de la solicitud
    const {
      id_emprendimiento,
      nombre,
      descripcion,
      id_tipo_unidad_medida,
      vender_x_tiempo,
      hacer_x_tiempo,
    } = req.body;

    // Validar campos obligatorios
    if (
      !id_emprendimiento ||
      !nombre ||
      !id_tipo_unidad_medida ||
      (!vender_x_tiempo && !hacer_x_tiempo)
    ) {
      return res.status(400).json({
        error: 'Todos los campos obligatorios deben ser completados.',
      });
    }

    // Construir el payload para la API externa
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      nombre: nombre.trim(),
      descripcion: descripcion?.trim() || '',
      id_tipo_unidad_medida: Number(id_tipo_unidad_medida),
      vender_x_tiempo: vender_x_tiempo?.trim() || null,
      hacer_x_tiempo: hacer_x_tiempo?.trim() || null,
    };

    console.log('Payload enviado a la API externa:', payload);

    // Enviar los datos a la API externa
    const response = await axios.post(API_URL, payload);

    // Retornar la respuesta de la API externa al cliente
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al enviar datos a la API externa:', error.message);
    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al registrar el producto.',
      details: error.response?.data || error.message,
    });
  }
}
