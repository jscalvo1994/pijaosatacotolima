/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_vehiculo';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  console.log('Request recibido:', {
    method: req.method,
    body: req.body,
  });

  if (req.method !== 'POST') {
    console.error('Método no permitido. Solo se admite POST.');
    return res
      .status(405)
      .json({ error: 'Método no permitido. Solo se admite POST.' });
  }

  try {
    // Recibir el objeto desde el frontend
    const {
      id_emprendimiento,
      id_tipo_infraestructura_fisica,
      id_tipo_infraestructura_fisica_vehiculo,
      descripcion,
      id_tipo_pertenencia,
      costo_inicial,
      costo_mensual,
      cantidad,
    } = req.body;

    console.log('Datos recibidos desde el frontend:', {
      id_emprendimiento,
      id_tipo_infraestructura_fisica,
      id_tipo_infraestructura_fisica_vehiculo,
      descripcion,
      id_tipo_pertenencia,
      costo_inicial,
      costo_mensual,
      cantidad,
    });

    // Validar los datos obligatorios
    if (
      !id_emprendimiento ||
      !id_tipo_infraestructura_fisica ||
      !id_tipo_infraestructura_fisica_vehiculo ||
      !descripcion ||
      !id_tipo_pertenencia ||
      !costo_inicial ||
      !costo_mensual ||
      !cantidad
    ) {
      console.error('Faltan campos obligatorios en el cuerpo de la solicitud.');
      return res.status(400).json({
        error: 'Todos los campos son obligatorios.',
      });
    }

    // Organizar el objeto según el formato esperado por la API externa
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_infraestructura_fisica: Number(id_tipo_infraestructura_fisica),
      id_tipo_infraestructura_fisica_vehiculo: Number(
        id_tipo_infraestructura_fisica_vehiculo,
      ),
      descripcion: descripcion.trim(),
      id_tipo_pertenencia: Number(id_tipo_pertenencia),
      costo_inicial: costo_inicial.toString(),
      costo_mensual: costo_mensual.toString(),
      cantidad: Number(cantidad),
    };

    // Enviar el objeto a la API externa
    const response = await axios.post(API_URL, payload);

    console.log('Respuesta recibida del backend externo:', {
      status: response.status,
      data: response.data,
    });

    // Devolver la respuesta del backend externo al frontend
    return res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al INSERTAR el vehículo:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });

    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al actualizar el vehículo.',
      details: error.response?.data || error.message,
    });
  }
}
