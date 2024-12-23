/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';

interface FormMaterialsProps {
  id_emprendimiento: number;
  productos: { id: number; producto: string }[];
  onClose: () => void;
  onSuccess: () => void;
}

const FormMaterials: React.FC<FormMaterialsProps> = ({
  productos,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] = useState<any>({
    id_producto: '',
    nombre: '',
    descripcion: '',
    id_tipo_material: '',
    id_tipo_unidad_medida: '',
    cantidad: '',
    costo_unitario: '',
  });
  const [materialOptions, setMaterialOptions] = useState<any[]>([]);
  const [unidadMedidaOptions, setUnidadMedidaOptions] = useState<any[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const [materialRes, unidadMedidaRes] = await Promise.all([
          fetch('/api/send/tipo_material'),
          fetch('/api/send/unidad_medida'),
        ]);

        if (!materialRes.ok || !unidadMedidaRes.ok) {
          throw new Error('Error al cargar opciones');
        }

        const [materialData, unidadMedidaData] = await Promise.all([
          materialRes.json(),
          unidadMedidaRes.json(),
        ]);

        setMaterialOptions(materialData);
        setUnidadMedidaOptions(unidadMedidaData);
      } catch (error) {
        console.error('Error al cargar datos:', error);
      }
    };

    fetchOptions();
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
      const response = await fetch('/api/insert/material', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar el material');
      }

      alert('Material registrado con éxito');
      onSuccess();
    } catch (error) {
      console.error('Error al enviar datos:', error);
      alert('Ocurrió un error al guardar el material');
    }
  };

  const isDisabled = !formData.id_producto; // Bloquear campos si no hay producto seleccionado

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold">Registrar Material</h3>

      <div>
        <label>Producto:</label>
        <select
          name="id_producto"
          value={formData.id_producto}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Seleccione</option>
          {productos.map((producto) => (
            <option key={producto.id} value={producto.id}>
              {producto.producto}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          disabled={isDisabled}
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
          disabled={isDisabled}
        />
      </div>

      <div>
        <label>Tipo de Material:</label>
        <select
          name="id_tipo_material"
          value={formData.id_tipo_material}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          disabled={isDisabled}
        >
          <option value="">Seleccione</option>
          {materialOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Unidad de Medida:</label>
        <select
          name="id_tipo_unidad_medida"
          value={formData.id_tipo_unidad_medida}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          disabled={isDisabled}
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
        <label>Cantidad:</label>
        <input
          type="number"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          disabled={isDisabled}
        />
      </div>

      <div>
        <label>Costo Unitario:</label>
        <input
          type="number"
          name="costo_unitario"
          value={formData.costo_unitario}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          disabled={isDisabled}
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

export default FormMaterials;
