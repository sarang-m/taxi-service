import Link from 'next/link';
import { Phone, MapPin, Mail, Printer } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessName = "Collingwood Regal Taxi";
  const phoneNumber = "+17053510000";
  const formattedPhoneNumber = "+1 705-351-0000";
  const emailAddress = "Regaltaxi04@gmail.com";
  const faxNumber = "+1 (866) 309-3044";
  const faxLink = "+18663093044";
  const address = "Serving Collingwood, Wasaga Beach, ON and Surrounding Areas";

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Collingwood Regal Taxi</h3>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for reliable and professional taxi services in Collingwood, Wasaga Beach, and the surrounding areas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about-us" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <a href={`tel:${phoneNumber}`} className="text-primary-foreground/80 hover:text-accent transition-colors">{formattedPhoneNumber}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <a href={`mailto:${emailAddress}`} className="text-primary-foreground/80 hover:text-accent transition-colors">{emailAddress}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Printer className="h-4 w-4 mr-2 text-accent" />
                <a href={`tel:${faxLink}`} className="text-primary-foreground/80 hover:text-accent transition-colors">{faxNumber}</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">{address}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/30 pt-6 text-center text-sm">
          <p className="text-primary-foreground/80">&copy; {currentYear} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
