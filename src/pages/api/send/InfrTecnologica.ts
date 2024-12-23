/* eslint-disable @typescript-eslint/no-explicit-any */
export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  try {
    console.log('Iniciando el handler de infraestructura tecnológica...');
    // Leer el cuerpo de la solicitud
    const { id_infr_tecnologica } = await req.json();
    console.log('ID recibido:', id_infr_tecnologica);

    // Validar el ID recibido
    if (!id_infr_tecnologica) {
      console.error('ID de infraestructura tecnológica faltante.');
      return new Response(
        JSON.stringify({
          error: 'ID de infraestructura tecnológica es requerido.',
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    // Realizar la solicitud al servidor externo
    console.log('Realizando la solicitud al servidor externo...');
    const response = await fetch(
      'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_tecnologica_xid',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_infr_tecnologica }),
      },
    );

    console.log('Respuesta del servidor externo, estado:', response.status);

    // Verificar si la respuesta del servidor externo fue exitosa
    if (!response.ok) {
      const errorDetails = await response.text();
      console.error(
        'Error al realizar la solicitud al servidor externo:',
        errorDetails,
      );
      return new Response(
        JSON.stringify({ error: 'Error en la solicitud al servidor externo.' }),
        {
          status: response.status,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Procesar y retornar la respuesta del servidor externo
    const data = await response.json();
    console.log('Datos recibidos del servidor externo:', data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error(
      'Error inesperado en el handler:',
      error.message,
      error.stack,
    );
    return new Response(
      JSON.stringify({
        error: 'Error inesperado en el servidor.',
        details: error.message,
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};

export default handler;
