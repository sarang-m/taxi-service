import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold text-primary sm:text-4xl">
            About Collingwood Regal Taxi
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Your premier choice for reliable and professional taxi services in the heart of Collingwood and Wasaga Beach.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/regal-taxi.webp"
              alt="Friendly taxi driver in Collingwood or Wasaga Beach"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover w-full h-auto"
              data-ai-hint="taxi driver"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              At Collingwood Regal Taxi, we pride ourselves on delivering exceptional transportation solutions tailored to your needs. With years of experience serving the Collingwood and Wasaga Beach communities and visitors alike, we understand the importance of punctuality, safety, and courteous service.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Our team of professional drivers are local experts, deeply familiar with Collingwood, Blue Mountain, Wasaga Beach, and the wider Simcoe County & Grey County regions. Whether you need a quick local trip, a comfortable ride to Toronto Pearson Airport, or specialized corporate travel, we are committed to making your journey smooth and enjoyable.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We focus on providing a high-quality service that you can depend on. Your satisfaction and safety are our top priorities. Choose Collingwood Regal Taxi for a truly regal travel experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
