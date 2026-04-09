export function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWVnbGFzc2VzJTIwZGlzcGxheSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc1NzM5OTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Monturas elegantes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg mb-4 text-gray-700">
              Desde hace más de 20 años, nos dedicamos a cuidar la salud visual de nuestros pacientes con la más alta tecnología y un servicio personalizado excepcional.
            </p>
            <p className="text-lg mb-4 text-gray-700">
              Nuestra misión es proporcionar soluciones visuales completas que combinen funcionalidad, comodidad y estilo, adaptándonos a las necesidades únicas de cada cliente.
            </p>
            <p className="text-lg text-gray-700">
              Contamos con un equipo de profesionales altamente calificados y equipamiento de última generación para garantizar los mejores resultados en cada consulta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
