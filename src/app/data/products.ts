import { Apple, Droplet, Sparkles, Package, Citrus, Cherry, Cookie, Gift, Leaf, Mountain } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  originalPrice?: number;
  icon: LucideIcon;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  nutritionFacts: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Himalayan Mango Pickle',
    slug: 'himalayan-mango-pickle',
    category: 'pickles',
    price: 349,
    originalPrice: 449,
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1562346816-9d0bdd559ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: 'Best Seller',
    description: 'Our Himalayan Mango Pickle is crafted using traditional recipes passed down through generations. Made with hand-picked organic mangoes from the valleys of Uttarakhand, each jar is a burst of authentic flavors.',
    ingredients: ['Organic Mangoes', 'Mustard Oil', 'Red Chili', 'Turmeric', 'Fenugreek', 'Himalayan Salt'],
    benefits: [
      'Rich in Vitamin C and antioxidants',
      'Aids digestion',
      'Boosts immunity',
      'No preservatives or artificial colors',
      'Traditional cold-pressed mustard oil',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '50g' },
      { label: 'Calories', value: '120' },
      { label: 'Total Fat', value: '8g' },
      { label: 'Sodium', value: '450mg' },
      { label: 'Carbohydrates', value: '10g' },
      { label: 'Protein', value: '2g' },
    ],
  },
  {
    id: 2,
    name: 'Organic Honey',
    slug: 'organic-honey',
    category: 'honey',
    price: 499,
    originalPrice: 599,
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1773957949171-8ccca4580bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.9,
    reviews: 89,
    inStock: true,
    badge: 'Premium',
    description: 'Pure, raw honey harvested from pristine Himalayan forests. Our organic honey is unprocessed and unpasteurized, retaining all natural enzymes, vitamins, and minerals. A golden elixir of health and taste.',
    ingredients: ['100% Pure Organic Honey'],
    benefits: [
      'Natural energy booster',
      'Rich in antioxidants',
      'Antibacterial properties',
      'Soothes sore throat',
      'No additives or preservatives',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '20g' },
      { label: 'Calories', value: '64' },
      { label: 'Total Carbohydrates', value: '17g' },
      { label: 'Sugars', value: '16g' },
      { label: 'Protein', value: '0.1g' },
      { label: 'Sodium', value: '1mg' },
    ],
  },
  {
    id: 3,
    name: 'Mixed Fruit Murabba',
    slug: 'mixed-fruit-murabba',
    category: 'murabba',
    price: 299,
    originalPrice: 399,
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1667653052149-f4cdc800e9f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    badge: 'New',
    description: 'Sweet fruit preserves crafted with mountain-fresh fruits and pure organic honey. A delightful blend of traditional taste and natural goodness, perfect for breakfast or as a healthy dessert.',
    ingredients: ['Organic Mixed Fruits', 'Organic Honey', 'Cardamom', 'Saffron', 'Natural Spices'],
    benefits: [
      'Rich in vitamins and minerals',
      'Natural fruit sugars',
      'Aids digestion',
      'Boosts energy',
      'Traditional Ayurvedic preparation',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '30g' },
      { label: 'Calories', value: '85' },
      { label: 'Total Fat', value: '0.2g' },
      { label: 'Carbohydrates', value: '21g' },
      { label: 'Protein', value: '0.5g' },
      { label: 'Fiber', value: '1.5g' },
    ],
  },
  {
    id: 4,
    name: 'Amla Juice',
    slug: 'amla-juice',
    category: 'juices',
    price: 249,
    originalPrice: 299,
    icon: Package,
    image: 'https://images.unsplash.com/photo-1759006249055-8c4030a2d56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.6,
    reviews: 98,
    inStock: true,
    badge: 'Trending',
    description: 'Cold-pressed organic Amla juice packed with natural goodness and no added sugar. Rich in Vitamin C, this potent immunity booster is made from fresh Himalayan gooseberries.',
    ingredients: ['Organic Amla (Indian Gooseberry)', 'Citric Acid (Natural)', 'Water'],
    benefits: [
      'Highest natural source of Vitamin C',
      'Boosts immunity',
      'Improves digestion',
      'Promotes hair health',
      'Detoxifies the body',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '30ml' },
      { label: 'Calories', value: '15' },
      { label: 'Vitamin C', value: '600mg' },
      { label: 'Carbohydrates', value: '3.5g' },
      { label: 'Protein', value: '0.3g' },
      { label: 'Sodium', value: '2mg' },
    ],
  },
  {
    id: 5,
    name: 'Lemon Pickle',
    slug: 'lemon-pickle',
    category: 'pickles',
    price: 299,
    originalPrice: 349,
    icon: Citrus,
    image: 'https://images.unsplash.com/photo-1613271596363-4fb96ef16eac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.7,
    reviews: 142,
    inStock: true,
    description: 'Tangy and spicy lemon pickle made with organic lemons and traditional spices. A perfect accompaniment to any meal, prepared using age-old family recipes.',
    ingredients: ['Organic Lemons', 'Mustard Oil', 'Turmeric', 'Red Chili', 'Fenugreek', 'Salt'],
    benefits: [
      'Rich in Vitamin C',
      'Aids digestion',
      'Antibacterial properties',
      'Natural probiotics',
      'Traditional preparation method',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '40g' },
      { label: 'Calories', value: '95' },
      { label: 'Total Fat', value: '6g' },
      { label: 'Sodium', value: '520mg' },
      { label: 'Carbohydrates', value: '8g' },
      { label: 'Protein', value: '1.5g' },
    ],
  },
  {
    id: 6,
    name: 'Mixed Pickle',
    slug: 'mixed-pickle',
    category: 'pickles',
    price: 349,
    originalPrice: 449,
    icon: Cherry,
    image: 'https://images.unsplash.com/photo-1617854307432-13950e24ba07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.8,
    reviews: 93,
    inStock: true,
    description: 'A flavorful blend of seasonal vegetables pickled to perfection. This mixed pickle combines the goodness of multiple vegetables in one jar, prepared with premium organic ingredients.',
    ingredients: ['Organic Mixed Vegetables', 'Mustard Oil', 'Spices', 'Vinegar', 'Salt'],
    benefits: [
      'Rich in probiotics',
      'Improves gut health',
      'Multiple vegetable benefits',
      'Enhances flavor',
      'Traditional fermentation',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '45g' },
      { label: 'Calories', value: '110' },
      { label: 'Total Fat', value: '7g' },
      { label: 'Sodium', value: '480mg' },
      { label: 'Carbohydrates', value: '9g' },
      { label: 'Protein', value: '2g' },
    ],
  },
  {
    id: 7,
    name: 'Garlic Pickle',
    slug: 'garlic-pickle',
    category: 'pickles',
    price: 329,
    originalPrice: 399,
    icon: Cookie,
    image: 'https://images.unsplash.com/photo-1512389238664-e68d7988ebac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.6,
    reviews: 67,
    inStock: true,
    description: 'Aromatic garlic pickle with health-boosting properties. Made from fresh Himalayan garlic cloves, this pickle is both delicious and medicinal.',
    ingredients: ['Organic Garlic', 'Mustard Oil', 'Red Chili', 'Turmeric', 'Fenugreek', 'Salt'],
    benefits: [
      'Boosts immunity',
      'Cardiovascular health',
      'Anti-inflammatory',
      'Rich in antioxidants',
      'Natural antibiotic',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '35g' },
      { label: 'Calories', value: '88' },
      { label: 'Total Fat', value: '5g' },
      { label: 'Sodium', value: '450mg' },
      { label: 'Carbohydrates', value: '7g' },
      { label: 'Protein', value: '2g' },
    ],
  },
  {
    id: 8,
    name: 'Forest Honey',
    slug: 'forest-honey',
    category: 'honey',
    price: 649,
    originalPrice: 799,
    icon: Droplet,
    image: 'https://images.unsplash.com/photo-1773957949199-bc3aa74850ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    rating: 4.9,
    reviews: 67,
    inStock: false,
    badge: 'Premium',
    description: 'Rare forest honey collected from wild bee colonies in deep Himalayan forests. This exceptional honey has a unique flavor profile and exceptional medicinal properties.',
    ingredients: ['100% Pure Wild Forest Honey'],
    benefits: [
      'Rare and unique flavor',
      'Exceptional antioxidant content',
      'Antibacterial properties',
      'Boosts immunity',
      'Wild harvested',
    ],
    nutritionFacts: [
      { label: 'Serving Size', value: '20g' },
      { label: 'Calories', value: '68' },
      { label: 'Total Carbohydrates', value: '18g' },
      { label: 'Sugars', value: '17g' },
      { label: 'Protein', value: '0.2g' },
      { label: 'Sodium', value: '0mg' },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getRelatedProducts(currentProductId: number, limit: number = 3): Product[] {
  return products
    .filter(product => product.id !== currentProductId && product.inStock)
    .slice(0, limit);
}
