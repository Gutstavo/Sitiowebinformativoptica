import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl mb-6" style={{ color: 'var(--azul-egipcio)' }}>
          404
        </h1>
        <h2 className="text-3xl md:text-4xl mb-6">
          Página no encontrada
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe.
        </p>
        <Button asChild size="lg" style={{ backgroundColor: 'var(--azul-egipcio)' } as React.CSSProperties} className="hover:opacity-90">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-5 h-5" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
