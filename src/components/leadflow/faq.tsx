import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is this different from a CRM like Follow Up Boss?",
    answer:
      "We're simpler and up to 60% cheaper. Most CRMs are built for large teams and are bloated with features you'll never use. We're built for solo agents who just need the basics to work flawlessly.",
  },
  {
    question: "Can I import my existing leads?",
    answer:
      "Yes. We offer free, white-glove migration services. We'll help you migrate from spreadsheets, your phone's contact list, or your current system at no extra cost.",
  },
  {
    question: "What if I'm not technical?",
    answer:
      "No problem. We set everything up for you in under 24 hours. Your only job is to add new leads as you get them. We handle the rest.",
  },
  {
    question: "What if leads don't respond to the automated emails?",
    answer:
      "You get SMS reminders to personally call them at key intervals. Automation handles the grunt work of staying top-of-mind, freeing you up to handle the relationship-building.",
  },
  {
    question: "Can I customize the follow-up messages?",
    answer:
      "Absolutely. We provide proven, high-converting templates out of the box, but you can edit everything to match your own voice and style.",
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
