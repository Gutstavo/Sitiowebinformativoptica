import { Tag, Gift, Percent } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const promotions = [
  {
    icon: Tag,
    title: "2x1 en Lentes",
    description: "Compra un par de lentes graduados y llévate el segundo con 50% de descuento. Aplica en monturas seleccionadas.",
    badge: "Popular"
  },
  {
    icon: Gift,
    title: "Paquete Familiar",
    description: "Examen visual + lentes graduados para toda la familia. Descuentos especiales para grupos de 3 o más personas.",
    badge: "Nuevo"
  },
  {
    icon: Percent,
    title: "Estudiantes",
    description: "20% de descuento en lentes graduados presentando credencial vigente. Incluye tratamiento antirreflejante gratis.",
    badge: "Limitado"
  }
];

export function PromotionsSection() {
  return (
    <section className="py-20 px-6 bg-white" id="promociones">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Promociones Especiales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas del mes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {promotions.map((promo, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-sm text-white" style={{ backgroundColor: 'var(--azul-egipcio)' }}>
                  {promo.badge}
                </span>
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <promo.icon className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-3">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {promo.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20las%20promociones" target="_blank" rel="noopener noreferrer">
              Consultar promociones
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
