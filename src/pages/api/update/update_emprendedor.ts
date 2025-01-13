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
    // Registrar el JSON que se está enviando al handler
    console.log('Datos recibidos del cliente:', req.body);

    // Construir el JSON con el formato correcto
    const payload = {
      id_documento: 1, // Valor fijo
      documento: req.body.documento || '', // Asignar número de documento
      id_sexo: Number(req.body.id_sexo) || 0, // Convertir sexo a número
      nombre: req.body.nombre || '',
      telefono: req.body.telefono || '',
      email: req.body.email || '',
      id_google: req.body.id_google || '', // Asignar id_google si se recibe
      id_nivel_educativo: Number(req.body.id_nivel_educativo) || 0, // Convertir a número
      fecha_nacimiento: req.body.fecha_nacimiento || '',
      id_departamento_nacimiento:
        Number(req.body.id_departamento_nacimiento) || 0,
      id_ciudad_nacimiento: Number(req.body.id_ciudad_nacimiento) || 0,
      id_departamento_residencia:
        Number(req.body.id_departamento_residencia) || 0,
      id_ciudad_residencia: Number(req.body.id_ciudad_residencia) || 0,
      id_minoria: Number(req.body.id_minoria) || 0,
    };

    console.log('Datos reestructurados para el backend:', payload);

    // Enviar los datos al endpoint externo
    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendedor',
      payload, // JSON reestructurado
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Retornar la respuesta al cliente
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
