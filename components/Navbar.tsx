
import React from 'react';

export type PageID = 'home' | 'about' | 'portfolio' | 'pictures' | 'contact';

interface NavbarProps {
  activePage: PageID;
  setPage: (page: PageID) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const navItems: { name: string; id: PageID }[] = [
    { name: 'HOME', id: 'home' },
    { name: 'WORK', id: 'portfolio' },
    { name: 'GALLERY', id: 'pictures' },
    { name: 'ABOUT', id: 'about' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
      <div className="glass rounded-2xl md:rounded-full px-4 md:px-8 py-4 flex items-center justify-between border border-slate-900 shadow-2xl">
        <div className="flex items-center gap-3 pr-6 border-r border-slate-950 hidden sm:flex">
          <div className="w-3 h-3 rounded-full bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.4)]"></div>
          <button 
            onClick={() => setPage('home')}
            className="text-[12px] font-mono font-bold tracking-[0.25em] uppercase hover:text-indigo-600 transition-colors"
          >
            B_HSU
          </button>
        </div>
        <div className="flex gap-2 md:gap-4 flex-1 justify-around md:justify-end md:pl-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`px-3 md:px-5 py-2 text-[11px] md:text-[12px] font-mono font-bold transition-all uppercase tracking-[0.2em] relative group ${
                activePage === item.id 
                  ? 'text-indigo-600' 
                  : 'text-slate-500 hover:text-slate-950'
              }`}
            >
              {item.name}
              <div className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-600 transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
