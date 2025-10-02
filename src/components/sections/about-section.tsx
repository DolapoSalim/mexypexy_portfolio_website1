import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutSection() {
  const professionalImage = PlaceHolderImages.find(p => p.id === 'professional-photo');

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              {professionalImage && (
                <Image
                  src={professionalImage.imageUrl}
                  alt={professionalImage.description}
                  data-ai-hint={professionalImage.imageHint}
                  fill
                  className="rounded-full object-cover shadow-lg"
                />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-center lg:col-span-3">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              About Mary-Peace
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm a dedicated content writer with a passion for storytelling and a knack for SEO. My goal is to create content that not only ranks well but also resonates deeply with your target audience, fostering connection and driving conversions.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              With a background in marketing and a love for the written word, I bring a strategic yet creative approach to every project.
            </p>
            <div className="mt-6">
              <h3 className="font-headline text-xl font-semibold">Certifications</h3>
              <div className="flex flex-wrap gap-2 mt-2">
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
