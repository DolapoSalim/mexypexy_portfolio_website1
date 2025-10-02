import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ServicesSection } from '@/components/sections/services-section';
import { WorkSamplesSection } from '@/components/sections/work-samples-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ToneAnalyzerSection } from '@/components/sections/tone-analyzer-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkSamplesSection />
        <TestimonialsSection />
        <ToneAnalyzerSection />
        <ContactSection />
      </main>
      <footer className="bg-background py-6 px-4 md:px-6">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mary-Peace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
