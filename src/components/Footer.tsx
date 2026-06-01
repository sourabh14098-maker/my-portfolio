import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-14 px-6 border-t border-[#222222] bg-[#050505] relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
        <Link
          to="/"
          className="font-display font-bold text-sm tracking-[0.25em] text-white hover:text-zinc-300 transition-colors duration-300"
        >
          NYXO
        </Link>

        <p className="text-xs text-zinc-500 font-mono">
          Built with React + TypeScript + Tailwind CSS
        </p>

        <p className="text-xs text-zinc-400">Designed &amp; Developed by Sourabh Raj</p>

        <p className="text-[10px] text-zinc-600 font-mono tracking-wide">© 2026 NYXO</p>
      </div>
    </footer>
  );
}
