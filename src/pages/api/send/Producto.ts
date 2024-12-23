/* eslint-disable @typescript-eslint/no-explicit-any */
export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  try {
    // Leer el cuerpo de la solicitud
    const body = await req.json();
    const { id_producto } = body;

    if (!id_producto) {
      throw new Error('ID de producto no proporcionado');
    }

    console.log('Procesando producto ID:', id_producto);

    // Realizar la solicitud al endpoint externo
    const response = await fetch(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/producto_xid',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_producto }),
      },
    );

    if (!response.ok) {
      throw new Error('Error en la solicitud al servidor');
    }

    const data = await response.json();

    console.log('Datos obtenidos:', data);

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
