/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const endpoint =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_terreno';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Use POST.' });
  }
  console.log('body recive', req.body);
  try {
    const {
      id_emprendimiento,
      id_tipo_infraestructura_fisica,
      ubicacion,
      dimensiones,
      id_infraestructura_fisica_uso_terreno,
      id_tipo_pertenencia,
      descripcion,
      costo_inicial,
      costo_mensual,
      id_tipo_clima,
    } = req.body;

    // Log del objeto recibido desde el frontend
    // Validación básica de los datos
    if (
      !id_emprendimiento ||
      !id_tipo_infraestructura_fisica ||
      !ubicacion ||
      !dimensiones ||
      !id_infraestructura_fisica_uso_terreno ||
      !id_tipo_pertenencia ||
      !descripcion ||
      !costo_inicial ||
      !costo_mensual ||
      !id_tipo_clima
    ) {
      return res
        .status(400)
        .json({ error: 'Todos los campos son obligatorios.' });
    }
    console.log('body recive', req.body);
    // Construcción del payload
    const payload = {
      id_emprendimiento: parseInt(id_emprendimiento, 10),
      id_tipo_infraestructura_fisica: parseInt(
        id_tipo_infraestructura_fisica,
        10,
      ),
      ubicacion,
      dimensiones,
      id_infraestructura_fisica_uso_terreno: parseInt(
        id_infraestructura_fisica_uso_terreno,
        10,
      ),
      id_tipo_pertenencia: parseInt(id_tipo_pertenencia, 10),
      descripcion,
      costo_inicial: costo_inicial.toString(),
      costo_mensual: costo_mensual.toString(),
      id_tipo_clima: parseInt(id_tipo_clima, 10),
    };

    // Log del objeto transformado para el backend
    console.log('payload', payload);
    // Enviar datos al endpoint externo
    const response = await axios.post(endpoint, payload);

    // Responder con éxito si el endpoint externo responde correctamente
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Error al procesar la solicitud:', error.message);

    // Manejar errores del endpoint externo o de la solicitud
    if (error.response) {
      return res.status(error.response.status).json({
        error:
          error.response.data ||
          'Error al enviar los datos al endpoint externo.',
      });
    }

    res.status(500).json({ error: 'Error interno del servidor.' });
  }
}
