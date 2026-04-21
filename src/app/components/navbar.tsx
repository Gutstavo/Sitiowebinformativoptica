import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm" style={{ backgroundColor: 'var(--azul-egipcio-profundo)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl text-white">Óptica Terminel</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/90 hover:text-white transition-colors">
            Inicio
          </Link>
          <Link to="/nosotros" className="text-white/90 hover:text-white transition-colors">
            Nosotros
          </Link>
          <a href="/#servicios" className="text-white/90 hover:text-white transition-colors">
            Servicios
          </a>
          <Link to="/promociones" className="text-white/90 hover:text-white transition-colors">
            Promociones
          </Link>
          <a href="/#contacto" className="text-white/90 hover:text-white transition-colors">
            Ubicaciones
          </a>
          <Button asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
              Agendar Cita
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: 'var(--azul-egipcio-profundo)' }}>
          <div className="px-6 py-4 space-y-4">
            <Link 
              to="/" 
              className="block text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/nosotros" 
              className="block text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <a 
              href="/#servicios" 
              className="block text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <Link 
              to="/promociones" 
              className="block text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Promociones
            </Link>
            <a 
              href="/#contacto" 
              className="block text-white/90 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Ubicaciones
            </a>
            <Button asChild className="w-full" style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties}>
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
                Agendar Cita
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}