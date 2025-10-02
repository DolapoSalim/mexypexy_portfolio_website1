import { Button } from '@/components/ui/button';

export function HeroSection() {
  const words = ["Content", "SEO", "Storytelling", "Engage", "Connect", "Convert", "Strategy", "Words"];

  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
          {words.map((word, index) => (
            <span
              key={index}
              className="absolute text-primary/10 font-headline font-bold text-4xl md:text-6xl"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animation: `float 20s ease-in-out ${Math.random() * 20}s infinite`,
              }}
            >
              {word}
            </span>
          ))}
        </div>
        <style>
          {`
            @keyframes float {
              0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
              }
              25% {
                opacity: 1;
              }
              50% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 20 - 10}deg);
              }
              75% {
                opacity: 1;
              }
              100% {
                transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(${Math.random() * 20 - 10}deg);
                opacity: 0;
              }
            }
          `}
        </style>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          {/* <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Words that Connect. Content that Converts.
          </h1> */}
          <br />
          <h2 className="font-headline text-6xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I’m Mary-peace.
          </h2>
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