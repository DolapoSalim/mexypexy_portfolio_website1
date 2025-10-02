import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <style>
              {`
                @keyframes draw {
                  to {
                    stroke-dashoffset: 0;
                  }
                }
                .scribble-path {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: draw 5s linear forwards;
                }
                #path1 { animation-delay: 0s; }
                #path2 { animation-delay: 0.5s; }
                #path3 { animation-delay: 1s; }
                #path4 { animation-delay: 1.5s; }
              `}
            </style>
          </defs>
          <g className="text-primary/10" stroke="currentColor" strokeWidth="2" fill="none">
            <path
              id="path1"
              className="scribble-path"
              d="M-200 100 Q-100 200, 0 100 T 200 100 T 400 100 T 600 100 T 800 100 T 1000 100 T 1200 100 T 1400 100 T 1600 100 T 1800 100 T 2000 100"
            />
            <path
              id="path2"
              className="scribble-path"
              d="M-200 300 Q-100 400, 0 300 T 200 300 T 400 300 T 600 300 T 800 300 T 1000 300 T 1200 300 T 1400 300 T 1600 300 T 1800 300 T 2000 300"
            />
             <path
              id="path3"
              className="scribble-path"
              d="M-200 500 Q-100 600, 0 500 T 200 500 T 400 500 T 600 500 T 800 500 T 1000 500 T 1200 500 T 1400 500 T 1600 500 T 1800 500 T 2000 500"
            />
             <path
              id="path4"
              className="scribble-path"
              d="M-200 700 Q-100 800, 0 700 T 200 700 T 400 700 T 600 700 T 800 700 T 1000 700 T 1200 700 T 1400 700 T 1600 700 T 1800 700 T 2000 700"
            />
          </g>
        </svg>
      </div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
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
