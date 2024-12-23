/* eslint-disable @typescript-eslint/no-explicit-any */
// api/update/InfFisicaLocal.ts
export const config = {
  runtime: 'edge',
};

const handler = async (req: Request) => {
  try {
    const body = await req.json();

    // Extraer el ID y el tipo del cuerpo
    const { id, tipo } = body;

    if (!id || !tipo) {
      throw new Error('ID o tipo no proporcionado en la solicitud');
    }

    // Seleccionar el endpoint y el cuerpo de la solicitud basado en el tipo
    let endpoint = '';
    let requestBody = {};

    switch (tipo) {
      case 'terrenos':
        endpoint =
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_terreno_xid';
        requestBody = { id_infr_fisica_terreno: id };
        break;

      case 'vehículos':
        endpoint =
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_vehiculo_xid';
        requestBody = { id_infr_fisica_vehiculo: id };
        break;

      case 'locales':
        endpoint =
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_local_xid';
        requestBody = { id_infr_fisica_local: id };
        break;

      case 'servicios publicos':
        endpoint =
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_serv_pub_xid';
        requestBody = { id_infr_fisica_serv_pub: id };
        break;

      default:
        throw new Error(`Tipo no reconocido: ${tipo}`);
    }

    // Realizar la consulta al endpoint seleccionado
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(
        `Error al obtener detalles para el tipo: ${tipo}, ID: ${id}`,
      );
    }

    const data = await response.json();

    // Formatear los datos en el backend: excluir "id" y preparar para el frontend
    const formattedData = Object.entries(data[0])
      .filter(([key]) => key.toLowerCase() !== 'id') // Excluir campo ID
      .map(([key, value]) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1), // Capitalizar clave
        value:
          typeof value === 'object'
            ? JSON.stringify(value)
            : value || 'No disponible', // Asegurar formato string
      }));

    return new Response(JSON.stringify(formattedData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error('Error en el handler:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export default handler;
