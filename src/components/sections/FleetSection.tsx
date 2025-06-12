import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";

const vehicles = [
  {
    name: "Spacious SUVs",
    description: "Ideal for families or groups with extra luggage, providing ample space and comfort.",
    //imgSrc: "https://placehold.co/600x400.png",
    imgSrc: "/taxi-car.jpg",
    alt: "SUV taxi in Collingwood",
    dataAiHint: "SUV car"
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            Our Modern Fleet
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Clean, well-maintained, and comfortable vehicles to suit your every need.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="p-0">
                <Image
                  src={vehicle.imgSrc}
                  alt={vehicle.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-56"
                  data-ai-hint={vehicle.dataAiHint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Car className="h-6 w-6 text-accent mr-2" />
                  <h3 className="text-xl font-headline font-semibold text-primary">{vehicle.name}</h3>
                </div>
                <p className="text-foreground/90 leading-relaxed">{vehicle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
