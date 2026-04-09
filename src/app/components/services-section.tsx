import { Eye, Glasses, Contact, Scan, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const services = [
  {
    icon: Eye,
    title: "Examen Visual Completo",
    description: "Evaluación exhaustiva de tu salud visual con tecnología de punta para detectar cualquier problema a tiempo."
  },
  {
    icon: Glasses,
    title: "Monturas Premium",
    description: "Amplia selección de las mejores marcas internacionales y diseños exclusivos que se adaptan a tu estilo."
  },
  {
    icon: Contact,
    title: "Lentes de Contacto",
    description: "Todo tipo de lentes de contacto: diarios, mensuales, tóricos y multifocales de las mejores marcas."
  },
  {
    icon: Scan,
    title: "Tecnología Avanzada",
    description: "Equipos de última generación para diagnósticos precisos y tratamientos especializados."
  },
  {
    icon: ShieldCheck,
    title: "Lentes Oftálmicos",
    description: "Lentes con las mejores graduaciones y tratamientos: antirreflejante, fotocromáticos y alta resistencia."
  },
  {
    icon: Sparkles,
    title: "Lentes de Sol",
    description: "Protección UV completa con las últimas tendencias en diseño. Marcas originales y certificadas."
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios para cuidar tu salud visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--egyptian-blue-light)' }}>
                  <service.icon className="w-8 h-8" style={{ color: 'var(--egyptian-blue)' }} />
                </div>
                <h3 className="text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}