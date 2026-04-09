import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ServicesSection } from "./components/services-section";
import { DoctorSection } from "./components/doctor-section";
import { LocationsSection } from "./components/locations-section";
import { ReviewsSection } from "./components/reviews-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorSection />
        <LocationsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}
