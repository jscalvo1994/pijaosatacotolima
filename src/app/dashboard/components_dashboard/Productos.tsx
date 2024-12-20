/* eslint-disable prettier/prettier */
import React from 'react';

interface ProductosProps {
  productos: { id: number; producto: string }[];
}

const Productos: React.FC<ProductosProps> = ({ productos }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Productos</h3>
      {productos.map((item) => (
        <p key={item.id}>
          {item.id}: {item.producto}
        </p>
      ))}
    </div>
  );
};

export default Productos;
