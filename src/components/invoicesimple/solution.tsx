import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig, Send, CreditCard } from "lucide-react";

const benefits = [
  {
    icon: <CircleCheckBig className="h-8 w-8 text-green-500" />,
    title: "Create Invoices in 60s",
    description: "Use a simple form with auto-calculations and professional templates.",
  },
  {
    icon: <Send className="h-8 w-8 text-green-500" />,
    title: "Send with One Click",
    description: "Email invoices directly to clients & track when they're opened.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-500" />,
    title: "Get Paid Online",
    description: "Accept credit cards, bank transfers, and more via Stripe & PayPal.",
  },
];

export function Solution() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get Paid Faster, Without the Headache
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to manage your freelance invoices, and nothing you don't.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg border-t-4 border-green-500/20">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
