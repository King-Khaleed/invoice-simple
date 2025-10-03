const steps = [
  {
    step: 1,
    title: "Add a lead",
    description: "Enter a new lead's contact info from your phone or desktop in under 30 seconds.",
  },
  {
    step: 2,
    title: "Automation kicks in",
    description: "We automatically send your pre-written follow-up emails at the perfect times.",
  },
  {
    step: 3,
    title: "Get smart reminders",
    description: "Receive an SMS alert when a lead is ready for a personal call from you.",
  },
  {
    step: 4,
    title: "Close more deals",
    description: "Focus on building relationships and closing deals, not on managing spreadsheets.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four simple steps to automated follow-ups and more closed deals.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.step} className="text-center relative">
               <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                  {step.step}
                </div>
               </div>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
