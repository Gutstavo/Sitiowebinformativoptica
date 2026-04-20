import { Droplets, Sun, Shield, Sparkles } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Limpieza Diaria",
    description: "Usa soluciones especializadas y paños de microfibra para mantener tus lentes siempre limpios y sin rayones."
  },
  {
    icon: Sun,
    title: "Protección UV",
    description: "Nuestros lentes incluyen protección contra rayos UV para cuidar tu salud visual a largo plazo."
  },
  {
    icon: Shield,
    title: "Almacenamiento",
    description: "Guarda tus lentes en su estuche cuando no los uses. Para pupilentes, usa siempre solución nueva."
  },
  {
    icon: Sparkles,
    title: "Mantenimiento",
    description: "Visítanos regularmente para ajustes y revisiones. Cuidamos tus lentes como si fueran nuestros."
  }
];

export function LensCareSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Cuidado de Lentes y Pupilentes
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Mantén tus lentes en perfecto estado con nuestros consejos profesionales
            </p>

            <div className="space-y-6">
              {tips.map((tip, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                    <tip.icon className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                  </div>
                  <div>
                    <h4 className="text-lg mb-2">{tip.title}</h4>
                    <p className="text-gray-600">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1599243315159-faa0eac09ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwbGVuc2VzJTIwY2FyZXxlbnwxfHx8fDE3NzU3Mzk5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Cuidado de lentes de contacto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
