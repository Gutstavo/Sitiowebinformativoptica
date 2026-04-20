import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="text-white py-16 px-6" style={{ backgroundColor: 'var(--azul-egipcio-profundo)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">Óptica Terminel</h3>
            <p className="text-white/80 mb-6">
              Cuidando tu salud visual desde 2004
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: 'var(--azul-acero)' }}>
                <Facebook className="w-5 h-5" style={{ color: 'var(--azul-egipcio-profundo)' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: 'var(--dorado-bronce)' }}>
                <Instagram className="w-5 h-5" style={{ color: 'var(--azul-egipcio-profundo)' }} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: 'var(--azul-acero)' }}>
                <Twitter className="w-5 h-5" style={{ color: 'var(--azul-egipcio-profundo)' }} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#promociones" className="hover:text-white transition-colors">Promociones</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Examen Visual</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monturas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Contacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes de Sol</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lentes Oftálmicos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Hermosillo y<br />Agua Prieta, Sonora</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(662) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@opticaterminel.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-white/80" style={{ borderTop: '2px solid var(--dorado-bronce)' }}>
          <p>&copy; 2026 Óptica Terminel. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}