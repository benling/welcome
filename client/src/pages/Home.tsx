import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BlogGrid } from "@/components/BlogGrid";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <BlogGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
