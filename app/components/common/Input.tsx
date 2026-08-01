interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm text-slate-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-cyan-400"
      />
    </div>
  );
}