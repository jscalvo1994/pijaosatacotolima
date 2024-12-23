/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

interface FormProductsProps {
  id_emprendimiento: number;
  onClose: () => void;
  onSuccess: () => void;
}

const FormProducts: React.FC<FormProductsProps> = ({
  id_emprendimiento,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<any>({
    id_emprendimiento,
    nombre: '',
    descripcion: '',
    id_tipo_unidad_medida: '',
    vender_x_tiempo: '',
    hacer_x_tiempo: '',
  });
  const [unidadMedidaOptions, setUnidadMedidaOptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchUnidadMedida = async () => {
      try {
        const response = await fetch('/api/send/unidad_medida');
        if (!response.ok) {
          throw new Error('Error al cargar las unidades de medida');
        }
        const data = await response.json();
        setUnidadMedidaOptions(data);
      } catch (error) {
        console.error('Error en fetchUnidadMedida:', error);
      }
    };

    fetchUnidadMedida();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/insert/producto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el producto');
      }

      alert('Producto registrado con éxito');
      onSuccess();
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Ocurrió un error al guardar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Registrar Producto</h3>

      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label>Unidad de Medida:</label>
        <select
          name="id_tipo_unidad_medida"
          value={formData.id_tipo_unidad_medida}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione</option>
          {unidadMedidaOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Unidades Vendidas por Tiempo:</label>
        <input
          type="text"
          name="vender_x_tiempo"
          value={formData.vender_x_tiempo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label>Unidades Producidas por Tiempo:</label>
        <input
          type="text"
          name="hacer_x_tiempo"
          value={formData.hacer_x_tiempo}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Guardar
      </button>
      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
      >
        Cancelar
      </button>
    </form>
  );
};

export default FormProducts;
