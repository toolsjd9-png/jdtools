import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import FeaturesSection from "@/components/sections/features";
import ProductSection from "@/components/sections/ProductSection";
import ContactSection from "@/components/sections/contact";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <ProductSection />
      <ContactSection />
    </main>
  );
}