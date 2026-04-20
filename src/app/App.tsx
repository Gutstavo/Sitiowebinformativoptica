import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { MissionVisionSection } from "./components/mission-vision-section";
import { ServicesSection } from "./components/services-section";
import { LensCareSection } from "./components/lens-care-section";
import { PromotionsSection } from "./components/promotions-section";
import { ReviewsSection } from "./components/reviews-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <ServicesSection />
        <LensCareSection />
        <PromotionsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
