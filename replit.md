# Portfolio & Blog Website

## Overview

This is a modern, minimalist personal portfolio and blog website built with React and Express. The application features a clean, content-first design inspired by contemporary portfolio sites, with a focus on readability and user experience. It includes a blog section for publishing articles, a newsletter subscription system, and a responsive design that works across all devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **State Management:** TanStack Query (React Query) for server state
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui (Radix UI primitives with custom styling)
- **Build Tool:** Vite

**Design System:**
The application uses a comprehensive design system based on shadcn/ui's "new-york" style with custom configurations:
- Typography: Inter font family with defined weight hierarchy (400, 600, 700)
- Spacing: Tailwind's 4px-based spacing units
- Color System: HSL-based theming with CSS variables for light/dark mode support
- Component Variants: Extensive use of `class-variance-authority` for consistent component styling

**Key Design Decisions:**
- Content-first approach with generous whitespace and readable typography
- Responsive grid layouts (1 column mobile, 2-3 columns desktop)
- Hover and interaction states with subtle elevation changes
- Card-based UI for blog posts with image previews

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL (via Neon serverless driver)
- **Session Management:** connect-pg-simple (PostgreSQL session store)

**API Structure:**
RESTful API with the following endpoints:
- `GET /api/posts` - Retrieve all blog posts
- `GET /api/posts/:slug` - Retrieve single blog post by slug
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

**Data Models:**
1. **Blog Posts:** Title, description, category, date, image URL, and unique slug
2. **Newsletter Subscribers:** Email address with timestamp

**Storage Strategy:**
The application implements an abstraction layer (`IStorage` interface) that allows switching between different storage implementations:
- In-memory storage with sample data for development
- Database storage (prepared for production use with Drizzle ORM)

This pattern enables easy testing and development without requiring a database connection while maintaining production readiness.

**Validation:**
- Zod schemas generated from Drizzle table definitions using `drizzle-zod`
- Request validation at API endpoints
- Type-safe data handling throughout the stack

### Development Experience

**Build Configuration:**
- Development server with HMR via Vite
- TypeScript strict mode enabled
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)
- Separate build processes for client (Vite) and server (esbuild)

**Code Organization:**
```
client/src/          # Frontend React application
  components/        # Reusable UI components
    ui/             # shadcn/ui component library
  pages/            # Route components
  lib/              # Utilities and query client
  hooks/            # Custom React hooks
server/             # Backend Express application
  routes.ts         # API route definitions
  storage.ts        # Data access layer
shared/             # Shared TypeScript types and schemas
  schema.ts         # Database schema and Zod validators
```

**Development Workflow:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Production build (client + server)
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push schema changes to database

## External Dependencies

### Core Dependencies

**Frontend:**
- `@tanstack/react-query` - Server state management with caching and background updates
- `wouter` - Lightweight routing library
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Form validation integration
- `zod` - Runtime type validation

**UI Components:**
- `@radix-ui/*` - Headless UI component primitives (17+ components including dialogs, dropdowns, tooltips, etc.)
- `tailwindcss` - Utility-first CSS framework
- `class-variance-authority` - Type-safe variant styling
- `clsx` & `tailwind-merge` - Class name utilities
- `lucide-react` - Icon library
- `embla-carousel-react` - Carousel component
- `cmdk` - Command palette component
- `date-fns` - Date formatting utilities

**Backend:**
- `express` - Web application framework
- `drizzle-orm` - TypeScript ORM for SQL databases
- `drizzle-zod` - Zod schema generation from Drizzle tables
- `@neondatabase/serverless` - PostgreSQL serverless driver
- `connect-pg-simple` - PostgreSQL session store for Express

**Build Tools:**
- `vite` - Frontend build tool and dev server
- `@vitejs/plugin-react` - React support for Vite
- `esbuild` - Server bundler for production
- `typescript` - Type system
- `tsx` - TypeScript execution for development

### Database

**PostgreSQL** (via Neon serverless):
- Connection managed through `DATABASE_URL` environment variable
- Schema migrations stored in `./migrations` directory
- Drizzle Kit configured for schema management

**Schema Configuration:**
- Dialect: PostgreSQL
- Auto-generated UUIDs for primary keys
- Timestamp tracking for newsletter subscriptions
- Unique constraints on email addresses and slugs

### Replit-Specific Integrations

- `@replit/vite-plugin-runtime-error-modal` - Error overlay for development
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development environment indicator

### Design Assets

**Fonts:**
- Google Fonts integration for Inter font family
- Preconnect optimization for font loading performance

**Images:**
- Unsplash images used for blog post previews
- Favicon support configured