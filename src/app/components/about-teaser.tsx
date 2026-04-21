import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight, Users, Award, Heart } from "lucide-react";

export function AboutTeaser() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - text */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Con más de 20 años de experiencia, Óptica Terminel se ha consolidado como líder en salud visual en Sonora. Ofrecemos productos de la más alta calidad y un servicio personalizado que garantiza tu satisfacción.
            </p>
            <Button asChild size="lg" style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <Link to="/nosotros" className="inline-flex items-center gap-2">
                Conoce más sobre nosotros
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Right side - quick stats */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-50 p-8 rounded-xl border-2" style={{ borderColor: 'var(--celeste-claro)' }}>
              <Users className="w-12 h-12 mb-4" style={{ color: 'var(--azul-egipcio)' }} />
              <h3 className="text-2xl mb-2">
                +10,000 Pacientes
              </h3>
              <p className="text-gray-600">
                Confiando en nuestro servicio profesional
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border-2" style={{ borderColor: 'var(--celeste-claro)' }}>
              <Award className="w-12 h-12 mb-4" style={{ color: 'var(--azul-egipcio)' }} />
              <h3 className="text-2xl mb-2">
                20+ Años
              </h3>
              <p className="text-gray-600">
                De experiencia en salud visual
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl border-2" style={{ borderColor: 'var(--celeste-claro)' }}>
              <Heart className="w-12 h-12 mb-4" style={{ color: 'var(--azul-egipcio)' }} />
              <h3 className="text-2xl mb-2">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Cada paciente es único para nosotros
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
