import { Link } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home" className="flex items-center">
            <img 
              src="/21centurytech_logo.png" 
              alt="21 Century Tech LLC" 
              className="h-8 w-auto transition-opacity hover:opacity-80"
            />
            <span className="text-xl font-bold text-foreground hover:text-primary transition-colors"> &nbsp;21 Century Tech LLC</span>
          </Link>
          
          <nav className="flex items-center gap-4">
            <a
              href="https://x.com/@benlsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
              data-testid="link-twitter"
            >
              Follow me on X
            </a>
            <Link 
              href="/blog"
              className="text-sm text-foreground hover:text-primary transition-colors hover:underline decoration-2 underline-offset-4"
              data-testid="link-blog"
            >
              Read my blog
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
