import { Button } from "@/components/ui/button";
import { Phone, Award } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const phoneNumber = "+17053510000";
  const formattedPhoneNumber = "+1 705-351-0000";

  return (
    <section id="hero" className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl font-headline font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl drop-shadow-md">
          Your trusted taxi service in Collingwood and Wasaga Beach
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/90 sm:text-xl md:text-2xl">
          Fast, reliable, and friendly rides anytime, anywhere in Collingwood, Wasaga Beach, and surrounding areas.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-accent hover:bg-red-700 text-accent-foreground hover:text-accent-foreground text-lg font-semibold px-10 py-6 rounded-lg shadow-lg transition-transform duration-150 hover:scale-105"
            asChild
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-3 h-6 w-6" />
              Call {formattedPhoneNumber}
            </a>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 text-md">
          <Award className="h-6 w-6 text-yellow-400" />
          <span className="text-primary-foreground/90">Trusted by <strong>10,000+</strong> riders in Collingwood & Wasaga Beach</span>
        </div>
      </div>
    </section>
  );
}
