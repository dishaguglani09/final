import { useState } from 'react';
import { Link } from 'react-router';
import { Search, Star, Filter, Apple, Sparkles, Cherry, Citrus } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';
import { RippleButton } from '../components/effects/RippleButton';

export function SearchResultsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = [
    { id: 1, name: 'Himalayan Mango Pickle', slug: 'himalayan-mango-pickle', category: 'Pickles', price: 349, icon: Apple, rating: 4.8, reviews: 124 },
    { id: 2, name: 'Mixed Fruit Murabba', slug: 'mixed-fruit-murabba', category: 'Murabba', price: 299, icon: Sparkles, rating: 4.7, reviews: 156 },
    { id: 3, name: 'Amla Juice', slug: 'amla-juice', category: 'Juices', price: 249, icon: Cherry, rating: 4.6, reviews: 98 },
    { id: 4, name: 'Lemon Pickle', slug: 'lemon-pickle', category: 'Pickles', price: 299, icon: Citrus, rating: 4.7, reviews: 142 },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-[#6b6560]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products, categories, recipes..."
              className="w-full pl-16 pr-6 py-5 rounded-full border-2 border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b] text-lg"
              autoFocus
            />
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl text-[#2a2a2a] mb-2">Search Results</h1>
            <p className="text-[#6b6560]">Found {searchResults.length} products</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(139,125,107,0.2)] hover:bg-[#f5f0e8] transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Results Grid */}
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {searchResults.map(product => (
              <TiltCard key={product.id} tiltIntensity={10} scaleIntensity={1.03} shadowIntensity={0.25}>
                <Link
                  to={`/product/${product.slug}`}
                  className="group block"
                >
                  <motion.div
                    className="glass-card rounded-3xl overflow-hidden shadow-lg"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-[#4a6741] to-[#5a7851] flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#d4a533]/20 to-transparent"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <product.icon className="w-24 h-24 text-white/90 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-[#f5f0e8] text-[#4a6741] rounded-full text-xs font-semibold mb-3">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">{product.name}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-[#6b6560]">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-[#1c3a2b]">₹{product.price}</span>
                        <RippleButton
                          className="px-6 py-3 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full text-sm font-semibold transition-all duration-500 shadow-lg hover:shadow-xl"
                          onClick={(e: React.MouseEvent) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Added to cart:', product.name);
                          }}
                        >
                          Add to Cart
                        </RippleButton>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </TiltCard>
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-16 text-center shadow-xl">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl flex items-center justify-center">
              <Search className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-[#2a2a2a] mb-4">No results found</h2>
            <p className="text-[#6b6560] mb-8">Try adjusting your search terms or browse our categories</p>
            <Link to="/products">
              <RippleButton className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                Browse All Products
              </RippleButton>
            </Link>
          </div>
        )}

        {/* Popular Searches */}
        <div className="mt-16">
          <h2 className="font-semibold text-xl text-[#2a2a2a] mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-3">
            {['Mango Pickle', 'Organic Honey', 'Amla Juice', 'Mixed Murabba', 'Lemon Pickle'].map(term => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-6 py-3 bg-white hover:bg-[#f5f0e8] rounded-full text-[#2a2a2a] font-medium transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
