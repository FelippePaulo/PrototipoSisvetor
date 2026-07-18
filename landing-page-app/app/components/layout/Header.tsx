import { LogIn, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Header() {

  const [showSearch, setShowSearch] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
            headerRef.current &&
            !headerRef.current.contains(event.target as Node)
            ) {
            setSearch("");
            setShowSearch(false);
           
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
<header ref={headerRef} className="sticky top-0 z-50 bg-gradient-to-r from-sky-900 via-cyan-900 to-teal-900 text-white shadow-lg backdrop-blur-md">      
    <div className="navbar mx-auto h-20 max-w-7xl px-6">

        {/* Logo */}
        <div className="navbar-start">
            <div className="flex flex-col">

                    <img
                    src="/logo_sisvetor_branco.png"
                    alt="Logo SisVetor"
                    className="h-16 w-28 object-contain"
                    />

            </div>
        </div>

        {/* Menu Desktop */}
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 font-semibold text-[15px]">

            <li>
                
            </li>

          </ul>
        </div>

        {/* Ações */}
        <div className="navbar-end gap-2">

        <div className="relative">

            <button
                type="button"
                onClick={() => {
                if (showSearch) {
                    setSearch("");
                }
                setShowSearch((prev) => !prev);
                }}
                className="btn btn-ghost rounded-full text-white transition-all hover:bg-white/20"
            >
                <Search size={20}/>
            </button>

            
            


            </div>
            
          <a
            href="https://admin.sisvetor.sds.unb.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn rounded-full border-cyan-300 bg-cyan-50 text-cyan-800 shadow-lg"
            >
            <LogIn size={18} />
            Entrar
            </a>

        </div>

      </div>

        <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
            showSearch ? "max-h-40" : "max-h-0"
        }`}
        >
            <div className="border-t border-white/10 bg-white shadow-md">

                <div className="mx-auto max-w-7xl px-6 py-4">

                    <input
                        autoFocus
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar notícias..."
                          className="input input-bordered w-full rounded-full border-2 border-slate-300 text-slate-800 placeholder:text-slate-400 focus:border-sky-600 focus:outline-none"

                    />

                </div>

            </div>

        </div>

    </header>
  );
}