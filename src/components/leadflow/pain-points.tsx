import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Clock, AlertCircle } from "lucide-react";

const painPoints = [
  {
    icon: <FileText className="h-8 w-8 text-destructive" />,
    title: "Scattered Leads",
    description: "Leads are lost on napkins, phone notes, and sticky notes, with no central source of truth.",
  },
  {
    icon: <Clock className="h-8 w-8 text-destructive" />,
    title: "No Time to Follow-Up",
    description: "You're too busy showing homes and closing deals to remember who to follow up with and when.",
  },
  {
    icon: <AlertCircle className="h-8 w-8 text-destructive" />,
    title: "Losing to Competitors",
    description: "Deals are going to competitors simply because you forgot to make that one crucial call back.",
  },
];

export function PainPoints() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            You're a great agent, but you can't be everywhere at once.
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
