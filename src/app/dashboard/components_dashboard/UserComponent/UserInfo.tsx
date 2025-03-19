import { useState, useEffect } from 'react';

interface UserInfoProps {
  userId: any;
  formData: any;
  onEdit: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ userId, formData, onEdit }) => {
  const [userData, setUserData] = useState<any>(formData);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userId) return; // Evita la solicitud si no hay userId

      try {
        console.log('⏳ Esperando antes de solicitar los datos...');
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 🔹 Espera 1 segundo
        const response = await fetch('/api/auth/emprendedor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: userId }), // ✅ Se envía el ID en el JSON
        });

        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }

        const data = await response.json();

        console.log('✅ Datos recibidos:', data); // ✅ Verificar respuesta en consola

        // Verificamos si data.emprendedor existe y tiene datos antes de actualizar el estado
        if (data.emprendedor && data.emprendedor.length > 0) {
          setUserData(data.emprendedor[0]); // ✅ Tomamos solo el primer objeto dentro de "emprendedor"
        } else {
          console.warn('❌ No se encontraron datos del usuario');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div>
      <div>
        <strong>Nombre:</strong> {userData?.nombre || 'Sin nombre'}
      </div>
      <div>
        <strong>Teléfono:</strong> {userData?.telefono || 'Sin teléfono'}
      </div>
      <div>
        <strong>Documento:</strong> {userData?.documento || 'Sin documento'}
      </div>
      <div>
        <strong>Minorías:</strong> {userData?.minoria || 'Sin minoría'}
      </div>
      <div>
        <strong>Departamento de Nacimiento:</strong>{' '}
        {userData?.departamento_nacimiento || 'Sin departamento'}
      </div>
      <div>
        <strong>Ciudad de Nacimiento:</strong>{' '}
        {userData?.ciudad_nacimiento || 'Sin ciudad'}
      </div>
      <div>
        <strong>Departamento de Residencia:</strong>{' '}
        {userData?.departamento_residencia || 'Sin departamento'}
      </div>
      <div>
        <strong>Ciudad de Residencia:</strong>{' '}
        {userData?.ciudad_residencia || 'Sin ciudad'}
      </div>
      <div>
        <strong>Nivel Educativo:</strong>{' '}
        {userData?.nivel_educativo || 'Sin nivel educativo'}
      </div>
      <div>
        <strong>Sexo:</strong> {userData?.sexo || 'Sin sexo seleccionado'}
      </div>

      <button
        onClick={onEdit}
        disabled={!!userData?.nombre} // 🔹 Se deshabilita si hay datos
        className={`mt-4 px-4 py-2 rounded ${
          userData?.nombre
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white'
        }`}
      >
        Actualizar Datos
      </button>
    </div>
  );
};

export default UserInfo;
