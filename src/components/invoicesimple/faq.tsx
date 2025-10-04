import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from FreshBooks or QuickBooks?",
    answer: "We're 60% cheaper and 90% simpler. Most accounting software is built for businesses with accountants. We're built for freelancers who just need to get paid.",
  },
  {
    question: "Can I accept credit card payments?",
    answer: "Yes! We integrate with Stripe and PayPal so you can accept all major payment methods.",
  },
  {
    question: "What if I have multiple clients?",
    answer: "No problem. Our $9/month plan includes unlimited clients and invoices.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, you can try InvoiceSimple free for 14 days. No credit card required.",
  },
  {
    question: "Can I customize my invoices?",
    answer: "Absolutely. Add your logo, change colors, and customize fields to match your brand.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
