import { Link } from 'react-router';
import { ArrowRight, Award, Leaf, Users, Heart, Wheat, Sprout, Hand, Package, User } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';
import { MagneticButton } from '../components/effects/MagneticButton';
import { GlowEffect } from '../components/effects/GlowEffect';
import { RippleButton } from '../components/effects/RippleButton';
import { ParallaxSection } from '../components/effects/ParallaxSection';
import { ScrollReveal } from '../components/animations/ScrollReveal';
import { StaggerChildren } from '../components/animations/StaggerChildren';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function OurStoryPage() {
  const timeline = [
    { year: '1995', title: 'The Beginning', description: 'Started with a small organic farm in the hills of Uttarakhand' },
    { year: '2000', title: 'First Certification', description: 'Received our first organic certification from National Standards' },
    { year: '2008', title: 'Expansion', description: 'Grew to 50+ acres of certified organic farmland' },
    { year: '2015', title: 'Recognition', description: 'Awarded Best Organic Producer by Ministry of Agriculture' },
    { year: '2024', title: 'Today', description: 'Serving 50,000+ families across India with pure organic products' },
  ];

  const values = [
    { icon: <Leaf className="w-8 h-8" />, title: 'Organic First', description: 'No chemicals, ever' },
    { icon: <Heart className="w-8 h-8" />, title: 'Tradition', description: 'Ancestral recipes preserved' },
    { icon: <Users className="w-8 h-8" />, title: 'Community', description: 'Supporting local farmers' },
    { icon: <Award className="w-8 h-8" />, title: 'Quality', description: 'Excellence in every jar' },
  ];

  const team = [
    { name: 'Ramesh Sharma', role: 'Founder & Chief Farmer', icon: Sprout },
    { name: 'Meera Devi', role: 'Traditional Recipe Expert', icon: Package },
    { name: 'Vikram Singh', role: 'Quality Control Head', icon: Award },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[580px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Himalayan terraced village farm"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,30,20,0.4)] via-[rgba(15,30,20,0.5)] to-[rgba(15,30,20,0.85)]" />
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-[rgba(212,165,51,0.4)] backdrop-blur-sm mb-8">
              <Leaf className="w-3.5 h-3.5 text-[#d4a533]" />
              <span className="text-[#d4a533] text-xs font-semibold tracking-[0.15em] uppercase">Est. 1995 · Doon Valley, Uttarakhand</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] mb-6 text-white max-w-4xl"
          >
            Three Decades of
            <br />
            <span className="text-[#d4a533]">Organic Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-white/75 max-w-2xl leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)' }}
          >
            From a small family farm to India's most trusted organic brand — a story of passion, purity, and purpose.
          </motion.p>
        </div>
      </section>

      {/* Story with images */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <ScrollReveal>
              <div>
                <p className="text-[#4a6741] text-sm font-semibold tracking-[0.12em] uppercase mb-4">Our Beginning</p>
                <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f] mb-6 leading-tight">Our Journey</h2>
                <div className="space-y-5 text-[#6b6560] leading-relaxed">
                  <p>
                    In 1995, Ramesh Sharma returned to his ancestral village in the Doon Valley with a vision: to revive
                    traditional organic farming practices that were being forgotten in the rush toward chemical agriculture.
                  </p>
                  <p>
                    What started as a small 5-acre farm has grown into a thriving 50+ acre organic ecosystem, but our
                    commitment to purity has never wavered. Every product we create follows the same time-tested recipes
                    passed down through generations.
                  </p>
                  <p>
                    We work directly with over 80 local farmers, helping them transition to organic practices and ensuring
                    fair compensation for their hard work. This isn't just a business — it's a mission.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1755353545156-ae3525d9b676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                    alt="Farmer woman harvesting herbs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                      alt="Green farm hills"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-lg">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1755353018072-a8c33e95503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                      alt="Harvesting vegetables"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <ParallaxSection speed={-0.2}>
        <section className="py-20 bg-[#f5f0e8]">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] mb-16 text-center">Our Milestones</h2>
            </ScrollReveal>
            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1c3a2b] via-[#d4a533] to-[#1c3a2b]" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div
                      className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <TiltCard tiltIntensity={8} scaleIntensity={1.02} shadowIntensity={0.2}>
                          <div className="inline-block glass-card rounded-2xl p-6 shadow-lg border-gradient">
                            <span className="text-[#d4a533] font-bold text-2xl block mb-2">{item.year}</span>
                            <h3 className="font-semibold text-xl text-[#2a2a2a] mb-2">{item.title}</h3>
                            <p className="text-[#6b6560]">{item.description}</p>
                          </div>
                        </TiltCard>
                      </div>
                      <div className="w-6 h-6 bg-[#d4a533] rounded-full border-4 border-white shadow-lg z-10" />
                      <div className="flex-1" />
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] mb-4 text-center">Our Values</h2>
            <p className="text-xl text-[#6b6560] mb-16 text-center max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </ScrollReveal>
          <StaggerChildren staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <TiltCard key={index} tiltIntensity={12} scaleIntensity={1.05} shadowIntensity={0.25}>
                  <div className="text-center group glass-card rounded-2xl p-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform">
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-xl text-[#2a2a2a] mb-2">{value.title}</h3>
                    <p className="text-[#6b6560]">{value.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Farm Process */}
      <section className="py-20 bg-gradient-to-b from-[rgba(245,241,237,0.5)] to-[#fdfcfb]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-[#2a2a2a] mb-8">Our Process</h2>
              <p className="text-xl text-[#6b6560]">
                From seed to jar, every step is carefully monitored to ensure the highest quality
              </p>
            </div>
          </ScrollReveal>
          <StaggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Organic Farming', icon: Sprout, description: 'No pesticides or chemicals, just natural nutrients' },
                { title: 'Hand Harvesting', icon: Hand, description: 'Carefully picked at peak ripeness' },
                { title: 'Traditional Methods', icon: Package, description: 'Recipes from our grandmothers\' kitchens' },
              ].map((step, index) => (
                <TiltCard key={index} tiltIntensity={10} scaleIntensity={1.03} shadowIntensity={0.25}>
                  <div className="glass-card rounded-3xl p-8 text-center shadow-lg group">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-xl text-[#2a2a2a] mb-3">{step.title}</h3>
                    <p className="text-[#6b6560]">{step.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#fdfcfb]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-[#1c2a1f] mb-3 text-center">Meet Our Team</h2>
            <p className="text-[#7a7570] mb-14 text-center max-w-2xl mx-auto">
              The passionate people behind every jar
            </p>
          </ScrollReveal>
          <StaggerChildren staggerDelay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: 'Ramesh Sharma',
                  role: 'Founder & Chief Farmer',
                  img: 'https://images.unsplash.com/photo-1763809678352-0f9ca8adb331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
                  initials: 'RS',
                },
                {
                  name: 'Meera Devi',
                  role: 'Traditional Recipe Expert',
                  img: 'https://images.unsplash.com/photo-1649509857227-f63b234545f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
                  initials: 'MD',
                },
                {
                  name: 'Vikram Singh',
                  role: 'Quality Control Head',
                  img: 'https://images.unsplash.com/photo-1686150569507-e41a64f92d68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
                  initials: 'VS',
                },
              ].map((member, index) => (
                <TiltCard key={index} tiltIntensity={8} scaleIntensity={1.03} shadowIntensity={0.2}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-[rgba(0,0,0,0.06)] text-center group">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <ImageWithFallback
                        src={member.img}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ filter: 'brightness(0.75) saturate(0.9)' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1c2a1f]/60 to-transparent" />
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#4a6741] to-[#5a7851] border-3 border-white flex items-center justify-center">
                        <span className="text-white font-bold">{member.initials}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-[#1c2a1f] mb-1">{member.name}</h3>
                      <p className="text-sm text-[#7a7570]">{member.role}</p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1772089003655-6b1fdbf74282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Tea plantation hills"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a2b]/85 to-[#4a6741]/70" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Join Our Organic Journey</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Experience the difference that three decades of expertise and tradition can make
            </p>
            <MagneticButton strength={0.3}>
              <GlowEffect glowColor="#d4a533" intensity={35}>
                <RippleButton className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#d4a533] to-[#b8902c] hover:from-[#e5b644] hover:to-[#c99a3d] text-white rounded-full font-semibold transition-all duration-500 shadow-[0_8px_30px_rgba(212,165,51,0.4)] hover:shadow-[0_12px_40px_rgba(212,165,51,0.5)] group">
                  <Link to="/products" className="flex items-center gap-3">
                    Shop Our Products
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </RippleButton>
              </GlowEffect>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
