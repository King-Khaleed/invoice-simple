import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    value: "Save $120+/year",
    label: "vs FreshBooks ($19/mo vs $9/mo)",
  },
  {
    value: "Get Paid 2x Faster",
    label: "with integrated online payments.",
  },
  {
    value: "One Less Subscription",
    label: "draining your monthly freelance budget.",
  },
];

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The Math is Simple
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
