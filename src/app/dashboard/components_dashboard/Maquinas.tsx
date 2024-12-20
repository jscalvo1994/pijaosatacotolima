import React from 'react';

interface MaquinasProps {
  maquinas: { id: number; maquinaria: string }[];
}

const Maquinas: React.FC<MaquinasProps> = ({ maquinas }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Maquinaria</h3>
      {maquinas.map((item) => (
        <p key={item.id}>
          {item.id}: {item.maquinaria}
        </p>
      ))}
    </div>
  );
};

export default Maquinas;
