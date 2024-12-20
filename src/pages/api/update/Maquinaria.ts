export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  const body = await req.json();
  console.log('Cuerpo recibido:', body);
  try {
    const { id_maquinaria } = await req.json();

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

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return new Response(JSON.stringify({ error: 'error desconocido' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler;
