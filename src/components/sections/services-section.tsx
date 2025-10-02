import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PenSquare, Globe, Search, FileEdit } from 'lucide-react';

const services = [
  {
    icon: <PenSquare className="w-8 h-8 text-primary" />,
    title: 'SEO Blog & Article Writing',
    description: 'Engaging, well-researched blog posts and articles optimized to rank on search engines and attract your ideal reader.',
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'Website & Marketing Copy',
    description: 'Persuasive copy for your website pages, landing pages, and marketing materials that converts visitors into customers.',
  },
  {
    icon: <Search className="w-8 h-8 text-primary" />,
    title: 'Keyword Research & SEO Strategy',
    description: 'In-depth keyword research and content strategy development to build your topical authority and dominate search results.',
  },
  {
    icon: <FileEdit className="w-8 h-8 text-primary" />,
    title: 'Editing & Rewriting',
    description: 'Refining your existing content to improve clarity, flow, and SEO performance, ensuring your message shines.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            How I Can Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From crafting compelling blog posts to developing a full-scale content strategy, I offer a range of services to meet your content needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0 flex flex-col items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
