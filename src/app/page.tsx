import { Header } from "@/components/invoicesimple/header";
import { Hero } from "@/components/invoicesimple/hero";
import { PainPoints } from "@/components/invoicesimple/pain-points";
import { Solution } from "@/components/invoicesimple/solution";
import { HowItWorks } from "@/components/invoicesimple/how-it-works";
import { Pricing } from "@/components/invoicesimple/pricing";
import { SocialProof } from "@/components/invoicesimple/social-proof";
import { Faq } from "@/components/invoicesimple/faq";
import { Footer } from "@/components/invoicesimple/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
