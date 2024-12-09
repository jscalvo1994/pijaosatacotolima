import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    console.log('tipo_clima');
    const response = await axios.get(
      'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_clima',
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener tipo_clima:', error);
    res.status(500).json({ error: 'Error al obtener tipo_clima' });
  }
}
