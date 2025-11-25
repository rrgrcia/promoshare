'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, TrendingUp, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-400 text-sm font-medium backdrop-blur-sm">
                Fan Activation Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              Turn Superfans Into{' '}
              <span className="text-gradient">Brand Ambassadors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              Empower your most passionate fans to drive ticket sales, merchandise revenue, and event attendance through authentic social media advocacy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://promoshare.typeform.com/to/OQllUGDG?typeform-source=promoshare.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-violet-500/25 flex items-center justify-center space-x-2"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=zyeQkTLa7Ec"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-all backdrop-blur-sm"
              >
                Watch Demo
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gradient">500K+</div>
                <div className="text-sm text-slate-500">Active Ambassadors</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gradient">2.5M+</div>
                <div className="text-sm text-slate-500">Social Reach</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-gradient">85%</div>
                <div className="text-sm text-slate-500">Conversion Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="gradient-border">
                <div className="gradient-border-content p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">Campaign Performance</h3>
                      <p className="text-sm text-slate-400">Real-time analytics</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Engagement Rate</span>
                        <span className="text-violet-400 font-semibold">94%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '94%' }}
                          transition={{ delay: 1, duration: 1 }}
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Ticket Sales</span>
                        <span className="text-violet-400 font-semibold">87%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '87%' }}
                          transition={{ delay: 1.2, duration: 1 }}
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Ambassador Growth</span>
                        <span className="text-violet-400 font-semibold">76%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '76%' }}
                          transition={{ delay: 1.4, duration: 1 }}
                          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-xl p-4 shadow-2xl shadow-violet-500/25"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-violet-200">New Ambassadors</div>
                    <div className="text-lg font-bold">+1,247</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-800 to-slate-900 border border-violet-500/20 rounded-xl p-4 shadow-2xl backdrop-blur-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Campaign ROI</div>
                    <div className="text-lg font-bold text-violet-400">385%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

