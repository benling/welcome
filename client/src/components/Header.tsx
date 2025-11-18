import { Link } from "wouter";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <h1 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Portfolio
            </h1>
          </Link>
          
          <nav className="flex items-center gap-6">
            <a
              href="https://x.com"
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
          </nav>
        </div>
      </div>
    </header>
  );
}
