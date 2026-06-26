export interface Product {
  id: number;
  title: string;
  status: 'active' | 'coming_soon';
  price: string;
  originalPrice?: string;
  discount?: string;
  description: string;
  badge: string;
  rating: number;
  reviewsCount: number;
  productType: 'canva_monthly' | 'canva_yearly' | 'canva_advance' | 'office_lifetime'; // Extended union type
  period: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Canva Premium - Monthly Plan",
    status: "active",
    price: "89",
    originalPrice: "499",
    discount: "82% OFF",
    description: "Perfect for short-term projects. Full premium access, premium template ecosystem, and secure prompt activation.",
    badge: "Hot Deal",
    rating: 4.8,
    reviewsCount: 342,
    productType: 'canva_monthly',
    period: "month",
    image: "/products/Monthly.avif"
  },
  {
    id: 2,
    title: "Canva Premium - Yearly Plan",
    status: "active",
    price: "259",
    originalPrice: "1499",
    discount: "82% OFF",
    description: "The sweet spot for continuous workflows. Priority channel access, accelerated automated deployment, and massive cost savings.",
    badge: "Most Popular",
    rating: 4.9,
    reviewsCount: 1248,
    productType: 'canva_yearly',
    period: "year",
    image: "/products/Yearly.avif"
  },
  {
    id: 3,
    title: "Canva Premium - Advance Plan",
    status: "active",
    price: "599",
    originalPrice: "2999",
    discount: "80% OFF",
    description: "Ultimate configuration for power users. Unlocks Brand Kits, full AI Magic Studio suite, internal workspace, and premium Canva templates.",
    badge: "Best Value",
    rating: 5.0,
    reviewsCount: 512,
    productType: 'canva_advance',
    period: "lifetime",
    image: "/products/Advance.avif"
  },
  {
    id: 4,
    title: "Office 365 - Lifetime Plan",
    status: "active",
    price: "649",
    description: "Full cloud productivity suite featuring premium desktop apps, massive secure cloud storage architectures, and seamless multi-device continuous synchronization.",
    badge: "Best Value",
    rating: 5.0,
    reviewsCount: 496,
    productType: 'office_lifetime',
    period: "lifetime",
    image: "/products/office365.avif"
  }
];