interface Props {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="mt-8 flex gap-4">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Scrivi una domanda..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none focus:border-cyan-400"
      />

      <button
        onClick={onSend}
        className="rounded-xl bg-cyan-500 px-6 font-semibold hover:bg-cyan-400"
      >
        Invia
      </button>
    </div>
  );
}