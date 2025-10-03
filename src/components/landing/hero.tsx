import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container max-w-4xl px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Launch Your Digital Future
        </h1>
        <p className="mt-6 text-lg leading-8 sm:text-xl">
          Verdant Launchpad provides the tools you need to grow your online presence and succeed. Sign up for early access and take the first step towards innovation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#early-access">Get Early Access</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="text-white hover:text-white/90">
            <Link href="#benefits">Learn More &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
