import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, BarChart, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Launch Faster",
    description: "Streamline your development process and get to market in record time with our intuitive platform.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Grow Smarter",
    description: "Leverage powerful analytics and insights to make data-driven decisions and scale your business.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Secure & Reliable",
    description: "Rest easy knowing your service is built on a secure, reliable, and scalable infrastructure.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Verdant?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform is designed from the ground up to help you succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
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
