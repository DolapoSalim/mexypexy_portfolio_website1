import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Words that Connect. Content that Converts.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl">
            I craft compelling, SEO-optimized content that engages your audience and drives results.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">My Services</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
