import { ParticlesBackground } from '@/components/ParticlesBackground';
import { GradientGlow } from '@/components/GradientGlow';
import { HeaderSection } from '@/sections/HeaderSection';
import { HeroSection } from '@/sections/HeroSection';
import { StatsSection } from '@/sections/StatsSection';
import { ProductsSection } from '@/sections/ProductsSection';
import { StepsSection } from '@/sections/StepsSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { PricingSection } from '@/sections/PricingSection';
import { ContactSection } from '@/sections/ContactSection';
import { FooterSection } from '@/sections/FooterSection';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden" style={{ isolation: 'isolate' }}>
      {/* Background effects */}
      <ParticlesBackground />
      <GradientGlow />
      
      {/* Header */}
      <HeaderSection />
      
      {/* Main content */}
      <main className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <StatsSection />
        <ProductsSection />
        <StepsSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}

export default App;
