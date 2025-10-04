import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
            <Card className="w-full max-w-md text-center shadow-2xl border-2 border-primary">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl font-bold">$9/month</CardTitle>
                <CardDescription className="pt-2 text-base text-muted-foreground">
                  Unlimited invoices, unlimited clients.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No hidden fees, cancel anytime.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="#waitlist">Start Free Trial</Link>
                </Button>
              </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
