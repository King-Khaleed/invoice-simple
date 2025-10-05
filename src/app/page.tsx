import { Header } from "@/components/billful/header";
import { Hero } from "@/components/billful/hero";
import { PainPoints } from "@/components/billful/pain-points";
import { Solution } from "@/components/billful/solution";
import { HowItWorks } from "@/components/billful/how-it-works";
import { Pricing } from "@/components/billful/pricing";
import { SocialProof } from "@/components/billful/social-proof";
import { Faq } from "@/components/billful/faq";
import { Footer } from "@/components/billful/footer";

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
