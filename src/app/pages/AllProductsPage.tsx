import { useState } from 'react';
import { Link } from 'react-router';
import { SlidersHorizontal, Star, Grid3x3, List, Heart, ShoppingCart, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { StaggerChildren, StaggerItem } from '../components/animations/StaggerChildren';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products as allProducts } from '../data/products';

export function AllProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');

  const products = allProducts;

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'pickles', name: 'Pickles', count: products.filter(p => p.category === 'pickles').length },
    { id: 'murabba', name: 'Murabba', count: products.filter(p => p.category === 'murabba').length },
    { id: 'juices', name: 'Juices', count: products.filter(p => p.category === 'juices').length },
    { id: 'honey', name: 'Honey', count: products.filter(p => p.category === 'honey').length },
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Organic spices"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/85 to-[#0d1f18]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.35)] backdrop-blur-sm mb-5">
            <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
            <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">Organic Collection</span>
          </div>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-3">All Products</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our complete range of organic products from the Himalayas
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-[#2a2a2a] mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#1c3a2b] text-white'
                          : 'hover:bg-[#f5f0e8] text-[#2a2a2a]'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className={`text-sm ${selectedCategory === category.id ? 'text-white/70' : 'text-[#6b6560]'}`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-[#2a2a2a] mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-[#6b6560]">
                    <span>₹0</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-[#2a2a2a] mb-4">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-[#6b6560]" />
                  <span className="text-[#2a2a2a]">In Stock Only</span>
                </label>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg text-[#2a2a2a] mb-4">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded border-[#6b6560]" />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < rating ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-[#6b6560] ml-1">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#6b6560]">Showing</span>
                <span className="font-semibold text-[#2a2a2a]">{filteredProducts.length}</span>
                <span className="text-[#6b6560]">products</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#6b6560]">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-[#1c3a2b] text-white' : 'bg-[#f5f0e8] text-[#2a2a2a]'}`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-[#1c3a2b] text-white' : 'bg-[#f5f0e8] text-[#2a2a2a]'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            <StaggerChildren className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredProducts.map(product => (
                <StaggerItem key={product.id}>
                  <Link
                    to={`/product/${product.slug}`}
                    className="group block"
                  >
                    <motion.div
                      className={`bg-white rounded-2xl overflow-hidden border border-[rgba(0,0,0,0.06)] transition-all shadow-sm hover:shadow-xl ${viewMode === 'list' ? 'flex' : ''}`}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    >
                      <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'aspect-[4/3]' : 'w-44 shrink-0'}`}>
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-20">
                            <span className="text-white font-semibold text-sm">Out of Stock</span>
                          </div>
                        )}
                        {product.badge && (
                          <div className="absolute top-2 left-2 px-2.5 py-1 bg-[#1c3a2b] text-white text-xs font-semibold rounded-full">
                            {product.badge}
                          </div>
                        )}
                        <motion.button
                          className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        >
                          <Heart className="w-3.5 h-3.5 text-[#6b6560]" />
                        </motion.button>
                      </div>
                    <div className="p-5 flex-1">
                      <h3 className="font-semibold text-[#1c2a1f] mb-1.5 leading-snug">{product.name}</h3>
                      <div className="flex items-center gap-1.5 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-[#FFB900] text-[#FFB900]' : 'text-gray-200 fill-gray-200'}`} />
                          ))}
                        </div>
                        <span className="text-xs text-[#9b9590]">({product.reviews})</span>
                      </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-bold text-[#1c3a2b]" style={{ fontSize: '1.1rem' }}>₹{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-xs text-[#9b9590] line-through ml-1.5">₹{product.originalPrice}</span>
                            )}
                          </div>
                          <motion.button
                            disabled={!product.inStock}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full text-xs font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                            whileHover={{ scale: product.inStock ? 1.04 : 1 }}
                            whileTap={{ scale: product.inStock ? 0.96 : 1 }}
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Add
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-[rgba(139,125,107,0.2)] hover:bg-[#f5f0e8] transition-colors">
                Previous
              </button>
              {[1, 2, 3, 4].map(page => (
                <button
                  key={page}
                  className={`w-10 h-10 rounded-lg ${
                    page === 1 ? 'bg-[#1c3a2b] text-white' : 'border border-[rgba(139,125,107,0.2)] hover:bg-[#f5f0e8]'
                  } transition-colors`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 rounded-lg border border-[rgba(139,125,107,0.2)] hover:bg-[#f5f0e8] transition-colors">
                Next
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
