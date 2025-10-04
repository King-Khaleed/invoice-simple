const steps = [
  {
    step: 1,
    title: "Sign up in 30 seconds",
    description: "No credit card required to start your free 14-day trial.",
  },
  {
    step: 2,
    title: "Create your first invoice",
    description: "Use our simple form to create a professional invoice in under 60 seconds.",
  },
  {
    step: 3,
    title: "Send to your client",
    description: "Email the invoice or send a shareable link with just one click.",
  },
  {
    step: 4,
    title: "Get paid",
    description: "Track everything in one place and accept online payments easily.",
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
            Four simple steps to faster payments and less stress.
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
