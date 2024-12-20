import React from 'react';

interface InfTecnologicaProps {
  infrTecnologica: { id: number; 'infr.': string }[];
}

const InfTecnologica: React.FC<InfTecnologicaProps> = ({ infrTecnologica }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Infraestructura Tecnológica</h3>
      {infrTecnologica.map((item) => (
        <p key={item.id}>
          {item.id}: {item['infr.']}
        </p>
      ))}
    </div>
  );
};

export default InfTecnologica;
