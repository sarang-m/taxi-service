import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, ExternalLink, Building, Mail, Printer } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const businessName = "Collingwood Regal Taxi";
  const phoneNumber = "+17053510000";
  const formattedPhoneNumber = "+1 705-351-0000";
  const emailAddress = "Regaltaxi04@gmail.com";
  const faxNumber = "+1 (866) 309-3044";
  const faxLink = "+18663093044";
  const address = "Serving Collingwood, Wasaga Beach, ON, Canada and surrounding areas";
  const googleBusinessProfileLink = "https://g.co/kgs/gxxreX6";

  // Google Maps embed URL centered between Collingwood and Wasaga Beach
  const mapEmbedUrl = "https://maps.google.com/maps?q=Collingwood%2C%20Wasaga%20Beach%2C%20Ontario&t=&z=11&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="contact" className="py-12 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Ready for your ride in Collingwood or Wasaga Beach? Contact us. We are here to serve you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-xl bg-card h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-headline text-primary flex items-center">
                <Building className="h-7 w-7 mr-3 text-accent"/>
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <Building className="h-5 w-5 mr-2 text-primary/70"/> Business Name:
                </h3>
                <p className="text-foreground">{businessName}</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <MapPin className="h-5 w-5 mr-2 text-primary/70"/> Service Area:
                </h3>
                <p className="text-foreground">{address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <Phone className="h-5 w-5 mr-2 text-primary/70"/> Phone:
                </h3>
                <a href={`tel:${phoneNumber}`} className="text-accent hover:underline font-semibold text-xl">
                  {formattedPhoneNumber}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <Mail className="h-5 w-5 mr-2 text-primary/70"/> Email:
                </h3>
                <a href={`mailto:${emailAddress}`} className="text-accent hover:underline">
                  {emailAddress}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <Printer className="h-5 w-5 mr-2 text-primary/70"/> Fax:
                </h3>
                <a href={`tel:${faxLink}`} className="text-accent hover:underline">
                  {faxNumber}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary flex items-center mb-1">
                  <ExternalLink className="h-5 w-5 mr-2 text-primary/70"/> Google Business Profile:
                </h3>
                <Link href={googleBusinessProfileLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  View Our Profile
                </Link>
              </div>
              <p className="text-foreground/80 pt-4 border-t border-border">
                We are available for all your taxi needs in Collingwood, Wasaga Beach, and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-xl overflow-hidden bg-card h-full">
            <CardHeader className="pb-2">
               <CardTitle className="text-2xl font-headline text-primary flex items-center">
                <MapPin className="h-7 w-7 mr-3 text-accent"/>
                Our Service Area - Collingwood & Wasaga Beach
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full">
               <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Collingwood Regal Taxi Service Area Map - Collingwood and Wasaga Beach"
                className="w-full h-full min-h-[400px]"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
