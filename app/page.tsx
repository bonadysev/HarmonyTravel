import { BenefitsSection } from "@/components/benefits-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { LeadFormSection } from "@/components/lead-form-section";
import { LocationSection } from "@/components/location-section";
import { MobileStickyContactBar } from "@/components/mobile-sticky-contact-bar";
import { ReviewsSection } from "@/components/reviews-section";
import { SafetySection } from "@/components/safety-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToursSection } from "@/components/tours-section";
import { TrustFaqSection } from "@/components/trust-faq-section";
import { UpcomingDeparturesSection } from "@/components/upcoming-departures-section";

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0">
      <SiteHeader />
      <HeroSection />
      <UpcomingDeparturesSection />
      <BenefitsSection />
      <ToursSection />
      <SafetySection />
      <HowItWorksSection />
      <ReviewsSection />
      <TrustFaqSection />
      <LocationSection />
      <LeadFormSection />
      <SiteFooter />
      <MobileStickyContactBar />
    </main>
  );
}
