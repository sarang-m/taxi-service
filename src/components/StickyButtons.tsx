
import { Button } from "@/components/ui/button";
import { Phone, MessageSquareText } from "lucide-react"; 

export default function StickyButtons() {
  const phoneNumber = "+17053510000";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent("Hello Collingwood Regal Taxi, I'd like to book a ride.")}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-3">
      <Button
        asChild
        size="icon"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white w-14 h-14 shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <MessageSquareText className="h-7 w-7" />
        </a>
      </Button>
      <Button
        asChild
        size="icon"
        className="rounded-full bg-accent hover:bg-red-700 text-accent-foreground w-14 h-14 shadow-lg"
        aria-label="Call Us"
      >
        <a href={`tel:${phoneNumber}`}>
          <Phone className="h-7 w-7" />
        </a>
      </Button>
    </div>
  );
}
