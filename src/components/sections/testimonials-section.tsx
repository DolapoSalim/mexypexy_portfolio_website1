"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Mary understood our brand voice immediately and delivered content that exceeded expectations.",
    name: "Marketing Manager",
    title: "United Kingdom",
  },
  {
    quote: "Her blog posts consistently bring in organic traffic and are always engaging to read.",
    name: "Startup Founder",
    title: "United States of Americ",
  },
  {
    quote: "Working with Mary-Peace was a breeze. She's professional, meets every deadline, and her writing is simply beautiful. Highly recommended!",
    name: "Agency Owner",
    title: "European Union",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I'm proud to have collaborated with some amazing clients. Here's what they have to say about my work.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full flex flex-col justify-between p-6 shadow-md">
                      <div>
                        <Quote className="w-8 h-8 text-primary mb-4" />
                        <CardContent className="p-0 text-base">
                          <p>"{testimonial.quote}"</p>
                        </CardContent>
                      </div>
                      <footer className="mt-6">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </footer>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
