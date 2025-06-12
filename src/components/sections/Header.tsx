import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Car } from 'lucide-react';

const navItems = [
  { href: '#about-us', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Our Fleet' },
  { href: '#pricing', label: 'Routes' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-card shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-primary">
          Collingwood Regal Taxi
        </Link>
        
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="text-foreground hover:text-primary transition-colors">
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-6">
              <div className="mb-6 flex items-center gap-2 text-xl font-bold font-headline text-primary">
                Collingwood Regal Taxi
              </div>
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <Button key={item.label} variant="ghost" asChild className="justify-start text-lg">
                    <Link href={item.href} className="text-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
