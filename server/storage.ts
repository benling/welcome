import { type BlogPost, type InsertBlogPost, type NewsletterSubscriber, type InsertNewsletterSubscriber } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  subscribeNewsletter(subscriber: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
  getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  getNewsletterSubscribersCount(): Promise<number>;
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
        imageUrl: "/under-construction.svg",
        slug: "aluo-ai-update",
      },
      {
        title: "From Zero to Auto-Tweet: Building a Twitter Bot for Game Platform Updates",
        description: "A complete walkthrough of creating a Twitter Bot for automated posting, from developer account setup to API integration.",
        category: "Development",
        date: "2025/10/20",
        imageUrl: "/under-construction.svg",
        slug: "twitter-bot-automation",
      },
      {
        title: "Two-minute setup: One-click deploy Gost + Clash subscription (SOCKS5)",
        description: "Set up a Gost SOCKS5 proxy with Docker in minutes and publish a Clash subscription via Nginx.",
        category: "Development",
        date: "2025/09/30",
        imageUrl: "/under-construction.svg",
        slug: "socks5",
      },
      {
        title: "Which US State Should You Choose for Company Registration?",
        description: "Detailed comparison of popular registration states like Delaware, Wyoming, and Colorado, helping cross-border entrepreneurs make rational choices for the best incorporation location.",
        category: "Experience",
        date: "2025/09/25",
        imageUrl: "/under-construction.svg",
        slug: "us-state-selection",
      },
      {
        title: "The Inevitable Path of Cross-Border Business: My Journey to Registering an Overseas Company",
        description: "From Stripe payment requirements to US company registration - sharing the complete experience and comparing three registration methods to help cross-border entrepreneurs avoid pitfalls.",
        category: "Experience",
        date: "2025/09/24",
        imageUrl: "/under-construction.svg",
        slug: "overseas-company",
      },
      {
        title: "Personal Plausible Analytics Setup Guide",
        description: "A complete guide on setting up your own Plausible Analytics instance, including server deployment, HTTPS configuration, Nginx reverse proxy setup, and website integration.",
        category: "Development",
        date: "2025/04/23",
        imageUrl: "/under-construction.svg",
        slug: "plausible",
      },
      {
        title: "A Profound Lesson Learned",
        description: "Today, I want to share a story about website optimization and a milestone summary of my journey after 2+ months of going global.",
        category: "SEO",
        date: "2025/03/09",
        imageUrl: "/under-construction.svg",
        slug: "lesson",
      },
      {
        title: "US Company Registration Experience Record",
        description: "Stripe is a leading global online payment processing platform that provides infrastructure for businesses and individuals to receive online payments. As a domestic developer, most would choose Stripe to integrate payments into their websites, and applying for Stripe requires owning an overseas company.",
        category: "Experience",
        date: "2025/01/06",
        imageUrl: "/under-construction.svg",
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

  async getAllNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletterSubscribers.values()).sort((a, b) => {
      return b.subscribedAt.getTime() - a.subscribedAt.getTime();
    });
  }

  async getNewsletterSubscribersCount(): Promise<number> {
    return this.newsletterSubscribers.size;
  }
}

export const storage = new MemStorage();
