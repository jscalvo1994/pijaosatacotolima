import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/send/tipo_documento',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_documento',
      },
      {
        source: '/api/send/unidad_medida',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/unidad_medida',
      },
      {
        source: '/api/send/tipo_terreno',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_terreno',
      },
      {
        source: '/api/send/tipo_modelo_negocio',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_modelo_negocio',
      },
      {
        source: '/api/send/tipo_marketing_general',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_marketing_general',
      },
      {
        source: '/api/send/tipo_empresa',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_empresa',
      },
      {
        source: '/api/send/tipo_contratacion',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_contratacion',
      },
      {
        source: '/api/send/tipo_clima',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_clima',
      },
      {
        source: '/api/send/tipo_canal_distribucion',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_canal_distribucion',
      },
      {
        source: '/api/send/sexo',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/send/sexo',
      },
      {
        source: '/api/send/nivel_educativo',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/nivel_educativo',
      },
      {
        source: '/api/send/minoria',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_minoria',
      },
      {
        source: '/api/send/departamento',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_departamento',
      },
      {
        source: '/api/send/ciiu',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/send/ciiu',
      },
      {
        source: '/api/send/alcance_emprendimientos',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/alcance_emprendimiento',
      },
      {
        source: '/api/send/emprendimientos',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendimiento_xid',
      },
      {
        source: '/api/update/update_emprendedor',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendedor',
      },
      {
        source: '/api/update/Empleado',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/empleado_xid',
      },
      {
        source: '/api/update/InfrFisicaLocal',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_terreno_xid',
      },
    ];
  },
};

export default nextConfig;
