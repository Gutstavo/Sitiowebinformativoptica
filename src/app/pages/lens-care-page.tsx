import { LensCareSection } from "../components/lens-care-section";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ArrowLeft, Calendar, Droplet, Eye, Sun, AlertCircle, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function LensCarePage() {
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

      <LensCareSection />

      {/* Additional detailed care tips */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Guía Completa de Cuidados
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas saber para mantener tus lentes en perfectas condiciones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lentes oftálmicos */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Eye className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-4">Lentes Oftálmicos</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Limpia con spray especial y paño de microfibra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Nunca uses papel o tela ordinaria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Guarda en estuche rígido cuando no los uses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Ajusta regularmente en óptica</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lentes de contacto */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Droplet className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-4">Lentes de Contacto</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Lava tus manos antes de manipularlos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Usa solución nueva cada vez</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Cambia el estuche cada 3 meses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>No uses agua de grifo para limpiarlos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Lentes de sol */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Sun className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-4">Lentes de Sol</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Protege de rayones con estuche resistente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Evita dejarlos en el auto bajo el sol</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Limpia con productos específicos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Verifica protección UV regularmente</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Qué NO hacer */}
            <Card className="border-0 shadow-lg bg-red-50">
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center bg-red-100">
                  <AlertCircle className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-2xl mb-4 text-red-900">Qué NO Hacer</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1 text-red-600">✗</span>
                    <span>No uses saliva o aliento para limpiar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1 text-red-600">✗</span>
                    <span>No uses productos químicos agresivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1 text-red-600">✗</span>
                    <span>No dejes lentes en lugares calientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1 text-red-600">✗</span>
                    <span>No uses papel toalla o servilletas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Limpieza profesional */}
            <Card className="border-0 shadow-lg" style={{ backgroundColor: 'var(--celeste-claro)' }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center bg-white">
                  <Sparkles className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-4">Limpieza Profesional</h3>
                <p className="text-gray-700 mb-4">
                  Visítanos cada 6 meses para una limpieza ultrasónica profesional completamente gratuita.
                </p>
                <p className="text-gray-700">
                  Eliminamos suciedad incrustada y realizamos ajustes necesarios.
                </p>
              </CardContent>
            </Card>

            {/* Cuándo reemplazar */}
            <Card className="border-0 shadow-lg" style={{ backgroundColor: 'var(--gris-azulado)' }}>
              <CardContent className="p-8">
                <div className="w-14 h-14 mb-6 rounded-full flex items-center justify-center bg-white">
                  <Clock className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-2xl mb-4">Cuándo Reemplazar</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Rayones profundos en lentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Monturas dañadas o torcidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Cambios en tu graduación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg mt-1" style={{ color: 'var(--azul-egipcio)' }}>•</span>
                    <span>Tratamientos desgastados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Necesitas Productos de Limpieza?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Visítanos y adquiere los mejores productos para el cuidado de tus lentes
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20interesa%20información%20sobre%20productos%20de%20limpieza" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Consultar por WhatsApp
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
