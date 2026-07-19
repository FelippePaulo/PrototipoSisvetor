import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-primary text-primary-content shadow-md px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-3 w-full sm:w-auto sm:justify-start relative">
                <img src="/logo_sisvetor_branco.png" alt="Logo" className="w-20 h-14 m-3" />
                {/* Menu icon for mobile */}
                <div className="relative sm:hidden absolute right-0 top-1/2 -translate-y-1/2">
                    <div 
                        tabIndex={0} 
                        role="button"
                        className="btn-ghost-like text-primary-content p-2 min-h-0 h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    {isMenuOpen && (
                        <ul className="absolute right-0 mt-2 w-52 p-2 z-10 bg-secondary text-secondary-content rounded-lg shadow-lg flex flex-col gap-1">
                            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10 transition-colors">Início</Link></li>
                            <li><Link to="/noticias" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10 transition-colors">Notícias</Link></li>
                            <li><Link to="/contato" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded hover:bg-white/10 transition-colors">Contato</Link></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="hidden sm:flex flex-row gap-2">
                <Link to="/" className="btn-ghost-like text-primary-content px-4 py-2 rounded-lg transition-colors">Início</Link>
                <Link to="/noticias" className="btn-ghost-like text-primary-content px-4 py-2 rounded-lg transition-colors">Notícias</Link>
                <Link to="/contato" className="btn-ghost-like text-primary-content px-4 py-2 rounded-lg transition-colors">Contato</Link>
            </div>
        </nav>
    );
}
