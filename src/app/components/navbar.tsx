import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm" style={{ backgroundColor: 'var(--azul-egipcio-profundo)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl text-white">Óptica Terminel</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-white/90 hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#nosotros" className="text-white/90 hover:text-white transition-colors">
            Nosotros
          </a>
          <a href="#servicios" className="text-white/90 hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#promociones" className="text-white/90 hover:text-white transition-colors">
            Promociones
          </a>
          <a href="#contacto" className="text-white/90 hover:text-white transition-colors">
            Contacto
          </a>
          <Button asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
              Agenda tu cita
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}