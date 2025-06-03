import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation, Plane, Briefcase, Mountain, Star } from "lucide-react";

const services = [
  {
    icon: <Navigation className="h-10 w-10 text-accent" />,
    title: "Local Rides",
    description: "Quick and reliable taxi service for all your local travel needs within Collingwood. Whether it's shopping, appointments, or a night out, your Collingwood cab is here.",
  },
  {
    icon: <Plane className="h-10 w-10 text-accent" />,
    title: "Airport Transfers",
    description: "Stress-free airport taxi to and from Toronto Pearson Airport (YYZ), Billy Bishop Toronto City Airport (YTZ), and other regional airports. Pre-book your airport cab in Collingwood for peace of mind.",
  },
  {
    icon: <Mountain className="h-10 w-10 text-accent" />,
    title: "Blue Mountain & Resort Taxi",
    description: "Convenient taxi services to Blue Mountain Resort, Wasaga Beach, and other local attractions. Enjoy your vacation with our reliable Blue Mountain taxi.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-accent" />,
    title: "Corporate Travel",
    description: "Professional and discreet transportation for business meetings, corporate events, and executive travel. Impress your clients with our premium service.",
  },
  {
    icon: <Star className="h-10 w-10 text-accent" />,
    title: "Long-Distance Rides",
    description: "Comfortable and safe long-distance taxi services to any destination. Contact us for custom quotes for out-of-town trips.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            Our Comprehensive Taxi Services
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Whatever your transportation needs, Collingwood Regal Taxi has you covered.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-2xl font-headline text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-foreground/90 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
