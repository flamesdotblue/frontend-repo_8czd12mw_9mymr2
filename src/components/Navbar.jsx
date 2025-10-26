import React from 'react';
import { Needle, Menu, X, LogIn, UserPlus } from 'lucide-react';

const Navbar = ({ onLogin, onSignup }) => {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how' },
    { label: 'Find Tailors', href: '#tailors' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="p-2 rounded-lg bg-indigo-600 text-white">
            <Needle className="w-4 h-4" />
          </div>
          <span className="font-semibold text-slate-900">PocketTailor</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={onLogin} className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900">
            <LogIn className="w-4 h-4" />
            Login
          </button>
          <button onClick={onSignup} className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
            <UserPlus className="w-4 h-4" />
            Sign Up
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-700">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <button onClick={() => { onLogin(); setOpen(false); }} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-md">
                <LogIn className="w-4 h-4" />
                Login
              </button>
              <button onClick={() => { onSignup(); setOpen(false); }} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                <UserPlus className="w-4 h-4" />
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
