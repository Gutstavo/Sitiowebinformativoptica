import { AboutSection } from "../components/about-section";
import { MissionVisionSection } from "../components/mission-vision-section";
import { DoctorSection } from "../components/doctor-section";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ArrowLeft, Calendar } from "lucide-react";

export function AboutPage() {
  return (
    <>
      {/* Breadcrumb/Back Navigation */}
      <section className="pt-24 pb-8 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Button asChild variant="ghost" style={{ color: 'var(--azul-egipcio)' } as React.CSSProperties}>
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </section>

      <AboutSection />
      <MissionVisionSection />
      <DoctorSection />

      {/* CTA at bottom */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Quieres conocernos en persona?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visítanos en cualquiera de nuestras sucursales o agenda tu cita hoy mismo
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar Cita
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild style={{ borderColor: 'var(--azul-egipcio)', color: 'var(--azul-egipcio)' } as React.CSSProperties}>
              <Link to="/">
                Ver ubicaciones
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
