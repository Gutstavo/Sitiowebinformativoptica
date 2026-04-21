import { HeroSection } from "../components/hero-section";
import { ServicesSection } from "../components/services-section";
import { AboutTeaser } from "../components/about-teaser";
import { LensCareTeaser } from "../components/lens-care-teaser";
import { PromotionsTeaser } from "../components/promotions-teaser";
import { ReviewsSection } from "../components/reviews-section";
import { ContactSection } from "../components/contact-section";
import { CtaSection } from "../components/cta-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutTeaser />
      <ReviewsSection />
      <LensCareTeaser />
      <PromotionsTeaser />
      <ContactSection />
      <CtaSection />
    </>
  );
}
