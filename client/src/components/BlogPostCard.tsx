import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card 
      className="overflow-hidden border border-card-border hover-elevate active-elevate-2 transition-all duration-200 group"
      data-testid={`card-post-${post.id}`}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`img-post-${post.id}`}
        />
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <Badge 
            variant="secondary" 
            className="text-xs font-medium"
            data-testid={`badge-category-${post.id}`}
          >
            {post.category}
          </Badge>
        </div>
        
        <h3 
          className="text-xl md:text-2xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors"
          data-testid={`text-title-${post.id}`}
        >
          {post.title}
        </h3>
        
        <p 
          className="text-sm md:text-base text-muted-foreground line-clamp-3 mb-4"
          data-testid={`text-description-${post.id}`}
        >
          {post.description}
        </p>
        
        <time 
          className="text-xs md:text-sm text-muted-foreground font-medium"
          data-testid={`text-date-${post.id}`}
        >
          {post.date}
        </time>
      </div>
    </Card>
  );
}
