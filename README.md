# 10 Minute School - IELTS Course Product Page

A modern, responsive product page for the IELTS Course by Munzereen Shahid, built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Features

### Core Requirements ✅

- **React/NextJS with TypeScript** - Modern React with full TypeScript support
- **TailwindCSS** - Utility-first CSS framework for styling
- **API Integration** - Fetches data from 10 Minute School's discovery service
- **Server-Side Rendering (SSR)** - Optimized for SEO and performance
- **Incremental Static Generation (ISR)** - Automatic revalidation every hour
- **Localization** - Support for English (en) and Bengali (bn) languages
- **SEO Optimization** - Comprehensive metadata and structured data

### Product Page Sections ✅

- **Hero Section** - Course title, description, and instructor preview
- **Course Trailer** - YouTube video player with thumbnail gallery
- **Instructors Section** - Detailed instructor profiles and information
- **Features Section** - How the course is laid out
- **Learning Outcomes** - What you will learn from the course
- **Exclusive Features** - Course-specific features and benefits
- **Course Details** - Comprehensive course information
- **Checklist** - Course highlights with pricing (৳1,000 default)
- **Testimonials** - Student reviews and feedback
- **FAQ Section** - Frequently asked questions
- **Engagement Section** - Call-to-action and group features

### Technical Features ✅

- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- **Error Handling** - Graceful error states and loading indicators
- **Performance Optimization** - Image optimization, code splitting, and lazy loading
- **Docker Support** - Containerized deployment with multi-stage builds

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4.1.11
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React, React Icons
- **Package Manager**: pnpm
- **Deployment**: Docker containerization

## 📦 Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd 10minuteschool

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🌐 API Integration

The application integrates with 10 Minute School's discovery service:

```bash
# API Endpoint
GET https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course

# Query Parameters
lang=en|bn

# Headers
X-TENMS-SOURCE-PLATFORM: web
accept: application/json
```

### Example CURL

```bash
curl --request GET \
  --url 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en' \
  --header 'X-TENMS-SOURCE-PLATFORM: web' \
  --header 'accept: application/json'
```

## 🐳 Docker Deployment

### Development Build (Windows Compatible)

```bash
# Build Docker image
docker build -t 10minuteschool-ielts .

# Run container
docker run -p 3000:3000 10minuteschool-ielts
```

### Production Build (Linux Environments)

```bash
# Build with standalone output for smaller image size
docker build -f Dockerfile.prod -t 10minuteschool-ielts-prod .

# Run container
docker run -p 3000:3000 10minuteschool-ielts-prod
```

### Docker Compose

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

## 🔧 Build Configuration

### Windows Compatibility

The project is configured to work seamlessly on Windows systems by avoiding symlink issues that can occur with the `standalone` output option. For production deployments on Linux environments, use `Dockerfile.prod`.

### Next.js Configuration

- **Experimental Features** - Package import optimization for better performance
- **Image Optimization** - Configured for remote domains
- **Build Optimization** - TypeScript and ESLint checks disabled for faster builds

## 📁 Project Structure

```
10minuteschool/
├── app/                    # Next.js App Router
│   ├── [lang]/            # Dynamic language routing
│   │   ├── layout.tsx     # Layout with SEO metadata
│   │   └── page.tsx       # Main product page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── *.tsx            # Feature-specific components
├── lib/                  # Utility functions
│   ├── action/           # Server actions
│   └── seo.ts           # SEO utilities
├── types/               # TypeScript type definitions
├── public/              # Static assets
├── Dockerfile           # Development Docker configuration
├── Dockerfile.prod      # Production Docker configuration
└── .dockerignore        # Docker build exclusions
```

## 🎨 Component Architecture

### Core Components

- **Hero** - Main course introduction with video gallery
- **Gallery** - YouTube video player with thumbnail navigation
- **Checklist** - Course highlights and pricing
- **InstructorsSection** - Instructor profiles
- **FeaturesSection** - Course layout and features
- **LearningOutcomesSection** - Learning objectives
- **CourseDetailsSection** - Detailed course information
- **ExclusiveFeaturesSection** - Course-specific benefits
- **TestimonialsSection** - Student reviews
- **FAQSection** - Frequently asked questions
- **EngagementSection** - Call-to-action elements
- **ErrorDisplay** - Error handling component
- **LoadingSpinner** - Loading state component

## 🔧 Configuration

### Environment Variables

```env
# Optional: Override API URL for development
NEXT_PUBLIC_API_BASE_URL=https://api.10minuteschool.com
```

### Next.js Configuration

- **Experimental Features** - Package import optimization
- **Image Optimization** - Configured for remote domains
- **Build Optimization** - Optimized for development and production

## 🚀 Performance Features

- **ISR (Incremental Static Generation)** - 1-hour revalidation
- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic component-level code splitting
- **Bundle Optimization** - Tree shaking and dead code elimination
- **Caching** - HTTP caching headers and browser caching

## 📱 Responsive Design

- **Mobile First** - Optimized for mobile devices
- **Breakpoints** - sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly** - Optimized touch targets and interactions
- **Progressive Enhancement** - Works without JavaScript

## ♿ Accessibility

- **ARIA Labels** - Proper labeling for screen readers
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy and landmarks
- **Color Contrast** - WCAG AA compliant color combinations

## 🔍 SEO Features

- **Dynamic Metadata** - Server-side generated meta tags
- **Structured Data** - JSON-LD schema markup
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter-specific meta tags
- **Canonical URLs** - Proper canonical link tags
- **Language Alternates** - Hreflang tags for localization

## 🧪 Testing

```bash
# Run linting
pnpm lint

# Type checking
pnpm type-check

# Build verification
pnpm build
```

## 📈 Monitoring and Analytics

The application is ready for integration with:

- **Google Analytics** - Add GA4 tracking
- **Error Monitoring** - Sentry or similar services
- **Performance Monitoring** - Core Web Vitals tracking
- **User Analytics** - Heatmaps and user behavior tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is part of the 10 Minute School Frontend Engineer assessment.

## 🆘 Support

For technical support or questions about this implementation, please refer to the assessment guidelines or contact the development team.

---

**Built with ❤️ for 10 Minute School**
