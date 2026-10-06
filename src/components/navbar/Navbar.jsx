import { useState } from "react";
import { Menu, X } from "lucide-react";
import navigation from "../../data/navigation.json";
import Logo from "../common/Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 transition hover:text-wb-green">{item.label}</a>)}
          <a href="#contact" className="btn btn-sm border-0 bg-wb-navy px-5 text-white hover:bg-wb-blue">Get Started</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="btn btn-square btn-ghost md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <div className="border-t bg-white px-5 py-4 md:hidden">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold">{item.label}</a>)}
      </div>}
    </header>
  );
}
