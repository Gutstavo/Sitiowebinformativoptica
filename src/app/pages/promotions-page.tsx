import { PromotionsSection } from "../components/promotions-section";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ArrowLeft, Calendar, CreditCard, Clock, Gift, Users, GraduationCap, Sparkles } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function PromotionsPage() {
  return (
    <>
      {/* Breadcrumb/Back Navigation */}
      <section className="pt-24 pb-8 px-6" style={{ background: 'linear-gradient(135deg, var(--azul-egipcio-profundo) 0%, var(--azul-egipcio) 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <Button asChild variant="ghost" className="text-white/90 hover:text-white hover:bg-white/10">
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
          </Button>
          <div className="mt-8 text-center text-white">
            <h1 className="text-5xl md:text-6xl mb-4">
              Promociones Especiales
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Aprovecha nuestras ofertas exclusivas y cuida tu salud visual ahorrando
            </p>
          </div>
        </div>
      </section>

      <PromotionsSection />

      {/* Additional benefits and conditions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Beneficios Adicionales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más razones para elegir Óptica Terminel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <CreditCard className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-xl mb-2">Meses Sin Intereses</h3>
                <p className="text-gray-600">
                  Hasta 12 MSI con tarjetas participantes
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Gift className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-xl mb-2">Estuche de Regalo</h3>
                <p className="text-gray-600">
                  En la compra de lentes graduados o de sol
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Sparkles className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-xl mb-2">Limpieza Gratis</h3>
                <p className="text-gray-600">
                  Limpieza ultrasónica sin costo de por vida
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Clock className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-xl mb-2">Garantía Extendida</h3>
                <p className="text-gray-600">
                  1 año de garantía en todos nuestros productos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal promotions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Promociones por Temporada
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-3" style={{ backgroundColor: 'var(--azul-egipcio)' }}></div>
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                    <Users className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                  </div>
                  <h3 className="text-3xl">Paquete Familiar</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Cuida la vista de toda tu familia con precios especiales:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>Examen visual gratuito para 3 o más personas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>15% de descuento en lentes graduados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>20% extra en la compra de 4 o más pares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>Tratamiento antirreflejante sin costo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-3" style={{ backgroundColor: 'var(--azul-acero)' }}></div>
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                    <GraduationCap className="w-8 h-8" style={{ color: 'var(--azul-egipcio)' }} />
                  </div>
                  <h3 className="text-3xl">Estudiantes</h3>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Descuentos especiales para estudiantes de todos los niveles:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>20% de descuento con credencial vigente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>Incluye tratamiento antirreflejante</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>Examen visual con precio preferencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl mt-1" style={{ color: 'var(--azul-egipcio)' }}>✓</span>
                    <span>Válido de agosto a diciembre</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms and conditions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl mb-6">
              Términos y Condiciones
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                • Las promociones no son acumulables con otras ofertas salvo indicación contraria.
              </p>
              <p>
                • Aplican restricciones en marcas y modelos seleccionados.
              </p>
              <p>
                • Los descuentos para estudiantes requieren credencial vigente al momento de la compra.
              </p>
              <p>
                • El paquete familiar requiere que todas las personas realicen su compra el mismo día.
              </p>
              <p>
                • Meses sin intereses sujeto a aprobación de la institución bancaria.
              </p>
              <p>
                • Las promociones pueden cambiar sin previo aviso. Vigencia limitada.
              </p>
              <p>
                • Consulta detalles específicos y disponibilidad en sucursal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA at bottom */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Listo para Aprovechar Estas Ofertas?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contacta con nosotros y descubre cómo ahorrar en tus lentes favoritos
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20quiero%20información%20sobre%20las%20promociones" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Consultar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild style={{ borderColor: 'var(--azul-egipcio)', color: 'var(--azul-egipcio)' } as React.CSSProperties}>
              <Link to="/">
                Volver al inicio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
