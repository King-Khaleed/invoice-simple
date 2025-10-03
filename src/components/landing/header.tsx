import { Leaf } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Verdant Launchpad</span>
        </Link>
        <nav>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#early-access">Get Early Access</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
