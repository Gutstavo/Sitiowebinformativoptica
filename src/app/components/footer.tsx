import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Óptica Terminel</h3>
            <p className="text-gray-400 mb-6">
              Cuidando tu salud visual desde 2004
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors" style={{ '--hover-bg': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors" style={{ '--hover-bg': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors" style={{ '--hover-bg': 'var(--egyptian-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--egyptian-blue)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sucursales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Examen Visual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monturas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Sol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reparaciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Av. Principal 123<br />Centro Histórico</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@opticavision.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Óptica Terminel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}