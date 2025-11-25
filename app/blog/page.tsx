'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    slug: 'leveraging-fan-power',
    title: 'Leveraging Fan Power: How Sports Teams Are Turning Fans into Brand Advocates and Content Creators',
    excerpt: 'Smart sports teams don\'t just attract fans—they turn them into brand advocates. Give them the tools to promote your brand, and they\'ll amplify your message louder than any ad campaign ever could.',
    date: 'June 7, 2024',
    image: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/blog-leveraging-fan-power-1-768x512.jpg',
  },
  {
    slug: 'enhancing-fan-generated-content-with-ai',
    title: 'Enhancing Fan-Generated Content With AI And Machine Learning: The Future Of Sports Marketing',
    excerpt: 'What if your fans created your best marketing content? AI-powered fan-generated content is revolutionizing sports marketing - find out how!',
    date: 'March 10, 2025',
    image: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/blog-enhancing-fan-content-with-ai-768x512.jpg',
  },
  {
    slug: 'championing-diversity-in-sports',
    title: 'Championing Diversity in Sports: How PromoShare is Empowering Teams to Activate Their Most Diverse Fan Communities',
    excerpt: 'What if your most diverse fans were your strongest ambassadors? PromoShare uses AI to help sports teams activate authentic fan communities for themed nights and special events.',
    date: 'March 9, 2025',
    image: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/blog-championing-diversity-768x512.jpg',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Insights, strategies, and stories from the world of fan engagement
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-violet-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 flex flex-col h-full">
                    {/* Featured Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-slate-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>

                      <h2 className="text-xl font-display font-bold text-white group-hover:text-gradient transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-violet-400 font-semibold group-hover:gap-3 gap-2 transition-all pt-4">
                        Read More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

