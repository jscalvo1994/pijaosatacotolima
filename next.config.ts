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
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_unidad_medida',
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
      {
        source: '/api/update/InfrFisicaLocal',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_vehiculo_xid',
      },
      {
        source: '/api/update/InfrFisicaLocal',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_local_xid',
      },
      {
        source: '/api/update/InfrFisicaLocal',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_serv_pub_xid',
      },
      {
        source: '/api/update/Maquinaria',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria_xid',
      },
      {
        source: '/api/insert/empleado',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/receive/empleado',
      },
      {
        source: '/api/insert/emprendedor',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendedor',
      },
      {
        source: '/api/insert/emprendimiento',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendimiento',
      },
      {
        source: '/api/insert/infr_fisica_local',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_local',
      },
      {
        source: '/api/insert/infr_fisica_serv_pub',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_serv_pub',
      },
      {
        source: '/api/insert/infr_fisica_terreno',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_terreno',
      },
      {
        source: '/api/insert/infr_fisica_vehiculo',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_fisica_vehiculo',
      },
      {
        source: '/api/insert/infr_tecnologica',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_tecnologica',
      },
      {
        source: '/api/insert/maquinaria',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria',
      },
      {
        source: '/api/insert/material',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/receive/material',
      },
      {
        source: '/api/insert/producto',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/receive/producto',
      },
      // Nuevas rutas añadidas
      {
        source: '/api/send/tipo_meta_corto_plazo',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_meta_corto_plazo',
      },
      {
        source: '/api/send/tipo_capital_inicial',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_capital_inicial',
      },
      {
        source: '/api/send/tipo_origen_capital_inicial',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_origen_capital_inicial',
      },
      {
        source: '/api/send/tipo_publico_objetivo',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_publico_objetivo',
      },
      {
        source: '/api/send/tipo_estrategia_precios',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_estrategia_precios',
      },
      {
        source: '/api/send/tipo_admin_emprendimiento',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_admin_emprendimiento',
      },
      {
        source: '/api/send/tipo_empleado_experiencia',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/send/tipo_empleado_experiencia',
      },
      {
        source: '/api/send/tipo_infraestructuras',
        destination: 'http://localhost:3000/api/tipo_infraestructuras',
      },
      {
        source: '/api/send/InfrTecnologica',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/infr_tecnologica_xid',
      },
      {
        source: '/api/insert/insert_maquinarias',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/maquinaria',
      },
      {
        source: '/api/insert/producto',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/receive/producto',
      },
      {
        source: '/api/insert/tipo_material',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/tipo_material',
      },
      {
        source: '/api/send/Material',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/material_xid',
      },
      {
        source: '/api/auth/emprendedor',
        destination:
          'https://dfwh-5ca5356b291e.herokuapp.com/receive/emprendedor',
      },
      {
        source: '/api/auth/emprendedor',
        destination: 'https://dfwh-5ca5356b291e.herokuapp.com/receive/auth',
      },
    ];
  },
};

export default nextConfig;
