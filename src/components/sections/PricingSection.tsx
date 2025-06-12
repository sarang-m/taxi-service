import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const commonRoutes = [
  { from: "Downtown Collingwood", to: "Blue Mountain Village" },
  { from: "Collingwood", to: "Wasaga Beach (Main St)" },
  { from: "Collingwood", to: "Thornbury" },
  { from: "Collingwood", to: "Stayner" },
  { from: "Collingwood", to: "Toronto Pearson Airport (YYZ)" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Offering flat rate in local or long distance ride.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl bg-card">
          <CardContent className="pt-6">
            <h3 className="text-xl font-headline font-semibold text-primary mb-6 text-center">Common Routes We Serve</h3>
            <ul className="space-y-3">
              {commonRoutes.map((route, index) => (
                <li key={index} className="flex items-center p-3 border-b border-border last:border-b-0 hover:bg-muted/50 rounded-md transition-colors">
                  <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <span className="font-medium text-foreground">
                    {route.from} <span className="text-foreground/70 mx-1">to</span> {route.to}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-foreground/80 text-sm">
              *Estimates are subject to traffic, weather conditions, and specific pickup/drop-off locations. Tolls and airport fees may apply. Please call <a href="tel:+17053510000" className="font-semibold text-accent hover:underline">+1 705-351-0000</a> for precise quotes and flat rates.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
