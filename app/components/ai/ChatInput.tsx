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
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onSend();
          }
        }}
        placeholder="Scrivi una domanda..."
        className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400"
      />

      <button
        type="button"
        onClick={onSend}
        className="rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
      >
        Invia
      </button>
    </div>
  );
}