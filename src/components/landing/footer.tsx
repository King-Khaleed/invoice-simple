import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-bold font-headline">Verdant Launchpad</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Verdant Launchpad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
