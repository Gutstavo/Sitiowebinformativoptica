import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const items = [
  {
    icon: Target,
    title: "Misión",
    description: "Proporcionar servicios de salud visual de la más alta calidad, combinando tecnología de vanguardia con un trato humano y personalizado, para mejorar la calidad de vida de nuestros pacientes.",
    color: "var(--azul-egipcio)"
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Ser la óptica líder en Sonora, reconocida por nuestra excelencia en el cuidado visual, innovación constante y compromiso con la satisfacción total de nuestros clientes.",
    color: "var(--azul-acero)"
  },
  {
    icon: Heart,
    title: "Valores",
    description: "Integridad, profesionalismo, innovación, calidez humana y compromiso con la excelencia. Cada paciente es único y merece una atención excepcional.",
    color: "var(--dorado-bronce)"
  }
];

export function MissionVisionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nuestro Compromiso
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Guiados por principios sólidos y un objetivo claro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
