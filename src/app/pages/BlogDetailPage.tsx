import { Link, useParams } from 'react-router';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowRight, Leaf, Package, Droplet, Mountain } from 'lucide-react';
import { motion } from 'motion/react';
import { TiltCard } from '../components/effects/TiltCard';

export function BlogDetailPage() {
  const { blogSlug } = useParams();

  const post = {
    title: 'The Benefits of Organic Eating: A Complete Guide',
    excerpt: 'Discover how switching to organic products can transform your health and well-being.',
    icon: Leaf,
    author: 'Dr. Anjali Gupta',
    authorBio: 'Nutritionist and organic food advocate with 15+ years of experience',
    date: 'March 20, 2024',
    readTime: '8 min read',
    category: 'Health & Wellness',
    content: [
      'Organic eating has become more than just a trend—it\'s a lifestyle choice that millions of people are making for their health and the environment. But what exactly makes organic food different, and why should you consider making the switch?',
      'In this comprehensive guide, we\'ll explore the science-backed benefits of organic eating and how it can positively impact your life.',
      '## What Makes Food Organic?',
      'Organic food is produced without synthetic pesticides, artificial fertilizers, genetic modification, or irradiation. Organic farming practices focus on sustainability, biodiversity, and natural processes.',
      '## Health Benefits',
      'Research has shown that organic foods often contain higher levels of certain nutrients, including antioxidants, vitamins, and minerals. They\'re also free from harmful pesticide residues that can accumulate in your body over time.',
      '### Reduced Exposure to Chemicals',
      'Conventional farming uses over 600 different pesticides. By choosing organic, you dramatically reduce your exposure to these potentially harmful chemicals.',
      '### Higher Nutritional Value',
      'Studies have found that organic crops can contain up to 69% more antioxidants than their conventional counterparts.',
      '## Environmental Impact',
      'Organic farming practices help preserve soil health, reduce water pollution, and promote biodiversity. By supporting organic agriculture, you\'re contributing to a more sustainable food system.',
      '## Making the Switch',
      'Transitioning to organic eating doesn\'t have to happen overnight. Start with the "Dirty Dozen"—the fruits and vegetables with the highest pesticide residues—and gradually expand your organic purchases.',
      '## Conclusion',
      'While organic food may cost slightly more, the investment in your health and the planet\'s future is invaluable. Every organic meal is a step toward a healthier you and a more sustainable world.',
    ],
  };

  const relatedPosts = [
    {
      title: 'Traditional Pickle Making',
      slug: 'traditional-pickle-making',
      icon: Package,
      date: 'March 18, 2024',
    },
    {
      title: 'Honey: Nature\'s Medicine',
      slug: 'honey-golden-medicine',
      icon: Droplet,
      date: 'March 15, 2024',
    },
    {
      title: 'Sustainable Farming',
      slug: 'sustainable-farming-himalayas',
      icon: Mountain,
      date: 'March 12, 2024',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#4a6741] to-[#5a7851] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold mb-6">
              {post.category}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">{post.title}</h1>
            <div className="flex items-center justify-center gap-6 text-[rgba(255,255,255,0.9)] mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 -mt-16 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-16 shadow-2xl aspect-video flex items-center justify-center">
            <div className="text-[250px]">{post.image}</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Share Buttons */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-[rgba(139,125,107,0.1)]">
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#6b6560]">Share:</span>
              <button className="p-2 rounded-full hover:bg-[#f5f0e8] transition-colors">
                <Facebook className="w-5 h-5 text-[#2a2a2a]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#f5f0e8] transition-colors">
                <Twitter className="w-5 h-5 text-[#2a2a2a]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#f5f0e8] transition-colors">
                <Linkedin className="w-5 h-5 text-[#2a2a2a]" />
              </button>
              <button className="p-2 rounded-full hover:bg-[#f5f0e8] transition-colors">
                <Share2 className="w-5 h-5 text-[#2a2a2a]" />
              </button>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="font-serif text-3xl text-[#2a2a2a] mt-12 mb-6">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              } else if (paragraph.startsWith('###')) {
                return (
                  <h3 key={index} className="font-serif text-2xl text-[#2a2a2a] mt-8 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              return (
                <p key={index} className="text-[#6b6560] leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-[#f5f0e8] rounded-3xl">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-[#4a6741] to-[#5a7851] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <User className="w-10 h-10 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-[#2a2a2a] mb-2">About {post.author}</h3>
                <p className="text-[#6b6560] leading-relaxed">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-[#2a2a2a] mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedPosts.map((relatedPost) => (
              <TiltCard key={relatedPost.slug} tiltIntensity={10} scaleIntensity={1.03} shadowIntensity={0.25}>
                <Link to={`/blog/${relatedPost.slug}`} className="group block">
                  <motion.div
                    className="glass-card rounded-3xl overflow-hidden shadow-lg"
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <div className="aspect-video bg-gradient-to-br from-[#4a6741] to-[#5a7851] flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#d4a533]/20 to-transparent"
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      />
                      <relatedPost.icon className="w-20 h-20 text-white/90 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" strokeWidth={1.5} />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-[#2a2a2a] mb-2 group-hover:text-[#4a6741] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#6b6560]">
                        <Calendar className="w-4 h-4" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </TiltCard>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1c3a2b] hover:bg-[#2a4a3b] text-white rounded-full font-semibold transition-colors"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
