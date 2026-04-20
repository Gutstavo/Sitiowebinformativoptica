import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const locations = [
  {
    name: "Hermosillo",
    address: "Blvd. Luis Encinas 123, Col. Centro, Hermosillo, Sonora",
    phone: "(662) 123-4567",
    hours: "Lun - Vie: 9:00 - 19:00, Sáb: 10:00 - 14:00",
    email: "hermosillo@opticaterminel.com"
  },
  {
    name: "Agua Prieta",
    address: "Av. 6 No. 456, Agua Prieta, Sonora",
    phone: "(633) 765-4321",
    hours: "Lun - Vie: 10:00 - 18:00, Sáb: 10:00 - 15:00",
    email: "aguaprieta@opticaterminel.com"
  }
];

export function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gray-50" id="contacto">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Visítanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para cuidar tu salud visual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--azul-egipcio)' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl">
                    {location.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--azul-acero)' }} />
                    <p className="text-gray-700">{location.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--azul-acero)' }} />
                    <a href={`tel:${location.phone}`} className="text-gray-700 hover:underline">{location.phone}</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--azul-acero)' }} />
                    <a href={`mailto:${location.email}`} className="text-gray-700 hover:underline">{location.email}</a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--azul-acero)' }} />
                    <p className="text-gray-700">{location.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
