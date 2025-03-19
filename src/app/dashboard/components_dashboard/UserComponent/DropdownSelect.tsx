interface DropdownSelectProps {
  label: string;
  name: string;
  options: { id: string | number; nombre: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string; // ✅ Nueva prop para mostrar el mensaje de error
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded px-3 py-2 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Seleccione</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nombre}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DropdownSelect;
