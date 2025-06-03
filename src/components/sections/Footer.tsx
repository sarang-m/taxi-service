import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessName = "Collingwood Regal Taxi";
  const phoneNumber = "+17053510000";
  const formattedPhoneNumber = "+1 705-351-0000";
  const address = "Serving Collingwood, ON and Surrounding Areas";

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Collingwood Regal Taxi</h3>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for reliable and professional taxi services in Collingwood.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-headline font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about-us" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#pricing" className="text-primary-foreground/80 hover:text-accent transition-colors">Pricing</Link></li>
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
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span className="text-primary-foreground/80">{address}</span>
              </li>
            </ul>
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              <Link href="#" aria-label="Facebook page (placeholder)" className="text-primary-foreground/80 hover:text-accent transition-colors"><Facebook className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Instagram page (placeholder)" className="text-primary-foreground/80 hover:text-accent transition-colors"><Instagram className="h-6 w-6" /></Link>
              <Link href="#" aria-label="Twitter page (placeholder)" className="text-primary-foreground/80 hover:text-accent transition-colors"><Twitter className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/30 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
