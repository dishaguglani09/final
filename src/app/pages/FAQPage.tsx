import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, MessageCircle, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerChildren } from '../components/animations/StaggerChildren';

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'Orders & Shipping',
      faqs: [
        {
          question: 'How long does shipping take?',
          answer:
            'We typically ship orders within 1-2 business days. Delivery takes 3-5 business days for most locations in India. Remote areas may take 7-10 days.',
        },
        {
          question: 'Do you offer free shipping?',
          answer:
            'Yes! We offer free shipping on all orders above ₹999. For orders below this amount, a shipping fee of ₹50 applies.',
        },
        {
          question: 'Can I track my order?',
          answer:
            'Absolutely! Once your order is dispatched, you\'ll receive a tracking number via email and SMS. You can use this to track your package in real-time.',
        },
        {
          question: 'Do you ship internationally?',
          answer:
            'Currently, we only ship within India. We\'re working on international shipping and will update our customers once it\'s available.',
        },
      ],
    },
    {
      category: 'Products & Quality',
      faqs: [
        {
          question: 'Are your products really organic?',
          answer:
            'Yes! All our products are certified organic by the National Organic Standards. We use no synthetic pesticides, chemical fertilizers, or GMOs.',
        },
        {
          question: 'What is the shelf life of your products?',
          answer:
            'Our products have a shelf life of 6-12 months depending on the item. Each product label clearly displays the manufacturing and expiry dates. Store in a cool, dry place for best results.',
        },
        {
          question: 'Do you use preservatives?',
          answer:
            'No artificial preservatives are used in any of our products. We use traditional preservation methods like salt, oil, and natural acids to ensure long shelf life.',
        },
        {
          question: 'Where do you source your ingredients?',
          answer:
            'All our ingredients are sourced from certified organic farms in Uttarakhand and neighboring Himalayan regions. We work directly with local farmers to ensure quality and fair prices.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      faqs: [
        {
          question: 'What is your return policy?',
          answer:
            'We accept returns within 7 days of delivery for unopened products. The product must be in its original packaging. Shipping costs for returns are borne by the customer unless the product is damaged or defective.',
        },
        {
          question: 'How do I initiate a return?',
          answer:
            'Contact our customer support team via email or WhatsApp with your order number and reason for return. We\'ll guide you through the process and provide a return shipping label if applicable.',
        },
        {
          question: 'When will I receive my refund?',
          answer:
            'Refunds are processed within 5-7 business days after we receive and inspect the returned product. The amount will be credited to your original payment method.',
        },
        {
          question: 'What if my product arrives damaged?',
          answer:
            'If your product arrives damaged, please contact us immediately with photos of the damage. We\'ll arrange for a replacement or full refund at no cost to you.',
        },
      ],
    },
    {
      category: 'Payment & Security',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit/debit cards, UPI, net banking, and cash on delivery (COD). All online payments are processed through secure, encrypted gateways.',
        },
        {
          question: 'Is my payment information secure?',
          answer:
            'Yes! We use industry-standard SSL encryption to protect your payment information. We never store your complete card details on our servers.',
        },
        {
          question: 'Do you offer COD?',
          answer:
            'Yes, cash on delivery is available for orders up to ₹5,000. A small COD fee may apply depending on your location.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#4a6741] to-[#5a7851] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-[rgba(255,255,255,0.9)] max-w-2xl mx-auto">
            Find answers to common questions about our organic products and services
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* FAQ Categories */}
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <ScrollReveal delay={categoryIndex * 0.1}>
                <h2 className="font-serif text-3xl text-[#2a2a2a] mb-6">{category.category}</h2>
              </ScrollReveal>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <ScrollReveal key={faqIndex} delay={faqIndex * 0.05}>
                      <div className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(245,240,232,0.3)] transition-colors"
                        >
                          <span className="font-semibold text-lg text-[#2a2a2a] pr-4">{faq.question}</span>
                          <ChevronDown
                            className={`w-6 h-6 text-[#4a6741] shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 text-[#6b6560] leading-relaxed">{faq.answer}</div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still Have Questions */}
          <ScrollReveal delay={0.2}>
            <div className="bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl p-12 text-white text-center mt-16">
              <h2 className="font-serif text-3xl mb-6">Still have questions?</h2>
              <p className="text-xl text-[rgba(255,255,255,0.9)] mb-8 max-w-2xl mx-auto">
                Our team is here to help. Reach out to us through any of these channels.
              </p>
              <StaggerChildren staggerDelay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <TiltCard tiltIntensity={8} scaleIntensity={1.03} shadowIntensity={0.2}>
                    <a
                      href="https://wa.me/919876543210"
                      className="block p-6 glass-modal rounded-2xl hover:bg-white/20 transition-colors"
                    >
                      <MessageCircle className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">Chat with us</p>
                    </a>
                  </TiltCard>
                  <TiltCard tiltIntensity={8} scaleIntensity={1.03} shadowIntensity={0.2}>
                    <Link
                      to="/contact"
                      className="block p-6 glass-modal rounded-2xl hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">hello@organicfarmfresh.com</p>
                    </Link>
                  </TiltCard>
                  <TiltCard tiltIntensity={8} scaleIntensity={1.03} shadowIntensity={0.2}>
                    <a
                      href="tel:+919876543210"
                      className="block p-6 glass-modal rounded-2xl hover:bg-white/20 transition-colors"
                    >
                      <Phone className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-[rgba(255,255,255,0.8)]">+91 98765 43210</p>
                    </a>
                  </TiltCard>
                </div>
              </StaggerChildren>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
