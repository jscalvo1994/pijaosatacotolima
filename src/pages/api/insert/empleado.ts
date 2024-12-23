/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const {
      id_emprendimiento,
      id_tipo_contratacion,
      descripcion,
      cantidad,
      salario_mensual,
      horas_semanales,
    } = req.body;

    // Validar campos requeridos
    if (
      !id_emprendimiento ||
      !id_tipo_contratacion ||
      !descripcion ||
      !cantidad ||
      !salario_mensual ||
      !horas_semanales
    ) {
      return res
        .status(400)
        .json({ error: 'Todos los campos son obligatorios' });
    }

    // Formatear el cuerpo de la solicitud
    const payload = {
      id_emprendimiento: Number(id_emprendimiento),
      id_tipo_contratacion: Number(id_tipo_contratacion),
      descripcion,
      cantidad: Number(cantidad),
      salario_mensual: Number(salario_mensual),
      horas_semanales: Number(horas_semanales),
    };

    // Enviar los datos al backend
    const response = await axios.post(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/empleado',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    // Retornar la respuesta del backend
    res.status(200).json(response.data);
  } catch (err: any) {
    console.error('Error al insertar empleado:', err);
    if (err.response) {
      return res.status(err.response.status).json({
        error: err.response.data || 'Error desconocido en el backend',
      });
    }
    return res.status(500).json({ error: 'Error interno en el servidor' });
  }
}
