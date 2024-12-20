// api/update/InfFisicaLocal.ts
export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  console.log('archivo InfFisicaLocal.ts llamado');

  try {
    const body = await req.json();
    console.log('Cuerpo recibido:', body);

    // Extraer los terrenos del cuerpo
    const { terrenos } = body;

    if (!terrenos || !Array.isArray(terrenos)) {
      throw new Error('El cuerpo no contiene un array válido de terrenos');
    }

    // Procesar cada terreno y obtener detalles
    const terrenoDetallesPromises = terrenos.map(
      async (terreno: { id: number }) => {
        const response = await fetch(
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_terreno_xid',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_infr_fisica_terreno: terreno.id }),
          },
        );

        if (!response.ok) {
          throw new Error(
            `Error al obtener detalles del terreno con ID: ${terreno.id}`,
          );
        }

        const data = await response.json();
        return { id: terreno.id, ...data[0] }; // Agregar el ID original al detalle
      },
    );

    const terrenosDetalles = await Promise.all(terrenoDetallesPromises);

    return new Response(JSON.stringify(terrenosDetalles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error(error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler;
