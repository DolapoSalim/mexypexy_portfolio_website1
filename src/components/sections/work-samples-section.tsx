import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const samples = [
  {
    id: 'blog-post-sample',
    title: 'Blog Post: 5 ways to Boost Local Seo',
    description: '1,200-word SEO blog post written for a marketing agency — optimised for keywords and structured for readability.',
    url: 'https://docs.google.com/document/d/1z0xTg1j0fGH-8PubwbYKWVbWVuubK0AMZ0CADG_rciY/edit?usp=sharing',
  },
  {
    id: 'website-copy-sample',
    title: 'Website Copy: Sustainable Clothing Brand',
    description: 'Homepage and About page copy crafted to reflect the brand’s voice and increase conversions.',
    url: 'https://docs.google.com/document/d/1Oylp3GHqGWmbAgFx5q2MoY9WVXJsyaAJ1733SaOtNYA/edit?usp=sharing',
  },
  {
    id: 'article-sample',
    title: 'Article: The Future of Remote Work',
    description: 'Thought-leadership piece exploring workplace trends for a global audience.',
    url: 'https://docs.google.com/document/d/1xqVHVSECINL8yCfE-oR4MyGQvZitaZ9bjTBz-OL3-hI/edit?usp=sharing',
  },
];

export function WorkSamplesSection() {
  return (
    <section id="samples" className="w-full py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Work Samples
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are a few examples of my writing. Each piece is crafted with a specific audience and goal in mind.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {samples.map((sample) => {
            const image = PlaceHolderImages.find((p) => p.id === sample.id);
            const CardContentWrapper = sample.url && sample.url !== '#' ? 'a' : 'div';
            return (
              <CardContentWrapper
                key={sample.id}
                {...(CardContentWrapper === 'a' && {
                  href: sample.url,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
              >
                <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
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
              </CardContentWrapper>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a href="#" target="_self" rel="noopener noreferrer">
            <Button size="lg" variant="outline">Read More Samples</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
