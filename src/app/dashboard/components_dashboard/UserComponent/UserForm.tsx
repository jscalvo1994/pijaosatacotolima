import { useState, useEffect } from 'react';
import DropdownSelect from './DropdownSelect';

interface UserFormProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  tipoDocumentos: any[];
  sexos: any[];
  nivelesEducativos: any[];
  departamentos: any[];
  ciudades: any[];
  departamentosNacimiento: any[];
  minorias: any[]; // Agrega esta línea
  ciudadesNacimiento: any[];
  handleDepartamentoChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleDepartamentoNacimientoChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  email: string; // Add email property
  idGoogle: string; // Add idGoogle property
  handleSubmit: () => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({
  formData,
  setFormData,
  tipoDocumentos,
  minorias,
  sexos,
  nivelesEducativos,
  departamentos,
  ciudades,
  departamentosNacimiento,
  ciudadesNacimiento,
  idGoogle,
  email,
  handleDepartamentoChange,
  handleDepartamentoNacimientoChange,
  handleSubmit,
  onCancel,
}) => {
  // Estado de errores
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const today = new Date(); // Obtenemos la fecha actual

  // Validación completa del formulario
  const validateForm = () => {
    const requiredFields = [
      'nombre',
      'telefono',
      'documento',
      'tipo_documento',
      'id_minoria',
      'id_sexo',
      'id_nivel_educativo',
      'id_departamento_residencia',
      'id_ciudad_residencia',
      'id_departamento_nacimiento',
      'id_ciudad_nacimiento',
      'fecha_nacimiento',
    ];
    let valid = true;

    requiredFields.forEach((field) => {
      if (!formData[field] || errors[field]) {
        valid = false;
      }
    });

    setIsFormValid(valid);
  };

  // 1️⃣ UseEffect para actualizar `formData` con `email` e `id_google`
  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      email: prev.email || email, // Si prev.email está vacío, usa el de las props
      id_google: prev.id_google || idGoogle, // Si prev.id_google está vacío, usa el de las props
    }));
  }, [email, idGoogle]); // Solo se ejecuta cuando `email` o `idGoogle` cambian

  // 2️⃣ UseEffect para validar el formulario cada vez que `formData` o `errors` cambien
  useEffect(() => {
    validateForm();
  }, [formData, errors]); // Mantiene la validación sin errores
  // Manejo de cambios en inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    let errorMsg = '';

    // Validaciones específicas
    if (name === 'nombre' && !/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
      errorMsg = 'Solo se permiten letras y espacios.';
    } else if (name === 'telefono' && !/^\d*$/.test(value)) {
      errorMsg = 'Solo se permiten números.';
    } else if (name === 'documento' && !/^\d+$/.test(value)) {
      errorMsg = 'Ingrese solo números sin puntos ni espacios.';
    } else if (name === 'fecha_nacimiento') {
      const inputDate = new Date(value);
      if (inputDate > today) {
        errorMsg = 'No se pueden ingresar fechas futuras.';
      }
    } else if (
      ([
        'tipo_documento',
        'id_minoria',
        'id_sexo',
        'id_nivel_educativo',
        'id_departamento_residencia',
        'id_ciudad_residencia',
        'id_departamento_nacimiento',
        'id_ciudad_nacimiento',
      ].includes(name) &&
        value === '') ||
      value === 'Seleccione'
    ) {
      errorMsg = 'Debe seleccionar una opción válida.';
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  console.log('idGoogle', idGoogle);
  console.log('email', email);
  return (
    <form className="space-y-4">
      {/*User ID*/}
      <div>
        <label className="block mb-1 font-semibold">ID</label>
        <input
          type="text"
          name="idGoogle"
          value={idGoogle || ''}
          onChange={handleInputChange}
        />
      </div>
      {/*User Email*/}
      <div>
        <label className="block mb-1 font-semibold">email</label>
        <input
          type="email"
          name="email"
          value={email || ''}
          onChange={handleInputChange}
        />
      </div>
      {/* Nombre */}
      <div>
        <label className="block mb-1 font-semibold">Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre || ''}
          onChange={handleInputChange}
          className={`w-full border rounded px-3 py-2 ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.nombre && (
          <p className="text-red-500 text-sm">{errors.nombre}</p>
        )}
      </div>

      {/* Teléfono */}
      <div>
        <label className="block mb-1 font-semibold">Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono || ''}
          onChange={handleInputChange}
          className={`w-full border rounded px-3 py-2 ${errors.telefono ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.telefono && (
          <p className="text-red-500 text-sm">{errors.telefono}</p>
        )}
      </div>

      {/* Número de Documento */}
      <div>
        <label className="block mb-1 font-semibold">Número de Documento</label>
        <input
          type="text"
          name="documento"
          value={formData.documento || ''}
          onChange={handleInputChange}
          className={`w-full border rounded px-3 py-2 ${errors.documento ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.documento && (
          <p className="text-red-500 text-sm">{errors.documento}</p>
        )}
      </div>

      {/* Dropdowns con validación de errores */}
      <DropdownSelect
        label="Tipo de Documento"
        name="tipo_documento"
        options={tipoDocumentos}
        value={formData.tipo_documento || ''}
        onChange={handleInputChange}
        error={errors.tipo_documento}
      />

      <DropdownSelect
        label="Minorías"
        name="id_minoria"
        options={minorias}
        value={formData.id_minoria || ''}
        onChange={handleInputChange}
        error={errors.id_minoria} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Nivel Educativo"
        name="id_nivel_educativo"
        options={nivelesEducativos}
        value={formData.id_nivel_educativo || ''}
        onChange={handleInputChange}
        error={errors.id_nivel_educativo} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Sexo"
        name="id_sexo"
        options={sexos}
        value={formData.id_sexo || ''}
        onChange={handleInputChange}
        error={errors.id_sexo} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Departamento de Residencia"
        name="id_departamento_residencia"
        options={departamentos}
        value={formData.id_departamento_residencia || ''}
        onChange={handleDepartamentoChange}
        error={errors.id_departamento_residencia} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Ciudad de Residencia"
        name="id_ciudad_residencia"
        options={ciudades}
        value={formData.id_ciudad_residencia || ''}
        onChange={handleInputChange}
        error={errors.id_ciudad_residencia} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Departamento de Nacimiento"
        name="id_departamento_nacimiento"
        options={departamentosNacimiento}
        value={formData.id_departamento_nacimiento || ''}
        onChange={handleDepartamentoNacimientoChange}
        error={errors.id_departamento_nacimiento} // ✅ Se agrega validación
      />

      <DropdownSelect
        label="Ciudad de Nacimiento"
        name="id_ciudad_nacimiento"
        options={ciudadesNacimiento}
        value={formData.id_ciudad_nacimiento || ''}
        onChange={handleInputChange}
        error={errors.id_ciudad_nacimiento} // ✅ Se agrega validación
      />

      {/* Fecha de Nacimiento */}
      <div>
        <label className="block mb-1 font-semibold">Fecha de Nacimiento</label>
        <input
          type="date"
          name="fecha_nacimiento"
          value={formData.fecha_nacimiento || ''}
          onChange={handleInputChange}
          className={`w-full border rounded px-3 py-2 ${
            errors.fecha_nacimiento ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.fecha_nacimiento && (
          <p className="text-red-500 text-sm">{errors.fecha_nacimiento}</p>
        )}
      </div>

      {/* Botones */}
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!isFormValid} // ✅ Se deshabilita si el formulario no es válido
        className={`mt-4 px-4 py-2 rounded w-full transition-colors duration-300 ${
          isFormValid
            ? 'bg-blue-500 hover:bg-blue-600 text-white' // ✅ Habilitado: Azul con efecto hover
            : 'bg-gray-400 text-gray-700 cursor-not-allowed' // ✅ Deshabilitado: Gris oscuro
        }`}
      >
        Crear Registro
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded w-full"
      >
        Cancelar
      </button>
    </form>
  );
};

export default UserForm;
