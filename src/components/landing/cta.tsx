import { EmailForm } from "./email-form";

export function Cta() {
  return (
    <section id="early-access" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="relative isolate overflow-hidden bg-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl font-headline text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Be the First to Know
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">
            Sign up for exclusive early access and be the first to experience Verdant Launchpad.
          </p>
          <div className="mt-8 flex justify-center">
            <EmailForm />
          </div>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e09d834f704)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="8d958450-c69f-4251-94bc-4e09d834f704">
                <stop stopColor="#36A2EB" />
                <stop offset={1} stopColor="#50C878" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
