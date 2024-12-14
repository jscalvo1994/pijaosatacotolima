import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Registrar el JSON que se está enviando
    console.log('Datos enviados al backend:', req.body);

    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendedor',
      req.body, // Aquí se envían los datos recibidos del cliente
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al enviar datos al backend:', error);

    // Registrar más detalles del error
    if (axios.isAxiosError(error)) {
      console.log('Datos de la solicitud fallida:', {
        data: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
    }

    return res.status(500).json({ error: 'Error al procesar la solicitud' });
  }
}
