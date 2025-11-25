'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Share2, TrendingUp, Megaphone, Gift, BarChart } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Fan Activation Programs',
    description: 'Transform your most passionate fans into brand ambassadors with our comprehensive activation platform. Recruit, engage, and reward fans who drive real business results.',
    features: [
      'Automated ambassador recruitment',
      'Engagement scoring and analytics',
      'Customizable onboarding flows',
      'Community management tools',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Amplification',
    description: 'Amplify your brand message through authentic fan advocacy on social platforms. Provide ambassadors with shareable content and track their impact in real-time.',
    features: [
      'Content creation and distribution',
      'Unique tracking links per ambassador',
      'Multi-platform social integration',
      'Viral campaign orchestration',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Ticket & Merchandise Sales',
    description: 'Drive revenue growth through ambassador-led sales campaigns. Empower fans to sell tickets and merchandise while earning rewards for their efforts.',
    features: [
      'Commission-based incentives',
      'Automated sales tracking',
      'Inventory management integration',
      'Performance leaderboards',
    ],
  },
  {
    icon: Megaphone,
    title: 'Event Marketing',
    description: 'Maximize event attendance and engagement with targeted ambassador campaigns. Create buzz and drive ticket sales for concerts, games, and special events.',
    features: [
      'Pre-event promotion campaigns',
      'Day-of activation strategies',
      'Post-event engagement tracking',
      'Event-specific ambassador recruitment',
    ],
  },
  {
    icon: Gift,
    title: 'Rewards & Incentives',
    description: 'Motivate ambassadors with flexible reward programs tailored to your brand. From exclusive perks to monetary compensation, keep your advocates engaged.',
    features: [
      'Tiered reward structures',
      'Exclusive access and experiences',
      'Automated reward fulfillment',
      'Custom incentive programs',
    ],
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Make data-driven decisions with comprehensive analytics dashboards. Track ROI, measure campaign performance, and optimize your ambassador program.',
    features: [
      'Real-time performance metrics',
      'ROI calculation and tracking',
      'Custom report generation',
      'Predictive analytics insights',
    ],
  },
];

export default function Services() {
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
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions to activate, engage, and reward your brand ambassadors
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5 flex-shrink-0">
                        <div className="w-full h-full rounded-xl bg-slate-950 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-slate-800/30 border border-slate-700/30"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8 p-12 rounded-2xl bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 border border-violet-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Ready to Activate Your Superfans?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Let's discuss how Promoshare can help you build a thriving ambassador program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://promoshare.typeform.com/to/OQllUGDG?typeform-source=promoshare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-violet-500/25"
              >
                Schedule a Demo
              </a>
              <a
                href="/about"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-all backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

