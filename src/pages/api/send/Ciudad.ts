/* eslint-disable prettier/prettier */
export const config = {
  runtime: 'edge', // Establecer que esta función API debe ejecutarse en el entorno Edge
};

const handler = async (req: Request) => {
  try {
    // Obtener el ID del empleado desde los parámetros de la solicitud
    const { id_departamento } = await req.json();
    console.log('Ciudad', id_departamento);
    // Realizar la solicitud POST al endpoint externo con el ID del empleado
    const response = await fetch(
      `https://dfwh-5ca5356b291e.herokuapp.com/receive/ciudad_xid`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_departamento }),
      },
    );

    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    // Obtener los datos de la respuesta
    const data = await response.json();

    // Devolver la respuesta con los datos del empleado
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ Status: 'Error desconocido' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler; // Exportación por defecto para que Next.js lo reconozca
