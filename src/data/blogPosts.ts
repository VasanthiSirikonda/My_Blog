export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing React Performance: 30% Load Time Reduction",
    excerpt: "Learn the techniques I used to reduce page load time by 30% in Verizon's Visible e-commerce platform through React optimization and strategic asset delivery.",
    content: `In my work on Verizon's Visible platform, optimizing React performance was critical for handling millions of users. Here's how we achieved a 30% reduction in page load time.

## The Challenge

The VISIBLE platform handles product listings (PLP), product details (PDP), cart, and payment flows. With complex components and heavy assets, initial load times were impacting user engagement.

## Key Optimization Strategies

### 1. Component-Level Code Splitting
We implemented React.lazy() and Suspense boundaries to split code at the component level:

\`\`\`typescript
const PDP = React.lazy(() => import('./pages/PDP'));
const Cart = React.lazy(() => import('./pages/Cart'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <PDP />
    </Suspense>
  );
}
\`\`\`

### 2. Image Optimization
Using Next.js Image component and WebP format reduced asset size significantly:

\`\`\`typescript
import Image from 'next/image';

<Image 
  src="/product.jpg"
  alt="Product"
  width={400}
  height={400}
  priority={isFold}
/>
\`\`\`

### 3. Memoization & useMemo
Strategic use of React.memo() and useMemo prevented unnecessary re-renders:

\`\`\`typescript
const ProductCard = React.memo(({ product }) => {
  return <div>{product.name}</div>;
}, (prev, next) => prev.product.id === next.product.id);
\`\`\`

### 4. Bundle Analysis
Using webpack-bundle-analyzer identified and removed duplicate dependencies, reducing JavaScript by 40%.

## Results

- **30% reduction** in page load time
- **25% improvement** in Core Web Vitals scores
- **Increased user engagement** across web and mobile

## Tools & Metrics

- Chrome DevTools Performance tab
- Lighthouse audits
- Real User Monitoring (RUM)
- Web Vitals: LCP, FID, CLS

These optimizations not only improved user experience but also positively impacted conversion rates on the platform.`,
    author: "Vasanthi Sirikonda",
    date: "2026-04-15",
    category: "React",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Building Scalable E-Commerce Product Pages with React",
    excerpt: "Insights from building PLP and PDP components for Verizon's Visible platform, handling millions of daily users with responsive design across all devices.",
    content: `Building e-commerce product pages (PLP/PDP) at scale requires more than just displaying products. Here's how we engineered product pages for Verizon's Visible platform that drove a 25% lift in user engagement.

## Architecture Overview

The Product Listing Page (PLP) and Product Detail Page (PDP) are critical conversion points. We designed them with performance, accessibility, and mobile-first principles.

## PLP Architecture

\`\`\`typescript
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  inStock: boolean;
}

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    price: [0, 1000],
    rating: 0
  });

  useEffect(() => {
    fetchProducts(filters).then(setProducts);
  }, [filters]);

  return (
    <div className="plp">
      <Filters onChange={setFilters} />
      <ProductGrid products={products} />
    </div>
  );
};
\`\`\`

## PDP Implementation

Key features of our PDP:

### 1. Responsive Image Gallery
- Thumbnail selection
- Zoom on hover (desktop)
- Swipe gestures (mobile)

### 2. Real-time Inventory
Integrated with backend APIs to show live stock status:

\`\`\`typescript
const InventoryBadge = ({ inStock, quantity }) => {
  return (
    <span className={inStock ? 'in-stock' : 'out-of-stock'}>
      {inStock ? \`Only \${quantity} left!\` : 'Out of Stock'}
    </span>
  );
};
\`\`\`

### 3. Dynamic Pricing & Options
EMI options and discounts rendered based on product data:

\`\`\`typescript
const PricingSection = ({ product }) => {
  return (
    <div>
      <h2>\${product.price}</h2>
      <EMIOptions amount={product.price} />
      <ApplyCoupon />
    </div>
  );
};
\`\`\`

## Cross-Browser & Cross-Device Testing

We validated across:
- Chrome, Safari, Firefox (desktop)
- iOS Safari, Chrome (mobile)
- Pixel and iPhone devices

Using Lighthouse and Web Vitals monitoring to ensure consistent performance.

## Results

- **25% increase** in user engagement
- **Seamless checkout** experience across browsers
- **Mobile-first** design improved mobile conversion rate
- **API integration** for 10+ product data endpoints

Building e-commerce pages taught me the importance of edge cases, real-time data, and cross-device testing.`,
    author: "Vasanthi Sirikonda",
    date: "2026-04-12",
    category: "React",
    readTime: "9 min read"
  },
  {
    id: 3,
    title: "Automating Tests with LLM: Building a Smarter QA Framework",
    excerpt: "How I designed an LLM-powered test generation framework that eliminated 40% of manual QA effort for enterprise teams at Verizon.",
    content: `One of my proudest achievements was designing a test automation framework powered by large language models that reduced manual QA effort by 40% across our team.

## The Problem

Our QA team was spending significant time writing and maintaining unit tests. As features shipped faster, test coverage lagged behind development velocity.

## Solution: LLM-Powered Test Generation

We built a framework that uses LLMs to automatically generate test cases based on code:

### Architecture

\`\`\`typescript
interface TestGenerationConfig {
  model: 'gpt-4' | 'claude' | 'gemini';
  coverage: number; // target coverage percentage
  testFramework: 'jest' | 'vitest';
}

class LLMTestGenerator {
  async generateTests(
    sourceCode: string,
    config: TestGenerationConfig
  ): Promise<string> {
    const prompt = this.buildPrompt(sourceCode, config);
    const tests = await this.callLLM(prompt);
    return this.formatAndValidate(tests);
  }
}
\`\`\`

### Key Features

1. **Code Analysis**
   - Parse AST to understand function signatures
   - Extract dependencies and edge cases

2. **Intelligent Prompt Engineering**
   - Context-aware prompts for better results
   - Include patterns from existing tests

3. **Validation Pipeline**
   - Run generated tests to ensure they pass
   - Check code coverage targets
   - Validate TypeScript compilation

### Example

Input function:

\`\`\`typescript
function calculateDiscount(price: number, percentage: number): number {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Invalid percentage');
  }
  return price * (1 - percentage / 100);
}
\`\`\`

Generated tests:

\`\`\`typescript
describe('calculateDiscount', () => {
  it('should calculate discount correctly', () => {
    expect(calculateDiscount(100, 20)).toBe(80);
  });
  
  it('should throw for negative percentage', () => {
    expect(() => calculateDiscount(100, -10)).toThrow();
  });
  
  it('should throw for percentage > 100', () => {
    expect(() => calculateDiscount(100, 150)).toThrow();
  });
});
\`\`\`

## Results

- **40% reduction** in manual QA effort
- **Higher test coverage** with less maintenance
- **Faster development velocity** with confidence
- **Improved code quality** through systematic testing

## Lessons Learned

1. LLMs are great at generating boilerplate code
2. Always validate AI-generated tests
3. Combine AI with human review for best results
4. Use this for new code, refactor old code manually

This project taught me the power of AI-assisted development and how to intelligently integrate LLMs into engineering workflows.`,
    author: "Vasanthi Sirikonda",
    date: "2026-04-10",
    category: "Testing",
    readTime: "10 min read"
  }
];

export const getPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};
