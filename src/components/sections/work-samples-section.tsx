import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const samples = [
  {
    id: 'blog-post-sample',
    title: 'Blog Post: The Future of AI in Content Creation',
    description: 'An in-depth look at how artificial intelligence is transforming the content landscape.',
  },
  {
    id: 'website-copy-sample',
    title: 'Website Copy: SaaS Company Homepage',
    description: 'Compelling copy designed to increase sign-ups for a new tech startup.',
  },
  {
    id: 'article-sample',
    title: 'Article: 5 Strategies for Sustainable Living',
    description: 'A feature article for an environmental magazine, focusing on actionable tips for readers.',
  },
];

export function WorkSamplesSection() {
  return (
    <section id="samples" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            My Work
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few examples of my writing. Each piece is crafted with a specific audience and goal in mind.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {samples.map((sample) => {
            const image = PlaceHolderImages.find((p) => p.id === sample.id);
            return (
              <Card key={sample.id} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                {image && (
                  <div className="relative h-60 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{sample.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{sample.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">Read More Samples</Button>
        </div>
      </div>
    </section>
  );
}
