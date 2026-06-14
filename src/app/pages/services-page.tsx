import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Link } from "react-router";
import { ArrowLeft, Calendar, Eye, Glasses, Activity, Zap, Droplet, FileText } from "lucide-react";

export function ServicesPage() {
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

      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1766310549795-dd0fc75d499f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRvbWV0cnklMjBjbGluaWMlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwMDc1NzA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Servicios de Óptica Terminel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13, 42, 82, 0.85)' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Soluciones visuales personalizadas para ayudarte a ver mejor y cuidar tu salud ocular en cada etapa de la vida
          </p>
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20valoración" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Agendar valoración
            </a>
          </Button>
        </div>
      </section>

      {/* Section Title */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600">
            Selecciona la opción que mejor describa tus necesidades
          </p>
        </div>
      </section>

      {/* Service Category 1: Vision Correction */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Glasses className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-3xl">Necesito corregir o mejorar mi visión</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Si has notado cambios en tu visión, dificultad para leer, manejar o trabajar cómodamente frente a pantallas, podemos ayudarte a encontrar la mejor solución para ti.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwc3RvcmV8ZW58MXx8fHwxNzM1NDk0NzkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Corrección visual"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "Examen visual completo", description: "Evaluación exhaustiva de tu salud visual" },
              { icon: Glasses, title: "Lentes graduados", description: "Monturas premium con tecnología óptica avanzada" },
              { icon: Activity, title: "Lentes bifocales y progresivos", description: "Soluciones multifocales personalizadas" },
              { icon: Droplet, title: "Lentes de contacto", description: "Adaptación profesional y seguimiento continuo" }
            ].map((service, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                    <service.icon className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                  </div>
                  <h4 className="text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20valoración%20para%20corregir%20mi%20visión" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar valoración
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Category 2: Eye Surgery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1742627541273-33ebe14bf1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxleWUlMjBzdXJnZXJ5JTIwbGFzZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc4MDA3NTcwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cirugía ocular"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Zap className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-3xl">Estoy interesado en una cirugía ocular</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Existen diferentes procedimientos para corregir problemas visuales o tratar enfermedades oculares. La mejor alternativa dependerá de una valoración especializada.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* LASIK/PRK */}
            <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: 'var(--azul-acero)' }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Zap className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h4 className="text-xl mb-3">Corrección visual láser</h4>
                <p className="text-gray-600 mb-4">
                  Procedimientos avanzados para corregir:
                </p>
                <ul className="space-y-2 mb-4 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Miopía</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Hipermetropía</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Astigmatismo</span>
                  </li>
                </ul>
                <p className="text-sm mb-2" style={{ color: 'var(--azul-egipcio)' }}>
                  <strong>Opciones disponibles:</strong>
                </p>
                <ul className="space-y-1 text-sm text-gray-600 mb-4">
                  <li>• LASIK</li>
                  <li>• PRK</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cataract Surgery */}
            <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: 'var(--azul-acero)' }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Eye className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h4 className="text-xl mb-3">Cirugía de catarata</h4>
                <p className="text-gray-600 mb-4">
                  Tratamiento especializado para recuperar la claridad visual
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Evaluación especializada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Lente intraocular personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Técnicas de microcirugía avanzada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pterygium Removal */}
            <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: 'var(--azul-acero)' }}>
              <CardContent className="p-8">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Activity className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h4 className="text-xl mb-3">Eliminación de carnosidad</h4>
                <p className="text-gray-600 mb-4">
                  Tratamiento para pterigión y carnosidad ocular
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Valoración especializada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Técnicas actualizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sm">•</span>
                    <span>Recuperación optimizada</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <div className="p-6 rounded-lg mb-8" style={{ backgroundColor: 'var(--celeste-claro)', borderLeft: `4px solid var(--azul-egipcio)` }}>
            <p className="text-gray-700">
              <strong>Nota importante:</strong> No todos los pacientes son candidatos a todas las técnicas. Una valoración especializada permitirá determinar la mejor opción para cada caso.
            </p>
          </div>

          <div className="text-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20solicitar%20una%20evaluación%20para%20cirugía%20ocular" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Solicitar evaluación
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Category 3: Specialized Follow-up */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <FileText className="w-7 h-7" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <h3 className="text-3xl">Necesito revisión o seguimiento especializado</h3>
              </div>
              <p className="text-lg text-gray-600 mb-8">
                Algunas enfermedades oculares requieren monitoreo periódico para preservar la salud visual y detectar cambios oportunamente.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGh0aGFsbW9sb2d5JTIwZXhhbXxlbnwxfHx8fDE3MzU0OTQ5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Seguimiento especializado"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Activity, title: "Control y detección de glaucoma", description: "Monitoreo de presión intraocular y salud del nervio óptico" },
              { icon: Eye, title: "Consulta oftalmológica", description: "Evaluación médica especializada de salud ocular" },
              { icon: FileText, title: "Seguimiento postoperatorio", description: "Control profesional después de cirugías oculares" },
              { icon: Zap, title: "Revisión de cambios visuales", description: "Evaluación de síntomas y alteraciones en la visión" }
            ].map((service, idx) => (
              <Card key={idx} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                    <service.icon className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                  </div>
                  <h4 className="text-lg mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
              <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20especializada" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Agendar consulta
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-6">
            ¿No estás seguro de qué servicio necesitas?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Agenda una valoración con nuestros especialistas y te ayudaremos a encontrar la mejor solución para tu caso
          </p>
          <Button size="lg" asChild style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
            <a href="https://wa.me/5212345678901?text=Hola,%20me%20gustaría%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Agendar cita
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
