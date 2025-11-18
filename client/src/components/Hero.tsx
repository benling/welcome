import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hi, I am <span className="text-primary">Ivanvolt</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            I'm a backend engineer focusing on server-side architecture, performance optimization, and reliability. 
            I'm also continuously learning SEO and hope to make progress together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hero-twitter"
              >
                Follow me on X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#blog" data-testid="link-hero-blog">
                Read my blog
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
