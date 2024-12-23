/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_URL =
  'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria_xid';

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
    const { id_maquinaria } = req.body;
    console.log();
    if (!id_maquinaria) {
      return res
        .status(400)
        .json({ error: 'El ID de la maquinaria es obligatorio.' });
    }

    // Enviar la solicitud al backend
    const response = await axios.post(API_URL, { id_maquinaria });

    // Retornar los datos al frontend
    return res.status(200).json(response.data);
  } catch (error: any) {
    console.error('Error al obtener detalles de maquinaria:', error.message);

    return res.status(error.response?.status || 500).json({
      error: 'Ocurrió un error al obtener los detalles de maquinaria.',
      details: error.response?.data || error.message,
    });
  }
}
