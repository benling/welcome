import { type BlogPost, type InsertBlogPost, type NewsletterSubscriber, type InsertNewsletterSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  subscribeNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
}

export class MemStorage implements IStorage {
  private blogPosts: Map<string, BlogPost>;
  private newsletterSubscribers: Map<string, NewsletterSubscriber>;

  constructor() {
    this.blogPosts = new Map();
    this.newsletterSubscribers = new Map();
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const samplePosts: InsertBlogPost[] = [
      {
        title: "Aluo AI Major Update: Smart Editor Enhanced, AI Assistant Now Live",
        description: "Aluo AI welcomes its biggest update ever: online editor supports multi-element operations, AI Assistant generates images through conversation, background removal precision enhanced, and product image generation speed increased 3x.",
        category: "Product",
        date: "2025/11/10",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
        slug: "aluo-ai-update",
      },
      {
        title: "From Zero to Auto-Tweet: Building a Twitter Bot for Game Platform Updates",
        description: "A complete walkthrough of creating a Twitter Bot for automated posting, from developer account setup to API integration.",
        category: "Development",
        date: "2025/10/20",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
        slug: "twitter-bot-automation",
      },
      {
        title: "Two-minute setup: One-click deploy Gost + Clash subscription (SOCKS5)",
        description: "Set up a Gost SOCKS5 proxy with Docker in minutes and publish a Clash subscription via Nginx.",
        category: "Development",
        date: "2025/09/30",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        slug: "socks5",
      },
      {
        title: "Which US State Should You Choose for Company Registration?",
        description: "Detailed comparison of popular registration states like Delaware, Wyoming, and Colorado, helping cross-border entrepreneurs make rational choices for the best incorporation location.",
        category: "Experience",
        date: "2025/09/25",
        imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop",
        slug: "us-state-selection",
      },
      {
        title: "The Inevitable Path of Cross-Border Business: My Journey to Registering an Overseas Company",
        description: "From Stripe payment requirements to US company registration - sharing the complete experience and comparing three registration methods to help cross-border entrepreneurs avoid pitfalls.",
        category: "Experience",
        date: "2025/09/24",
        imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
        slug: "overseas-company",
      },
      {
        title: "Personal Plausible Analytics Setup Guide",
        description: "A complete guide on setting up your own Plausible Analytics instance, including server deployment, HTTPS configuration, Nginx reverse proxy setup, and website integration.",
        category: "Development",
        date: "2025/04/23",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        slug: "plausible",
      },
      {
        title: "A Profound Lesson Learned",
        description: "Today, I want to share a story about website optimization and a milestone summary of my journey after 2+ months of going global.",
        category: "SEO",
        date: "2025/03/09",
        imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop",
        slug: "lesson",
      },
      {
        title: "US Company Registration Experience Record",
        description: "Stripe is a leading global online payment processing platform that provides infrastructure for businesses and individuals to receive online payments. As a domestic developer, most would choose Stripe to integrate payments into their websites, and applying for Stripe requires owning an overseas company.",
        category: "Experience",
        date: "2025/01/06",
        imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop",
        slug: "us-company",
      },
    ];

    samplePosts.forEach((post) => {
      const id = randomUUID();
      const blogPost: BlogPost = { ...post, id };
      this.blogPosts.set(id, blogPost);
    });
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => {
      const dateA = new Date(a.date.replace(/\//g, '-'));
      const dateB = new Date(b.date.replace(/\//g, '-'));
      return dateB.getTime() - dateA.getTime();
    });
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find((post) => post.slug === slug);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { ...insertPost, id };
    this.blogPosts.set(id, post);
    return post;
  }

  async subscribeNewsletter(insertSubscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = randomUUID();
    const subscriber: NewsletterSubscriber = {
      ...insertSubscriber,
      id,
      subscribedAt: new Date(),
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }

  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === email,
    );
  }
}

export const storage = new MemStorage();
