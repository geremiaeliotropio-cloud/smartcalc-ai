export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-800">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-6 py-10 text-sm text-slate-400">

        <p className="font-semibold text-white">
          SmartCalc AI
        </p>

        <p>
          Calcolatori intelligenti con AI.
        </p>

        <p>
          © {new Date().getFullYear()} SmartCalc AI
        </p>

      </div>

    </footer>
  );
}