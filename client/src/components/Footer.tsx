export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 21 Century Tech LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
