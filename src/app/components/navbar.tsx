import { Button } from "./ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl">Óptica Terminel</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-gray-700 transition-colors" style={{ '--hover-color': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Inicio
          </a>
          <a href="#nosotros" className="text-gray-700 transition-colors" style={{ '--hover-color': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Nosotros
          </a>
          <a href="#servicios" className="text-gray-700 transition-colors" style={{ '--hover-color': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Servicios
          </a>
          <a href="#doctor" className="text-gray-700 transition-colors" style={{ '--hover-color': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Doctor
          </a>
          <a href="#sucursales" className="text-gray-700 transition-colors" style={{ '--hover-color': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
            Sucursales
          </a>
          <Button asChild style={{ backgroundColor: 'var(--egyptian-blue)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
              Agenda tu cita
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}