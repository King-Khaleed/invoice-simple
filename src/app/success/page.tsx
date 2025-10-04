import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/invoicesimple/header";
import { Footer } from "@/components/invoicesimple/footer";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Thank You! You&apos;re on the Waitlist
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ll email you when InvoiceSimple launches. In the meantime, tell other freelancers about us!
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
