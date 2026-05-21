import { useState } from 'react';
import { Link } from 'react-router';
import { Mail, Lock, User, Eye, EyeOff, Wheat, Droplet, Leaf } from 'lucide-react';
import { motion } from 'motion/react';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { TiltCard } from '../components/effects/TiltCard';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4a6741] to-[#5a7851] flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20"
          animate={{ rotate: [12, 18, 12], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Wheat className="w-64 h-64 text-white/30" strokeWidth={1} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20"
          animate={{ rotate: [-12, -18, -12], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Droplet className="w-48 h-48 text-white/30" strokeWidth={1} />
        </motion.div>
      </div>
      <TiltCard tiltIntensity={6} scaleIntensity={1.01} shadowIntensity={0.3}>
        <div className="max-w-md w-full glass-modal rounded-3xl shadow-2xl p-8 relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
              <Leaf className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-3xl text-[#2a2a2a] mb-2">
              {isLogin ? 'Welcome Back' : 'Join Us'}
            </h1>
            <p className="text-[#6b6560]">
              {isLogin ? 'Sign in to your organic journey' : 'Start your organic journey today'}
            </p>
          </div>

        <form className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b6560]" />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b6560]" />
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6b6560]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus-glow transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6b6560] hover:text-[#2a2a2a] transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-[#6b6560]" />
                <span className="text-[#6b6560]">Remember me</span>
              </label>
              <a href="#" className="text-[#1c3a2b] font-semibold hover:text-[#4a6741]">
                Forgot password?
              </a>
            </div>
          )}

          <MagneticButton strength={0.25}>
            <GlowEffect glowColor="#1c3a2b" intensity={30}>
              <RippleButton className="w-full px-8 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
                {isLogin ? 'Sign In' : 'Create Account'}
              </RippleButton>
            </GlowEffect>
          </MagneticButton>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[rgba(139,125,107,0.2)]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-[#6b6560]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <MagneticButton strength={0.15}>
              <RippleButton className="px-4 py-3 border-2 border-[rgba(139,125,107,0.2)] rounded-xl hover:bg-[#f5f0e8] transition-all font-semibold shadow-sm hover:shadow-md">
                Google
              </RippleButton>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <RippleButton className="px-4 py-3 border-2 border-[rgba(139,125,107,0.2)] rounded-xl hover:bg-[#f5f0e8] transition-all font-semibold shadow-sm hover:shadow-md">
                Facebook
              </RippleButton>
            </MagneticButton>
          </div>

          <p className="text-center text-sm text-[#6b6560]">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1c3a2b] font-semibold hover:text-[#4a6741] transition-colors"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </form>
        </div>
      </TiltCard>
    </div>
  );
}
