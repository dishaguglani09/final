import { MapPin, Phone, Mail, Clock, Send, Leaf } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TiltCard } from '../components/effects/TiltCard';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ScrollReveal } from '../components/animations/ScrollReveal';

export function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Doon Valley, Uttarakhand', 'India 248001'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['hello@organicfarmfresh.com', 'support@organicfarmfresh.com'],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed'],
    },
  ];

  const faqs = [
    {
      question: 'Do you ship pan-India?',
      answer: 'Yes! We deliver to all major cities across India with free shipping on orders above ₹999.',
    },
    {
      question: 'Are your products certified organic?',
      answer: 'Absolutely. All our products are certified organic by National Organic Standards.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy for unopened products. Customer satisfaction is our priority.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <div className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1755353545156-ae3525d9b676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Organic farm lifestyle"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/85 to-[#0d1f18]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.35)] backdrop-blur-sm mb-5">
              <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">We're Here to Help</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] text-white mb-3"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-white/70 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out with any questions or feedback.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-3xl text-[#2a2a2a] mb-6">Send Us a Message</h2>
              <form className="glass-card rounded-2xl p-8 space-y-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]">
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Order Support</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#2a2a2a] mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(139,125,107,0.2)] focus:outline-none focus:ring-2 focus:ring-[#1c3a2b]"
                />
              </div>
              <MagneticButton strength={0.25}>
                <GlowEffect glowColor="#1c3a2b" intensity={30}>
                  <RippleButton className="w-full px-10 py-5 bg-gradient-to-r from-[#1c3a2b] to-[#2a4a3b] hover:from-[#2a4a3b] hover:to-[#1c3a2b] text-white rounded-full font-semibold transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_8px_30px_rgba(28,58,43,0.3)] hover:shadow-[0_12px_40px_rgba(28,58,43,0.5)]">
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                    Send Message
                  </RippleButton>
                </GlowEffect>
              </MagneticButton>
            </form>
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="font-serif text-3xl text-[#2a2a2a] mb-6">Contact Information</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <TiltCard key={index} tiltIntensity={8} scaleIntensity={1.02} shadowIntensity={0.15}>
                    <div className="flex gap-4 glass-card rounded-2xl p-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-[#6b6560]">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>

              {/* Map */}
              <TiltCard tiltIntensity={10} scaleIntensity={1.02} shadowIntensity={0.25}>
                <div className="bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl p-12 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Visit Our Farm</h3>
                  <p className="text-[rgba(255,255,255,0.9)] mb-6">
                    Experience organic farming firsthand
                  </p>
                  <MagneticButton strength={0.2}>
                    <GlowEffect glowColor="#ffffff" intensity={25}>
                      <RippleButton className="px-8 py-4 bg-white text-[#4a6741] rounded-full font-semibold hover:bg-[#f5f0e8] transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105">
                        Get Directions
                      </RippleButton>
                    </GlowEffect>
                  </MagneticButton>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Preview */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card rounded-3xl p-12 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-3xl text-[#2a2a2a]">Frequently Asked Questions</h2>
              <Link
                to="/faq"
                className="text-[#1c3a2b] font-semibold hover:text-[#4a6741] transition-colors link-underline"
              >
                View All FAQs →
              </Link>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-6 border-b border-[rgba(139,125,107,0.1)] last:border-0">
                  <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2">{faq.question}</h3>
                  <p className="text-[#6b6560]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
