import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Smartphone, Bell } from "lucide-react";

const benefits = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Automatic Follow-ups",
    description: "Pre-written email sequences sent on autopilot, so you're always top-of-mind.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Mobile Dashboard",
    description: "See all your leads and exactly who needs attention today, right from your phone.",
  },
  {
    icon: <Bell className="h-8 w-8 text-primary" />,
    title: "Smart Reminders",
    description: "Get SMS alerts for hot leads going cold, so you know exactly when to pick up the phone.",
  },
];

export function Solution() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Never Lose Another Lead
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            LeadFlow automates the tedious work so you can focus on what you do best: closing deals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center shadow-lg border-t-4 border-primary/20">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
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
