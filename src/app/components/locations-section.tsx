import { MapPin, Clock, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const locations = [
  {
    name: "Sucursal Hermosillo",
    address: "Blvd. Luis Encinas 123, Col. Centro, Hermosillo, Sonora",
    phone: "(662) 123-4567",
    hours: "Lun - Vie: 9:00 - 19:00, Sáb: 10:00 - 14:00",
    image: "https://images.unsplash.com/photo-1774845334998-616e157ec181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcHRpY2FsJTIwc3RvcmUlMjBleHRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NzU3Mzk5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Sucursal Agua Prieta",
    address: "Av. 6 No. 456, Agua Prieta, Sonora",
    phone: "(633) 765-4321",
    hours: "Lun - Vie: 10:00 - 18:00, Sáb: 10:00 - 15:00",
    image: "https://images.unsplash.com/photo-1770221797827-839d22db4a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleWUlMjBleGFtaW5hdGlvbiUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzU3Mzk5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function LocationsSection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Nuestras Sucursales
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visítanos en cualquiera de nuestras ubicaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl mb-4">
                  {location.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--egyptian-blue)' }} />
                    <p className="text-gray-700">{location.address}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--egyptian-blue)' }} />
                    <p className="text-gray-700">{location.phone}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'var(--egyptian-blue)' }} />
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