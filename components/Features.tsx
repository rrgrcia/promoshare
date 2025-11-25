'use client';

import { motion } from 'framer-motion';
import { Users, Share2, BarChart3, Gift, Target, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Ambassador Recruitment',
    description: 'Identify and onboard your most passionate fans with automated recruitment tools and engagement scoring.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: Share2,
    title: 'Social Amplification',
    description: 'Empower ambassadors with shareable content, custom links, and rewards for driving social engagement.',
    gradient: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, ambassador activity, and ROI with comprehensive analytics dashboards.',
    gradient: 'from-fuchsia-500 to-pink-500',
  },
  {
    icon: Gift,
    title: 'Incentive Management',
    description: 'Create custom reward programs with automated tracking and fulfillment for top-performing ambassadors.',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    icon: Target,
    title: 'Campaign Targeting',
    description: 'Launch targeted campaigns based on demographics, interests, and engagement history for maximum impact.',
    gradient: 'from-rose-500 to-orange-500',
  },
  {
    icon: Sparkles,
    title: 'Smart Automation',
    description: 'Automate workflows, notifications, and reward distribution to scale your ambassador program effortlessly.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

export default function Features() {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Everything You Need to{' '}
            <span className="text-gradient">Scale Your Fanbase</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A complete platform to transform your superfans into a powerful marketing force
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 backdrop-blur-sm">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://promoshare.typeform.com/to/OQllUGDG?typeform-source=promoshare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-violet-500/25"
          >
            Explore All Features
          </a>
        </motion.div>
      </div>
    </div>
  );
}

