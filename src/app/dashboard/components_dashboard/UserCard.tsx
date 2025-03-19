import React, { useState, useEffect } from 'react';
import useFetchUserData from '@/hooks/useFetchUserData';
import UserInfo from './UserComponent/UserInfo';
import UserForm from './UserComponent/UserForm';
import axios from 'axios';

const UserCard: React.FC<{ user: any; onUpdate: (data: any) => void }> = ({
  user,
  onUpdate,
}) => {
  const {
    tipoDocumentos,
    sexos,
    nivelesEducativos,
    departamentos,
    departamentosNacimiento,
    minorias,
    loading,
    error,
  } = useFetchUserData();

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [ciudadesResidencia, setCiudadesResidencia] = useState<any[]>([]);
  const [ciudadesNacimiento, setCiudadesNacimiento] = useState<any[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({}); // ✅ Se agregó el estado de errores

  useEffect(() => {
    if (user.emprendedor?.length > 0) {
      setFormData({
        ...user.emprendedor[0],
        email: user.email,
        id_google: user.id,
      });

      // Si ya tiene departamentos seleccionados, cargamos las ciudades correspondientes
      if (user.emprendedor[0].id_departamento_residencia) {
        fetchCiudadesResidencia(user.emprendedor[0].id_departamento_residencia);
      }
      if (user.emprendedor[0].id_departamento_nacimiento) {
        fetchCiudadesNacimiento(user.emprendedor[0].id_departamento_nacimiento);
      }
    }
  }, [user]);

  // Función para obtener ciudades según el departamento seleccionado en residencia
  const fetchCiudadesResidencia = async (idDepartamento: string) => {
    try {
      const response = await axios.post('/api/send/Ciudad', {
        id_departamento: idDepartamento,
      });
      setCiudadesResidencia(response.data);
      setErrors((prev) => ({ ...prev, id_departamento_residencia: '' })); // ✅ Elimina el error si la API responde bien
    } catch (error) {
      console.error('Error al cargar ciudades de residencia:', error);
      setCiudadesResidencia([]); // ✅ Limpia las ciudades para evitar datos inválidos
      setErrors((prev) => ({
        ...prev,
        id_departamento_residencia: 'Departamento inválido. Seleccione otro.',
      })); // ✅ Muestra error en rojo
    }
  };

  // Función para obtener ciudades según el departamento seleccionado en nacimiento
  const fetchCiudadesNacimiento = async (idDepartamento: string) => {
    try {
      const response = await axios.post('/api/send/Ciudad', {
        id_departamento: idDepartamento,
      });
      setCiudadesNacimiento(response.data);
      setErrors((prev) => ({ ...prev, id_departamento_nacimiento: '' })); // ✅ Elimina el error si la API responde bien
    } catch (error) {
      console.error('Error al cargar ciudades de nacimiento:', error);
      setCiudadesNacimiento([]); // ✅ Limpia las ciudades para evitar datos inválidos
      setErrors((prev) => ({
        ...prev,
        id_departamento_nacimiento: 'Departamento inválido. Seleccione otro.',
      })); // ✅ Muestra error en rojo
    }
  };

  // Manejador del cambio de departamento de residencia
  const handleDepartamentoChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedDepartamento = e.target.value;
    setFormData((prev: any) => ({
      ...prev,
      id_departamento_residencia: selectedDepartamento,
      id_ciudad_residencia: '', // Limpia la ciudad seleccionada
    }));
    fetchCiudadesResidencia(selectedDepartamento);
  };

  // Manejador del cambio de departamento de nacimiento
  const handleDepartamentoNacimientoChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedDepartamento = e.target.value;
    setFormData((prev: any) => ({
      ...prev,
      id_departamento_nacimiento: selectedDepartamento,
      id_ciudad_nacimiento: '', // Limpia la ciudad seleccionada
    }));
    fetchCiudadesNacimiento(selectedDepartamento);
  };

  // Manejo del envío del formulario
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

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Información del Usuario</h2>
      {showUpdateForm ? (
        <UserForm
          formData={formData}
          setFormData={setFormData}
          tipoDocumentos={tipoDocumentos}
          sexos={sexos}
          nivelesEducativos={nivelesEducativos}
          departamentos={departamentos}
          ciudades={ciudadesResidencia} // Pasamos las ciudades de residencia dinámicas
          minorias={minorias} // ✅ Ahora minorías se pasan correctamente
          handleDepartamentoChange={handleDepartamentoChange} // ✅ Ahora implementado correctamente
          handleSubmit={handleSubmit}
          onCancel={() => setShowUpdateForm(false)}
          departamentosNacimiento={departamentosNacimiento}
          ciudadesNacimiento={ciudadesNacimiento} // Pasamos las ciudades de nacimiento dinámicas
          handleDepartamentoNacimientoChange={
            handleDepartamentoNacimientoChange
          } // ✅ Ahora implementado correctamente
        />
      ) : (
        <UserInfo formData={formData} onEdit={() => setShowUpdateForm(true)} />
      )}
    </div>
  );
};

export default UserCard;
