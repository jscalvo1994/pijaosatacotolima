/* eslint-disable @typescript-eslint/no-explicit-any */
export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  try {
    // Leer el cuerpo de la solicitud una sola vez
    const body = await req.json();
    const { id_maquinaria } = body;
    if (!id_maquinaria) {
      throw new Error('ID de maquinaria no proporcionado');
    }
    // Realizar la solicitud al endpoint externo
    const response = await fetch(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria_xid',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_maquinaria }),
      },
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    const data = await response.json();

    // Devolver los datos procesados
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error en el handler:', error.message);
    return new Response(
      JSON.stringify({ error: error.message || 'Error desconocido' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};

export default handler;
