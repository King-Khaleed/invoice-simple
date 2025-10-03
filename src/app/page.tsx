import { Header } from "@/components/leadflow/header";
import { Hero } from "@/components/leadflow/hero";
import { PainPoints } from "@/components/leadflow/pain-points";
import { Solution } from "@/components/leadflow/solution";
import { HowItWorks } from "@/components/leadflow/how-it-works";
import { Pricing } from "@/components/leadflow/pricing";
import { SocialProof } from "@/components/leadflow/social-proof";
import { Faq } from "@/components/leadflow/faq";
import { Footer } from "@/components/leadflow/footer";

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
