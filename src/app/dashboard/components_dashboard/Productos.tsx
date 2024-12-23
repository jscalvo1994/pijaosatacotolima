/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import FormProducts from './FormProducts'; // Formulario para productos
import FormMaterials from './FormMaterials'; // Formulario para materiales

interface ProductosProps {
  productos: { id: number; producto: string }[]; // Lista de productos
  id_emprendimiento: number; // ID del emprendimiento
}

const Productos: React.FC<ProductosProps> = ({
  productos,
  id_emprendimiento,
}) => {
  const [detallesProducto, setDetallesProducto] = useState<any | null>(null);
  const [materialDetalles, setMaterialDetalles] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showFormProduct, setShowFormProduct] = useState<boolean>(false); // Estado para el formulario de productos
  const [showFormMaterial, setShowFormMaterial] = useState<boolean>(false); // Estado para el formulario de materiales
  const [activeDetails, setActiveDetails] = useState<{
    producto?: number;
    material?: number;
  } | null>(null); // Estado para el ID activo de producto o material

  const fetchDetallesProducto = async (id_producto: number) => {
    setLoading(true);
    setError(null);
    setActiveDetails({ producto: id_producto, material: undefined });

    try {
      const response = await fetch(`/api/send/Producto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_producto }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener los detalles del producto');
      }

      const data = await response.json();
      setDetallesProducto(data);
    } catch (err: any) {
      console.error('Error en fetchDetallesProducto:', err.message);
      setError('No se pudo obtener los detalles del producto.');
    } finally {
      setLoading(false);
    }
  };

  const fetchDetallesMaterial = async (id_material: number) => {
    setLoading(true);
    setError(null);
    setActiveDetails({ producto: undefined, material: id_material });

    try {
      const response = await fetch(`/api/send/Material`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_material }),
      });

      if (!response.ok) {
        throw new Error('Error al obtener los detalles del material');
      }

      const data = await response.json();
      setMaterialDetalles(data);
    } catch (err: any) {
      console.error('Error en fetchDetallesMaterial:', err.message);
      setError('No se pudo obtener los detalles del material.');
    } finally {
      setLoading(false);
    }
  };

  const renderMaterialDetalles = (detalles: any[]) => {
    return (
      <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
        <h4 className="font-semibold">Detalles del Material</h4>
        {detalles.map((material, index) => (
          <div key={index} className="mb-4">
            <p>
              <strong>Nombre:</strong> {material.nombre}
            </p>
            <p>
              <strong>Descripción:</strong> {material.descripcion}
            </p>
            <p>
              <strong>Cantidad:</strong> {material.cantidad}
            </p>
            <p>
              <strong>Costo Unitario:</strong> {material['costo unitario']}
            </p>
            <p>
              <strong>Tipo:</strong> {material.tipo}
            </p>
            <p>
              <strong>Unidad de Medida:</strong> {material['unidad medida']}
            </p>
          </div>
        ))}
        <button
          onClick={() => {
            setMaterialDetalles(null);
            setActiveDetails(null);
          }}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Cerrar Detalles
        </button>
      </div>
    );
  };

  const renderDetallesProducto = (detalles: any) => (
    <div className="mt-4 bg-white p-4 shadow-md rounded-lg">
      <h4 className="font-semibold">Detalles del Producto</h4>
      <ul className="list-disc pl-5">
        {detalles.producto.map((prod: any) => (
          <li key={prod.id} className="mb-2">
            <p>
              <strong>Nombre:</strong> {prod.nombre}
            </p>
            <p>
              <strong>Descripción:</strong> {prod.descripcion}
            </p>
            <p>
              <strong>Unidades por Día:</strong> {prod.hacer_x_tiempo}
            </p>
            <p>
              <strong>Unidades por Hora:</strong> {prod.vender_x_tiempo}
            </p>
            <p>
              <strong>Unidad de Medida:</strong> {prod.unidad_medida}
            </p>
          </li>
        ))}
      </ul>

      <h4 className="font-semibold mt-4">Materiales</h4>
      <ul className="list-disc pl-5">
        {detalles.materiales.map((material: any) => (
          <li key={material.id} className="mb-2">
            <p>
              <strong>Material:</strong> {material.material}
            </p>
            <button
              onClick={() => fetchDetallesMaterial(material.id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => {
          setDetallesProducto(null);
          setActiveDetails(null);
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Cerrar Detalles
      </button>
    </div>
  );

  return (
    <div>
      <h3 className="text-lg font-semibold">Productos del Proyecto</h3>

      <button
        className="px-4 py-2 bg-green-500 text-white rounded mb-4 mr-4"
        onClick={() => setShowFormProduct(true)}
      >
        Crear Producto
      </button>

      <button
        className="px-4 py-2 bg-green-500 text-white rounded mb-4"
        onClick={() => setShowFormMaterial(true)}
      >
        Crear Material
      </button>

      {showFormProduct && (
        <FormProducts
          id_emprendimiento={id_emprendimiento}
          onClose={() => setShowFormProduct(false)}
          onSuccess={() => {
            setShowFormProduct(false);
            alert('Producto añadido correctamente.');
          }}
        />
      )}

      {showFormMaterial && (
        <FormMaterials
          id_emprendimiento={id_emprendimiento}
          productos={productos}
          onClose={() => setShowFormMaterial(false)}
          onSuccess={() => {
            setShowFormMaterial(false);
            alert('Material añadido correctamente.');
          }}
        />
      )}

      {productos.length > 0 ? (
        productos.map((producto) => (
          <div
            key={producto.id}
            className="mb-4 p-4 border rounded bg-gray-100"
          >
            <p>
              <strong>Producto:</strong> {producto.producto}
            </p>
            <button
              onClick={() => fetchDetallesProducto(producto.id)}
              className={`px-4 py-2 mt-2 rounded ${
                activeDetails?.producto === producto.id
                  ? 'bg-gray-400 text-white'
                  : 'bg-blue-500 text-white'
              }`}
            >
              Ver Detalles
            </button>
          </div>
        ))
      ) : (
        <p>No se encontraron productos en este proyecto.</p>
      )}

      {loading && <p>Cargando detalles...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {detallesProducto && renderDetallesProducto(detallesProducto)}
      {materialDetalles && renderMaterialDetalles(materialDetalles)}
    </div>
  );
};

export default Productos;
