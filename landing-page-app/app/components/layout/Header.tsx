import { LogIn, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./Header.css"


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
<header ref={headerRef} className="header">      
    <div className="header-navbar navbar">

        {/* Logo */}
        <div className="navbar-start">
            <div className="flex flex-col">

                <span className="text-3xl font-black tracking-tight">
                    <img
                    src="/logo_sisvetor_branco.png"
                    alt="Logo SisVetor"
                    className="h-16 w-28 object-contain"
                    />
                </span>

            </div>
        </div>

        {/* Menu Desktop */}
        <div className="navbar-center hidden lg:flex">
        <ul className="header-menu menu menu-horizontal">

            <li>
                
            </li>

          </ul>
        </div>

        {/* Ações */}
        <div className="header-actions navbar-end">

        <div className="relative">

            <button
                type="button"
                onClick={() => {
                if (showSearch) {
                    setSearch("");
                }
                setShowSearch((prev) => !prev);
                }}
                className="header-search-button btn btn-ghost"
            >
                <Search size={20}/>
            </button>

            
            


            </div>
            
          <a
            href="https://admin.sisvetor.sds.unb.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-login-button btn"
            >
            <LogIn size={18} />
            Entrar
            </a>

        </div>

      </div>

        <div className={`header-search ${showSearch ? "header-search-open" : ""}`}>

            <div className="header-search-container">

                <div className="header-search-content">

                    <input
                        autoFocus
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Buscar notícias..."
                        className="header-search-input"
                    />

                </div>

            </div>

        </div>

    </header>
  );
}