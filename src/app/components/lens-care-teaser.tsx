import { Link } from "react-router";
import { Button } from "./ui/button";
import { ArrowRight, Droplets, Sun, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function LensCareTeaser() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">
            Cuidados para tus Lentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprende a mantener tus lentes en perfecto estado y prolongar su vida útil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                <Droplets className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
              </div>
              <h3 className="text-lg mb-2">
                Limpieza Diaria
              </h3>
              <p className="text-gray-600 text-sm">
                Usa solución especial para lentes
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                <Shield className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
              </div>
              <h3 className="text-lg mb-2">
                Almacenamiento
              </h3>
              <p className="text-gray-600 text-sm">
                Guarda en estuche protector
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                <Sun className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
              </div>
              <h3 className="text-lg mb-2">
                Protección UV
              </h3>
              <p className="text-gray-600 text-sm">
                Evita exposición solar directa
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg" style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <Link to="/cuidados" className="inline-flex items-center gap-2">
              Ver guía completa de cuidados
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
