import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight, Tag, Percent } from "lucide-react";

export function PromotionsTeaser() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl p-12 text-center" style={{ background: 'linear-gradient(135deg, var(--azul-egipcio-profundo) 0%, var(--azul-egipcio) 100%)' }}>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <Tag className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Promociones Especiales
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre nuestras ofertas exclusivas en lentes, monturas y exámenes visuales. ¡Aprovecha descuentos de hasta 30% en productos seleccionados!
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 text-white">
              <Percent className="w-5 h-5" />
              <span className="text-lg">Hasta 30% OFF</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 text-white">
              <Tag className="w-5 h-5" />
              <span className="text-lg">Meses sin intereses</span>
            </div>
          </div>

          <Button asChild size="lg" className="bg-white hover:bg-gray-100" style={{ color: 'var(--azul-egipcio-profundo)' } as React.CSSProperties}>
            <Link to="/promociones" className="inline-flex items-center gap-2">
              Ver todas las promociones
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
