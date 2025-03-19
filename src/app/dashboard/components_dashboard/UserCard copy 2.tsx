import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserInfo from './UserComponent/UserInfo';
import UserForm from './/UserComponent/UserForm';

const UserCard: React.FC<{ user: any; onUpdate: (data: any) => void }> = ({
  user,
  onUpdate,
}) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    if (user.emprendedor?.length > 0) {
      setFormData({
        ...user.emprendedor[0],
        email: user.email,
        id_google: user.id,
      });
    }
  }, [user]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        '/api/update/update_emprendedor',
        formData,
      );
      onUpdate(response.data);
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Error al actualizar:', error);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
      {showUpdateForm ? (
        <UserForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          onCancel={() => setShowUpdateForm(false)}
          tipoDocumentos={[]}
          sexos={[]}
          nivelesEducativos={[]}
          departamentos={[]}
          ciudades={[]}
          handleDepartamentoChange={function (
            e: React.ChangeEvent<HTMLSelectElement>,
          ): void {
            throw new Error('Function not implemented.');
          }}
          departamentosNacimiento={[]}
          minorias={[]}
          ciudadesNacimiento={[]}
          handleDepartamentoNacimientoChange={function (
            e: React.ChangeEvent<HTMLSelectElement>,
          ): void {
            throw new Error('Function not implemented.');
          }}
        />
      ) : (
        <UserInfo formData={formData} onEdit={() => setShowUpdateForm(true)} />
      )}
    </div>
  );
};

export default UserCard;
