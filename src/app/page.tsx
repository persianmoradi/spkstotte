import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { WhySpk } from "@/components/sections/why-spk";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Process } from "@/components/sections/process";
import { MethodsPreview } from "@/components/sections/methods-preview";
import { Partners } from "@/components/sections/partners";
import { ContactCta } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhySpk />
      <ServicesOverview />
      <Process />
      <MethodsPreview />
      <Partners />
      <ContactCta />
    </>
  );
}
