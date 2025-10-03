import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EmailForm } from './email-form';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-dashboard');

  return (
    <section id="waitlist" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Stop Losing $2,000 Deals to Missed Follow-ups
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Automated lead tracking for real estate agents who are too busy to babysit spreadsheets.
          </p>
          <div className="mt-8 max-w-md mx-auto md:mx-0">
            <EmailForm />
            <p className="mt-3 text-sm text-center text-muted-foreground">
              Join Waitlist - First 10 Get 50% Off Forever
            </p>
          </div>
        </div>
        <div className="relative h-64 md:h-auto md:aspect-[4/3] rounded-lg shadow-2xl">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover rounded-lg"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
