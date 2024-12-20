/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { id_emprendimiento } = req.body;
  if (!id_emprendimiento) {
    return res
      .status(400)
      .json({ error: 'El campo id_emprendimiento es obligatorio' });
  }

  console.log('ID de emprendimiento enviado:', id_emprendimiento);

  try {
    // Enviar el ID al backend con el formato correcto
    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendimiento_xid',
      { id_emprendimiento }, // Aquí se asegura que el campo tenga el formato correcto
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    console.log('Respuesta del backend:', response.data);
    return res.status(200).json(response.data); // Devuelve la respuesta del backend al frontend
  } catch (err: any) {
    console.error('Error al obtener los datos del emprendimiento:', err);

    // Manejar errores específicos del backend
    if (err.response) {
      return res.status(err.response.status).json({
        error: err.response.data || 'Error desconocido en el backend',
      });
    }

    // Manejar errores generales
    return res
      .status(500)
      .json({ error: 'Error interno al procesar la solicitud' });
  }
}
