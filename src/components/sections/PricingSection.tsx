import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, MapPin } from "lucide-react";

const typicalRoutes = [
  { from: "Downtown Collingwood", to: "Blue Mountain Village", estimate: "$25 - $35" },
  { from: "Collingwood", to: "Wasaga Beach (Main St)", estimate: "$30 - $40" },
  { from: "Collingwood", to: "Thornbury", estimate: "$25 - $35" },
  { from: "Collingwood", to: "Stayner", estimate: "$30 - $40" },
  { from: "Collingwood", to: "Toronto Pearson Airport (YYZ)", estimate: "$200 - $250 (Pre-book for best rates)" },
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
            Affordable rates for common routes. For specific quotes, please call us.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-xl bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-headline text-primary">Typical Fare Estimates</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {typicalRoutes.map((route, index) => (
                <li key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-border last:border-b-0 hover:bg-muted/50 rounded-md transition-colors">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                    <span className="font-medium text-foreground">
                      {route.from} <span className="text-foreground/70 mx-1">to</span> {route.to}
                    </span>
                  </div>
                  <span className="font-semibold text-accent text-lg sm:text-right whitespace-nowrap">
                    {route.estimate}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-foreground/80 text-sm">
              *Estimates are subject to traffic, weather conditions, and specific pickup/drop-off locations. Tolls and airport fees may apply. Please call <a href="tel:+17053510000" className="font-semibold text-accent hover:underline">+1 705-351-0000</a> for precise quotes.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
