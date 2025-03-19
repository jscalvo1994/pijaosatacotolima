interface UserInfoProps {
  formData: any;
  onEdit: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ formData, onEdit }) => {
  return (
    <div>
      <div>
        <strong>Nombre:</strong> {formData.nombre || 'Sin nombre'}
      </div>
      <div>
        <strong>Teléfono:</strong> {formData.telefono || 'Sin teléfono'}
      </div>
      <div>
        <strong>Documento:</strong> {formData.documento || 'Sin documento'}
      </div>
      <div>
        <strong>Minorías:</strong> {formData.minoria || 'Sin minoría'}
      </div>
      <div>
        <strong>Departamento de Nacimiento:</strong>{' '}
        {formData.departamento_nacimiento || 'Sin departamento'}
      </div>
      <div>
        <strong>Ciudad de Nacimiento:</strong>{' '}
        {formData.ciudad_nacimiento || 'Sin ciudad'}
      </div>
      <div>
        <strong>Departamento de Residencia:</strong>{' '}
        {formData.departamento_residencia || 'Sin departamento'}
      </div>
      <div>
        <strong>Ciudad de Residencia:</strong>{' '}
        {formData.ciudad_residencia || 'Sin ciudad'}
      </div>
      <div>
        <strong>Nivel Educativo:</strong>{' '}
        {formData.nivel_educativo || 'Sin nivel educativo'}
      </div>
      <div>
        <strong>Sexo:</strong> {formData.sexo || 'Sin sexo seleccionado'}
      </div>

      <button
        onClick={onEdit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Actualizar Datos
      </button>
    </div>
  );
};

export default UserInfo;
