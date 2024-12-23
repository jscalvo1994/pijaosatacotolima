/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

interface InfraestructuraFormProps {
  id_emprendimiento: number;
  onClose: () => void;
  onSuccess: () => void;
}

const InfraestructuraForm: React.FC<InfraestructuraFormProps> = ({
  id_emprendimiento,
}) => {
  const [tipo, setTipo] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({
    id_emprendimiento,
    id_tipo_infraestructura_fisica: '',
    ubicacion: '',
    dimensiones: '',
    id_infraestructura_fisica_uso_terreno: '',
    id_tipo_pertenencia: '',
    descripcion: '',
    costo_inicial: '',
    costo_mensual: '',
    id_tipo_clima: '',
    id_tipo_infraestructura_fisica_vehiculo: '',
    cantidad: '',
    id_tipo_infraestructura_fisica_servicio_publico: '',
    proveedor: '',
    id_tipo_estado: '',
  });

  const [options, setOptions] = useState<any>({
    infraestructura: [],
    usoTerreno: [],
    pertenencia: [],
    clima: [],
    vehiculos: [],
    serviciosPublicos: [],
    estado: [],
    Tip_servicio: [],
  });

  const fetchOptions = async (endpoint: string, key: string) => {
    try {
      const response = await fetch(
        `/api/send/tipo_infraestructuras?tipo=${endpoint}`,
      );
      if (!response.ok) {
        throw new Error(`Error al cargar ${endpoint}`);
      }
      const data = await response.json();
      setOptions((prev: any) => ({ ...prev, [key]: data }));
    } catch (error) {
      console.error(`Error en fetchOptions para ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    fetchOptions('tipo_infraestructura_fisica', 'infraestructura');
    fetchOptions('tipo_infraestructura_fisica_uso_terreno', 'usoTerreno');
    fetchOptions('tipo_pertenencia', 'pertenencia');
    fetchOptions('tipo_clima', 'clima');
    fetchOptions('tipo_infraestructura_fisica_vehiculo', 'vehiculos');
    fetchOptions(
      'tipo_infraestructura_fisica_servicio_publico',
      'serviciosPublicos',
    );
    fetchOptions('tipo_estado', 'estado');
    fetchOptions('tipo_inf_fisica_serv_pub', 'Tip_servicio');
    fetchOptions('tipo_infraestructura_fisica_local', 'locales');
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedTipo =
      options.infraestructura.find((o: any) => o.id.toString() === selectedId)
        ?.nombre || null;
    setTipo(selectedTipo);
    setFormData((prev: any) => ({
      ...prev,
      id_tipo_infraestructura_fisica: selectedId,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ruta para el backend según el tipo
    const endpoint =
      tipo === 'LOCAL'
        ? '/api/insert/infr_fisica_local'
        : tipo === 'TERRENO'
          ? '/api/insert/infr_fisica_terreno'
          : tipo === 'VEHÍCULO'
            ? '/api/insert/infr_fisica_vehiculo'
            : tipo === 'SERVICIO PÚBLICO'
              ? '/api/insert/infr_fisica_serv_pub'
              : null;

    if (!endpoint) {
      console.error('Tipo de infraestructura no soportado.');
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: tipo === 'SERVICIOS PÚBLICOS' ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }

      const result = await response.json();
      console.log('Respuesta del backend:', result);
      alert(`Infraestructura ${tipo} añadida correctamente`);
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al guardar la infraestructura');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Registrar Infraestructura</h3>
      <div>
        <label>Seleccione Tipo de Infraestructura: {options.nombre}</label>
        <select
          name="id_tipo_infraestructura_fisica"
          className="w-full p-2 border rounded"
          value={formData.id_tipo_infraestructura_fisica}
          onChange={handleTipoChange}
        >
          <option value="">Seleccione</option>
          {options.infraestructura.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Campos Dinámicos para Terreno */}
      {tipo === 'TERRENO' && (
        <>
          <div>
            <label>Ubicación:</label>
            <input
              type="text"
              name="ubicacion"
              className="w-full p-2 border rounded"
              value={formData.ubicacion}
              onChange={handleInputChange}
              placeholder="Ingrese la ubicación"
            />
          </div>
          <div>
            <label>Dimensiones:</label>
            <input
              type="text"
              name="dimensiones"
              className="w-full p-2 border rounded"
              value={formData.dimensiones}
              onChange={handleInputChange}
              placeholder="Ingrese las dimensiones"
            />
          </div>
          <div>
            <label>Uso del Terreno:</label>
            <select
              name="id_infraestructura_fisica_uso_terreno"
              className="w-full p-2 border rounded"
              value={formData.id_infraestructura_fisica_uso_terreno}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.usoTerreno.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pertenencia:</label>
            <select
              name="id_tipo_pertenencia"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_pertenencia}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.pertenencia.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Clima:</label>
            <select
              name="id_tipo_clima"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_clima}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.clima.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Ingrese una descripción"
            />
          </div>
          <div>
            <label>Costo Inicial:</label>
            <input
              type="number"
              name="costo_inicial"
              className="w-full p-2 border rounded"
              value={formData.costo_inicial}
              onChange={handleInputChange}
              placeholder="Ingrese el costo inicial"
            />
          </div>
          <div>
            <label>Costo Mensual:</label>
            <input
              type="number"
              name="costo_mensual"
              className="w-full p-2 border rounded"
              value={formData.costo_mensual}
              onChange={handleInputChange}
              placeholder="Ingrese el costo mensual"
            />
          </div>
        </>
      )}

      {/* Campos Dinámicos para Local */}
      {tipo === 'LOCAL' && (
        <>
          <div>
            <label>Ubicación:</label>
            <input
              type="text"
              name="ubicacion"
              className="w-full p-2 border rounded"
              value={formData.ubicacion}
              onChange={handleInputChange}
              placeholder="Ingrese la ubicación"
            />
          </div>
          <div>
            <label>Dimensiones:</label>
            <input
              type="text"
              name="dimensiones"
              className="w-full p-2 border rounded"
              value={formData.dimensiones}
              onChange={handleInputChange}
              placeholder="Ingrese las dimensiones"
            />
          </div>
          <div>
            <label>Tipo de Local:</label>
            <select
              name="id_tipo_infraestructura_fisica_local"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_infraestructura_fisica_local}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.locales.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pertenencia:</label>
            <select
              name="id_tipo_pertenencia"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_pertenencia}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.pertenencia.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Describa el local"
            />
          </div>
          <div>
            <label>Costo Inicial:</label>
            <input
              type="number"
              name="costo_inicial"
              className="w-full p-2 border rounded"
              value={formData.costo_inicial}
              onChange={handleInputChange}
              placeholder="Ingrese el costo inicial"
            />
          </div>
          <div>
            <label>Costo Mensual:</label>
            <input
              type="number"
              name="costo_mensual"
              className="w-full p-2 border rounded"
              value={formData.costo_mensual}
              onChange={handleInputChange}
              placeholder="Ingrese el costo mensual"
            />
          </div>
        </>
      )}

      {/* Campos Dinámicos para Vehículos */}
      {tipo === 'VEHÍCULO' && (
        <>
          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Describa el vehículo"
            />
          </div>
          <div>
            <label>Vehículo:</label>
            <select
              name="id_tipo_infraestructura_fisica_vehiculo"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_infraestructura_fisica_vehiculo}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.vehiculos.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Pertenencia:</label>
            <select
              name="id_tipo_pertenencia"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_pertenencia}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.pertenencia.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Costo Inicial:</label>
            <input
              type="number"
              name="costo_inicial"
              className="w-full p-2 border rounded"
              value={formData.costo_inicial}
              onChange={handleInputChange}
              placeholder="Ingrese el costo inicial"
            />
          </div>
          <div>
            <label>Costo Mensual:</label>
            <input
              type="number"
              name="costo_mensual"
              className="w-full p-2 border rounded"
              value={formData.costo_mensual}
              onChange={handleInputChange}
              placeholder="Ingrese el costo mensual"
            />
          </div>
          <div>
            <label>Cantidad:</label>
            <input
              type="number"
              name="cantidad"
              className="w-full p-2 border rounded"
              value={formData.cantidad}
              onChange={handleInputChange}
              placeholder="Ingrese la cantidad"
            />
          </div>
        </>
      )}
      {/* Campos Dinámicos para Servicios Públicos */}
      {tipo === 'SERVICIO PÚBLICO' && (
        <>
          <div>
            <label>Tipo Infraestructura Servicio Publico:</label>
            <select
              name="id_tipo_infraestructura_fisica_servicio_publico"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_infraestructura_fisica_servicio_publico}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.Tip_servicio.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              name="descripcion"
              className="w-full p-2 border rounded"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Describa el servicio público"
            />
          </div>
          <div>
            <label>Proveedor:</label>
            <input
              type="text"
              name="proveedor"
              className="w-full p-2 border rounded"
              value={formData.proveedor}
              onChange={handleInputChange}
              placeholder="Ingrese el proveedor"
            />
          </div>
          <div>
            <label>Tipo de Estado:</label>
            <select
              name="id_tipo_estado"
              className="w-full p-2 border rounded"
              value={formData.id_tipo_estado}
              onChange={handleInputChange}
            >
              <option value="">Seleccione</option>
              {options.estado.map((option: any) => (
                <option key={option.id} value={option.id}>
                  {option.nombre}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Costo Inicial:</label>
            <input
              type="number"
              name="costo_inicial"
              className="w-full p-2 border rounded"
              value={formData.costo_inicial}
              onChange={handleInputChange}
              placeholder="Ingrese el costo inicial"
            />
          </div>
          <div>
            <label>Costo Mensual:</label>
            <input
              type="number"
              name="costo_mensual"
              className="w-full p-2 border rounded"
              value={formData.costo_mensual}
              onChange={handleInputChange}
              placeholder="Ingrese el costo mensual"
            />
          </div>
        </>
      )}

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Guardar
      </button>
    </form>
  );
};

export default InfraestructuraForm;
