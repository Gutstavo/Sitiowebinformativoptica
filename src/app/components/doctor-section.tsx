import { GraduationCap, Award, Users } from "lucide-react";

export function DoctorSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Dr. María González
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Optometrista Certificada
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Con más de 15 años de experiencia en optometría clínica, la Dra. González se especializa en el cuidado integral de la salud visual, desde exámenes preventivos hasta tratamientos especializados.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <GraduationCap className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Formación Académica</h4>
                  <p className="text-gray-600">Licenciatura en Optometría, Universidad Nacional. Especialización en Contactología Avanzada.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Award className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Certificaciones</h4>
                  <p className="text-gray-600">Miembro del Colegio Nacional de Optometristas. Certificación Internacional en Ortoqueratología.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--celeste-claro)' }}>
                  <Users className="w-6 h-6" style={{ color: 'var(--azul-egipcio)' }} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">Experiencia</h4>
                  <p className="text-gray-600">Más de 10,000 pacientes atendidos. Especialista en adaptación de lentes de contacto y terapia visual.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl" style={{ border: '4px solid var(--azul-acero)' }}>
            <img
              src="https://images.unsplash.com/photo-1758691462638-c60c83bd7310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvcHRvbWV0cmlzdCUyMGRvY3RvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3NTczOTk1NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dra. María González"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}