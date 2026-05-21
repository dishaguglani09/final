import { useState } from 'react';
import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Apple, Droplet, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';

export function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Himalayan Mango Pickle', price: 349, quantity: 2, icon: Apple },
    { id: 2, name: 'Organic Honey', price: 499, quantity: 1, icon: Droplet },
    { id: 3, name: 'Mixed Fruit Murabba', price: 299, quantity: 1, icon: Sparkles },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 999 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#fafaf8] py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-[#2a2a2a] mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="glass-card rounded-3xl p-16 text-center shadow-xl">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-[#2a2a2a] mb-4">Your cart is empty</h2>
            <p className="text-[#6b6560] mb-8">Add some organic goodness to your cart!</p>
            <GlowEffect glowColor="#1c3a2b" intensity={30}>
              <Link to="/products">
                <RippleButton className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                  <ShoppingBag className="w-5 h-5" />
                  Start Shopping
                </RippleButton>
              </Link>
            </GlowEffect>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map(item => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="bg-white rounded-2xl p-6 flex items-center gap-6"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative shadow-lg">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#d4a533]/20 to-transparent"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <item.icon className="w-12 h-12 text-white/90 relative z-10" strokeWidth={1.5} />
                    </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-[#1c3a2b]">₹{item.price}</p>
                  </div>
                    <div className="flex items-center border-2 border-[rgba(139,125,107,0.2)] rounded-full overflow-hidden">
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-[#f5f0e8] transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <motion.span
                        key={item.quantity}
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        className="px-4 font-semibold"
                      >
                        {item.quantity}
                      </motion.span>
                      <motion.button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-[#f5f0e8] transition-colors"
                        whileTap={{ scale: 0.9 }}
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                    <motion.p
                      key={item.quantity}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="font-bold text-xl text-[#2a2a2a] w-24 text-right"
                    >
                      ₹{item.price * item.quantity}
                    </motion.p>
                    <motion.button
                      onClick={() => removeItem(item.id)}
                      className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-500"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 sticky top-24">
                <h2 className="font-semibold text-xl text-[#2a2a2a] mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#6b6560]">Subtotal</span>
                    <span className="font-semibold text-[#2a2a2a]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b6560]">Shipping</span>
                    <span className="font-semibold text-[#2a2a2a]">
                      {shipping === 0 ? 'FREE' : `₹${shipping}`}
                    </span>
                  </div>
                  {subtotal < 999 && (
                    <div className="p-3 bg-[#f5f0e8] rounded-xl text-sm text-[#6b6560]">
                      Add ₹{999 - subtotal} more for free shipping!
                    </div>
                  )}
                  <div className="border-t border-[rgba(139,125,107,0.1)] pt-4 flex justify-between">
                    <span className="font-semibold text-lg text-[#2a2a2a]">Total</span>
                    <span className="font-bold text-2xl text-[#1c3a2b]">₹{total}</span>
                  </div>
                </div>
                <GlowEffect glowColor="#1c3a2b" intensity={30}>
                  <Link to="/checkout">
                    <RippleButton className="w-full px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-3 mb-4 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                      Proceed to Checkout
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </RippleButton>
                  </Link>
                </GlowEffect>
                <Link
                  to="/products"
                  className="w-full px-8 py-4 bg-[#f5f0e8] hover:bg-[#e8dcc8] text-[#2a2a2a] rounded-full font-semibold transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
