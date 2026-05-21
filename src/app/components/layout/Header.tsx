import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { Search, Heart, User, ShoppingCart, ChevronDown, Menu, X as XIcon, Leaf, Apple, Droplet, Sparkles, Package, Gift, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [cartCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Pickles', slug: 'pickles', icon: Apple },
    { name: 'Murabba', slug: 'murabba', icon: Sparkles },
    { name: 'Juices', slug: 'juices', icon: Package },
    { name: 'Organic Powders', slug: 'organic-powders', icon: Leaf },
    { name: 'Honey', slug: 'honey', icon: Droplet },
    { name: 'Seasonal Products', slug: 'seasonal', icon: Leaf },
    { name: 'Best Sellers', slug: 'best-sellers', icon: Star },
    { name: 'Gift Boxes', slug: 'gift-boxes', icon: Gift },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
        WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(8px)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-xl flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Leaf className="w-6 h-6 text-white" strokeWidth={2.5} />
            </motion.div>
            <span className="text-xl md:text-2xl font-serif text-[#2a2a2a] link-underline">
              Organic Farm Fresh
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Home
            </Link>
            <Link to="/products" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              All Products
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsCategoriesOpen(true)}
              onMouseLeave={() => setIsCategoriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-colors">
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isCategoriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass-card rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-white/30 overflow-hidden min-w-[800px]"
                    style={{
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                    }}
                  >
                    <div className="grid grid-cols-4 gap-1 p-6">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          to={`/category/${category.slug}`}
                          className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-[#f5f0e8] transition-all duration-300 group"
                        >
                          <motion.div
                            className="w-14 h-14 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl flex items-center justify-center"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            <category.icon className="w-7 h-7 text-white" strokeWidth={2} />
                          </motion.div>
                          <span className="text-sm font-medium text-[#2a2a2a] text-center">{category.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link to="/our-story" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Our Story
            </Link>
            <Link to="/blog" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Blog
            </Link>
            <Link to="/contact" className="text-[#2a2a2a] hover:text-[#4a6741] font-medium transition-all duration-300 hover:scale-105 link-underline">
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <motion.button
              onClick={() => navigate('/search')}
              className="p-2 md:p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5 text-[#2a2a2a]" />
            </motion.button>
            <motion.button
              className="hidden md:block p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="w-5 h-5 text-[#2a2a2a]" />
            </motion.button>
            <Link to="/login" className="hidden md:block">
              <motion.div
                className="p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-5 h-5 text-[#2a2a2a]" />
              </motion.div>
            </Link>
            <Link to="/cart" className="relative">
              <motion.div
                className="p-2 md:p-2.5 rounded-full hover:bg-[#f5f0e8] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingCart className="w-5 h-5 text-[#2a2a2a]" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-[#1c3a2b] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-[#f5f0e8] transition-colors"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-[rgba(139,125,107,0.1)]"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                All Products
              </Link>
              <div>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="flex items-center justify-between w-full text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
                >
                  Categories
                  <ChevronDown className={`w-4 h-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isCategoriesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/category/${category.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-[#6b6560] hover:text-[#4a6741] py-2 px-2 rounded-lg hover:bg-[#f5f0e8] transition-all"
                      >
                        <div className="w-6 h-6 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-lg flex items-center justify-center">
                          <category.icon className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                        </div>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/our-story"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Our Story
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2"
              >
                Contact
              </Link>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#2a2a2a] hover:text-[#4a6741] font-medium py-2 border-t border-[rgba(139,125,107,0.1)] mt-2 pt-4"
              >
                <User className="w-5 h-5 inline mr-2" />
                Login / Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
