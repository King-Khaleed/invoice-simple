import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeDollarSign, Clock, Annoyed } from "lucide-react";

const painPoints = [
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-destructive" />,
    title: "Paying for Bloat",
    description: "Paying $20+/month for complex accounting features you don't even use.",
  },
  {
    icon: <Clock className="h-8 w-8 text-destructive" />,
    title: "Wasting Time",
    description: "Wasting hours on clunky software when you should be working on billable tasks.",
  },
  {
    icon: <Annoyed className="h-8 w-8 text-destructive" />,
    title: "Chasing Payments",
    description: "Feeling frustrated chasing clients for late payments without a proper system in place.",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tired of Overpaying for Invoicing?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your invoicing tool should save you time and money, not add to your stress.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <Card key={index} className="text-center shadow-lg border-t-4 border-destructive/20">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 mb-4">
                  {point.icon}
                </div>
                <CardTitle className="text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
