import Link from "next/link";
import { ReceiptText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ReceiptText className="h-5 w-5 text-primary" />
            <span className="font-bold">InvoiceSimple</span>
          </div>
          <p className="text-sm text-center text-muted-foreground">
            Made for freelancers, by freelancers.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
             <a href="mailto:support@invoicesimple.netlify.app" className="text-muted-foreground hover:text-foreground">support@invoicesimple.netlify.app</a>
             <div className="hidden md:block h-4 w-px bg-border"></div>
             <Link href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
             <Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
         <p className="text-center text-xs text-muted-foreground mt-6">
            © {new Date().getFullYear()} InvoiceSimple. All rights reserved.
          </p>
      </div>
    </footer>
  );
}
