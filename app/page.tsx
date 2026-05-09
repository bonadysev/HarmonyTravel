import { BenefitsSection } from "@/components/benefits-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { LeadFormSection } from "@/components/lead-form-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SafetySection } from "@/components/safety-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ToursSection } from "@/components/tours-section";
import { UpcomingDeparturesSection } from "@/components/upcoming-departures-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      <UpcomingDeparturesSection />
      <BenefitsSection />
      <ToursSection />
      <SafetySection />
      <HowItWorksSection />
      <ReviewsSection />
      <FaqSection />
      <LeadFormSection />
      <SiteFooter />
    </main>
  );
}
