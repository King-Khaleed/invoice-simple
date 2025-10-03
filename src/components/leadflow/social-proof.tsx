import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    value: "35-50%",
    label: "of sales go to the first agent to respond.",
    source: "Source: Harvard Business Review",
  },
  {
    value: "$2k - $5k",
    label: "average commission per real estate deal.",
    source: " ",
  },
  {
    value: "1 Deal",
    label: "from one follow-up pays for months of software.",
    source: " ",
  },
];

export function SocialProof() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The High Cost of Missing Follow-ups
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card">
              <CardHeader>
                <CardTitle className="text-4xl font-extrabold text-primary">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
