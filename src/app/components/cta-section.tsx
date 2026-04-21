import { Button } from "./ui/button";
import { Calendar, Phone } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          ¿Listo para Cuidar tu Visión?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Agenda tu cita hoy mismo y descubre la diferencia de una atención profesional y personalizada
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Agendar Cita por WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild style={{ borderColor: 'var(--azul-egipcio)', color: 'var(--azul-egipcio)' } as React.CSSProperties}>
            <a href="tel:+5216621234567" className="inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
