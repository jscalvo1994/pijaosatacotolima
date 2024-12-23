/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL = 'https://dfwh-5ca5356b291e.herokuapp.com/receive/material';

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
      id_producto,
      nombre,
      descripcion,
      id_tipo_material,
      id_tipo_unidad_medida,
      cantidad,
      costo_unitario,
    } = req.body;

    // Validar los campos requeridos
    if (
      !id_producto ||
      !nombre ||
      !descripcion ||
      !id_tipo_material ||
      !id_tipo_unidad_medida ||
      !cantidad ||
      !costo_unitario
    ) {
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }

    // Crear el objeto transformado para enviar a la API externa
    const payload = {
      id_producto: Number(id_producto),
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      id_tipo_material: Number(id_tipo_material),
      id_tipo_unidad_medida: Number(id_tipo_unidad_medida),
      cantidad: Number(cantidad),
      costo_unitario: costo_unitario.toString(),
    };

    console.log('Payload enviado a la API externa:', payload);

    // Enviar el objeto transformado a la API externa
    const response = await axios.post(API_URL, payload);

    // Retornar la respuesta de la API externa al cliente
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al enviar datos a la API externa:', error.message);

    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al registrar el material.',
      details: error.response?.data || error.message,
    });
  }
}
