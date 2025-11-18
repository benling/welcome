import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { BlogPostCard } from "./BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";

export function BlogGrid() {
  const { data: posts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/posts"],
  });

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="w-full aspect-video rounded-lg" />
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-foreground mb-2">No blog posts yet</h3>
            <p className="text-muted-foreground">Check back soon for new content!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-12 md:py-20 bg-background" data-testid="section-blog">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          data-testid="grid-blog-posts"
        >
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
