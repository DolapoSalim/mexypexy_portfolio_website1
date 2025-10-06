import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/profile_image.jpeg"
                alt="Professional headshot of Mary-Peace"
                data-ai-hint="professional portrait"
                width={400}
                height={400}
                className="rounded-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About Mary-Peace
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I’m a freelance copywriter and SEO content writer passionate about helping businesses communicate with clarity and confidence.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Over the years, I’ve written blogs, articles, and marketing copy for businesses reaching both local and global audiences. My style is flexible yet consistent: clear, engaging, and tailored to your brand voice.
              When I’m not writing, you’ll usually find me reading, exploring new ideas in digital marketing, or enjoying the simple moments that inspire great storytelling.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              If you want content that feels authentic and performs online, I’d love to help.
            </p>
            <div className="mt-6">
              <h3 className="font-headline text-xl font-semibold">Certifications</h3>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge variant="secondary">SEO Content Strategy</Badge>
                <Badge variant="secondary">Advanced Google Analytics</Badge>
                <Badge variant="secondary">HubSpot Content Marketing</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}