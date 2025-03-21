/* eslint-disable @typescript-eslint/no-explicit-any */
//api insert emprendimiento
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const formData = req.body;
    console.log('form data', formData);
    // Agregar id_google al cuerpo de los datos
    const transformedData = {
      ...formData,
      id_departamento: parseInt(formData.id_departamento, 10),
      id_ciudad: parseInt(formData.id_ciudad, 10),
      id_tipo_canal_distribucion: parseInt(
        formData.id_tipo_canal_distribucion,
        10,
      ),
      id_tipo_meta_corto_plazo: parseInt(formData.id_tipo_meta_corto_plazo, 10),
      id_tipo_capital_inicial: parseInt(formData.id_tipo_capital_inicial, 10),
      id_tipo_origen_capital_inicial: parseInt(
        formData.id_tipo_origen_capital_inicial,
        10,
      ),
      id_tipo_publico_objetivo: parseInt(formData.id_tipo_publico_objetivo, 10),
      id_tipo_estrategia_precios: parseInt(
        formData.id_tipo_estrategia_precios,
        10,
      ),
      id_tipo_admin_emprendimiento: parseInt(
        formData.id_tipo_admin_emprendimiento,
        10,
      ),
      id_tipo_empleado_experiencia: parseInt(
        formData.id_tipo_empleado_experiencia,
        10,
      ),
    };

    console.log('Datos transformados para el backend:', transformedData);

    // Enviar los datos transformados al backend externo
    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendimiento',
      transformedData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      return res.status(200).json({
        message: 'Emprendimiento creado con éxito',
        data: response.data,
      });
    } else {
      return res
        .status(response.status)
        .json({ error: 'Error al crear el emprendimiento' });
    }
  } catch (error: any) {
    console.error('Error en el handler:', error);

    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data || 'Error desconocido en el backend externo',
      });
    }

    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
