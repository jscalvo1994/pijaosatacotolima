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

  // Validar que el ID del emprendimiento esté presente
  if (!id_emprendimiento) {
    return res
      .status(400)
      .json({ error: 'El campo id_emprendimiento es obligatorio' });
  }

  try {
    // Hacer la solicitud POST al endpoint externo
    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/save/procesar',
      { id_emprendimiento },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Retornar la respuesta del endpoint externo
    return res.status(200).json({
      message: 'El proceso de generación de PDF se inició con éxito.',
      data: response.data,
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);

    if (axios.isAxiosError(error)) {
      return res.status(500).json({
        error: 'Error al generar el PDF',
        details: error.response?.data || error.message,
      });
    }

    return res
      .status(500)
      .json({ error: 'Error desconocido al generar el PDF' });
  }
}
