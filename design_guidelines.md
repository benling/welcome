# Design Guidelines: Personal Portfolio & Blog Website

## Design Approach
**Reference-Based Design** inspired by ivanvolt.com with influences from modern minimalist portfolios

**Core Principles:**
- Minimalist restraint with purposeful whitespace
- Content-first hierarchy
- Clean, readable typography
- Subtle interactions and transitions

---

## Typography System

**Font Stack:**
- Primary: Inter or similar geometric sans-serif (Google Fonts)
- Weights: 400 (regular), 600 (semibold), 700 (bold)

**Hierarchy:**
- Hero Title: text-4xl md:text-5xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Blog Post Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg
- Metadata (dates/categories): text-sm, font-medium
- Footer/Small Text: text-xs md:text-sm

---

## Layout System

**Spacing Units:** Tailwind primitives of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4 to p-8
- Section spacing: py-12 md:py-20
- Grid gaps: gap-6 md:gap-8

**Container Strategy:**
- Max width: max-w-6xl mx-auto
- Horizontal padding: px-4 md:px-8
- Blog content: max-w-4xl for optimal readability

---

## Page Structure & Components

### 1. Header/Navigation
- Fixed/sticky header with logo (left) and navigation links (right)
- Logo: Simple text or dark logo image (height: h-8)
- Nav links: Social media (X/Twitter), "Blog" link
- Clean, minimal design with py-4 spacing
- Links with subtle hover underline effect

### 2. Hero Section
- **No large hero image** - text-focused introduction
- Centered or left-aligned content area
- Greeting: "Hi, I am [Name]" in large, bold typography
- Tagline/description: 2-3 lines explaining expertise and focus
- Primary CTAs: Social media link button + Blog link button
- Height: Natural content height with py-16 md:py-24
- Optional: Small avatar/profile image (rounded-full, w-16 h-16)

### 3. Blog Posts Grid
- Grid layout: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card includes:
  - Featured image (aspect-ratio-16/9, rounded corners)
  - Category tag (small pill/badge)
  - Post title (bold, 2-line clamp)
  - Excerpt/description (3-line clamp)
  - Date (formatted, subtle styling)
- Cards: Subtle border, rounded-lg, hover lift effect (transform scale)
- Spacing: gap-6 md:gap-8

### 4. Newsletter Section
- Simple, centered layout
- Section title: "Newsletter" or "Join the community"
- Description text: Single line explaining value
- Email input + Subscribe button (inline form)
- Form: Rounded input with border, button adjacent
- Contained width: max-w-md mx-auto

### 5. Footer
- Minimal design with py-8
- Copyright notice
- Optional: Additional social links, navigation links
- Centered or left-aligned text

---

## Component Details

**Blog Post Cards:**
- White/light card background with subtle border
- Image: Full-width, rounded top corners
- Content padding: p-6
- Category badge: Rounded-full px-3 py-1, small text
- Title: Clickable, hover underline
- Date format: "2025/01/06" style

**Buttons:**
- Primary: Solid background, rounded-md, px-6 py-3
- Secondary: Border/outline style
- Hover: Subtle brightness/opacity change
- No elaborate animations

**Form Inputs:**
- Single-line border, rounded-md
- Padding: px-4 py-2
- Focus: Enhanced border visibility
- Email input: type="email", placeholder="Email"

**Links:**
- Underline on hover (decoration-2)
- Smooth transition (transition-all duration-200)

---

## Images

**Blog Post Thumbnails:**
- Aspect ratio: 16:9
- Placement: Top of each blog card
- Style: Cover images with rounded top corners
- Description: Representative images for blog topics (tech, business, development)

**Logo:**
- Placement: Top-left header
- Description: Simple text logo or minimal graphic mark
- Size: Height ~32px (h-8)

**No large hero background image** - This design uses text-first approach

---

## Responsive Behavior

**Mobile (base):**
- Single column layout
- Full-width cards
- Stacked navigation if needed
- Reduced vertical spacing (py-12)

**Tablet (md:):**
- 2-column blog grid
- Increased spacing (py-16)

**Desktop (lg:):**
- 3-column blog grid
- Maximum spacing (py-20)
- Optimal reading widths maintained

---

## Interactive Elements

**Minimal Animations:**
- Card hover: Subtle scale (scale-105) and shadow increase
- Link hover: Underline appearance
- Button hover: Slight opacity/brightness change
- All transitions: duration-200 to duration-300

**No Distracting Effects:**
- Avoid parallax scrolling
- No elaborate scroll-triggered animations
- Keep interactions purposeful and subtle

---

## Icon Library
Use **Heroicons** via CDN for any needed icons (social media, decorative elements)