import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    quote: "Collingwood Regal Taxi got me to my early morning flight from Pearson on time, even with short notice. The driver was professional and the car was very clean. Excellent service from Georgian Meadows!",
    name: "Sarah K.",
    location: "Georgian Meadows, Collingwood",
  },
  {
    quote: "Used their service for a Blue Mountain pickup after a long day of skiing. The driver was friendly and knew all the shortcuts. Much appreciated!",
    name: "Mike P.",
    location: "Blue Mountain Resort",
  },
  {
    quote: "Reliable and always on time for my appointments in town. They are my go-to taxi service in Collingwood. Fair prices too.",
    name: "Linda H.",
    location: "Downtown Collingwood",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            What Our Riders Say
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Hear from satisfied customers who trust Collingwood Regal Taxi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="pb-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/90 italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start pt-4 border-t mt-auto">
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <div className="flex items-center text-sm text-foreground/70">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  <span>{testimonial.location}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
