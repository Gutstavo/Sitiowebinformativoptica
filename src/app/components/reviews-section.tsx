import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const reviews = [
  {
    name: "Ana Martínez",
    rating: 5,
    text: "Excelente atención y profesionalismo. La Dra. González es muy minuciosa en sus exámenes y me ayudó a encontrar los lentes perfectos. ¡Súper recomendado!",
    date: "Marzo 2026"
  },
  {
    name: "Carlos Rodríguez",
    rating: 5,
    text: "Mejor óptica de la ciudad. Tienen una gran variedad de monturas y los precios son muy justos. El personal es muy amable y conocedor.",
    date: "Febrero 2026"
  },
  {
    name: "Laura Sánchez",
    rating: 5,
    text: "Llevo años viniendo aquí y siempre recibo el mejor servicio. El seguimiento post-venta es excelente y siempre están disponibles para cualquier ajuste.",
    date: "Enero 2026"
  },
  {
    name: "Miguel Torres",
    rating: 5,
    text: "Me adaptaron lentes de contacto después de años de usar anteojos. El proceso fue muy fácil y cómodo gracias a su paciencia y experiencia.",
    date: "Enero 2026"
  },
  {
    name: "Patricia Gómez",
    rating: 5,
    text: "Instalaciones modernas y limpias. El equipo es de última generación y se nota en la calidad del examen. Salí muy satisfecha con mi visita.",
    date: "Diciembre 2025"
  },
  {
    name: "Roberto Díaz",
    rating: 5,
    text: "Encontré la montura perfecta que buscaba. Tienen marcas exclusivas y diseños únicos. La asesoría fue personalizada y muy profesional.",
    date: "Diciembre 2025"
  }
];

export function ReviewsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de pacientes satisfechos respaldan nuestro trabajo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                
                <div>
                  <p className="text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
