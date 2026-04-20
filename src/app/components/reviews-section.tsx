import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function ReviewsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Lo Que Dicen Nuestros Pacientes
          </h2>
          <p className="text-xl text-gray-600">
            Miles de pacientes satisfechos respaldan nuestro trabajo
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 shadow-lg" style={{ border: '3px solid var(--azul-acero)' }}>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-12 h-12" style={{ fill: 'var(--dorado-bronce)', color: 'var(--dorado-bronce)' }} />
            ))}
          </div>

          <p className="text-2xl mb-8 text-gray-700">
            Calificación de <span style={{ color: 'var(--azul-egipcio)' }}>5 estrellas</span> basada en cientos de reseñas verificadas
          </p>

          <p className="text-lg text-gray-600 mb-10">
            Nuestros pacientes comparten sus experiencias en Doctoralia, la plataforma líder de reseñas médicas. Descubre por qué confían en nosotros para el cuidado de su salud visual.
          </p>

          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://www.doctoralia.com.mx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              Ver reseñas en Doctoralia
              <ExternalLink className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}