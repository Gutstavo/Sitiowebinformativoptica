import { Button } from "./ui/button";
import { MapPin, List } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="inicio">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvcHRpY2FsJTIwc3RvcmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzU3Mzk5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Óptica moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--celeste-claro)', border: '2px solid var(--dorado-bronce)' }}>
          <span style={{ color: 'var(--azul-egipcio-profundo)' }}>Tu salud visual es nuestra prioridad</span>
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">
          Visión Clara, Estilo Perfecto
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90">
          Descubre la mejor selección de monturas y lentes con el cuidado profesional que mereces
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
              Agenda tu cita
            </a>
          </Button>
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="#servicios">
              <List className="w-5 h-5 mr-2" />
              Ver servicios
            </a>
          </Button>
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="#contacto">
              <MapPin className="w-5 h-5 mr-2" />
              Ver Ubicaciones
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}