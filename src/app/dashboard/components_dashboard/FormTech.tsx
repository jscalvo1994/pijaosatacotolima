/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

interface FormTechProps {
  id_emprendimiento: number;
  onClose: () => void;
  onSuccess: () => void;
}

const FormTech: React.FC<FormTechProps> = ({
  id_emprendimiento,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<any>({
    id_emprendimiento,
    id_tipo_infraestructura_tecnologica: '',
    marca: '',
    modelo: '',
    descripcion: '',
    id_tipo_pertenencia: '',
    id_tipo_estado: '',
    costo_inicial: '',
    costo_mensual: '',
    cantidad: '',
  });

  const [options, setOptions] = useState<any>({
    tecnologias: [],
    pertenencia: [],
    estado: [],
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
      console.error(`Error al obtener opciones para ${endpoint}:`, error);
    }
  };

  useEffect(() => {
    fetchOptions('tipo_infraestructura_tecnologica', 'tecnologias');
    fetchOptions('tipo_pertenencia', 'pertenencia');
    fetchOptions('tipo_estado', 'estado');
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Objeto construido:', formData);

    try {
      const response = await fetch('/api/insert/infr_tecnologica', {
        method: 'POST',
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
      onSuccess();
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Ocurrió un error al guardar la tecnología');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Añadir Tecnología</h3>

      <div>
        <label>Tipo de Tecnología:</label>
        <select
          name="id_tipo_infraestructura_tecnologica"
          className="w-full p-2 border rounded"
          value={formData.id_tipo_infraestructura_tecnologica}
          onChange={handleInputChange}
        >
          <option value="">Seleccione</option>
          {options.tecnologias.map((option: any) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Marca:</label>
        <input
          type="text"
          name="marca"
          className="w-full p-2 border rounded"
          value={formData.marca}
          onChange={handleInputChange}
          placeholder="Ingrese la marca"
        />
      </div>

      <div>
        <label>Modelo:</label>
        <input
          type="text"
          name="modelo"
          className="w-full p-2 border rounded"
          value={formData.modelo}
          onChange={handleInputChange}
          placeholder="Ingrese el modelo"
        />
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
        <label>Estado:</label>
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

      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Guardar
        </button>
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormTech;
