'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Heart, Lightbulb, Award, Linkedin, Mail } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We believe in the power of authentic fan connections to transform brand growth.',
  },
  {
    icon: Heart,
    title: 'Fan-First',
    description: 'Every feature we build puts fans and their passion at the center of the experience.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly push boundaries to create cutting-edge solutions for fan engagement.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We deliver exceptional results through dedication, expertise, and attention to detail.',
  },
];

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-display font-bold flex items-center justify-center gap-4">
              About 
              <img 
                src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/PromoShare-Fan-Activation-e172953501361106.png"
                alt="Promoshare"
                className="h-16 md:h-20 w-auto inline-block"
              />
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to revolutionize how brands connect with their most passionate advocates
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-display font-bold">Our Story</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Promoshare was born from a simple observation: brands were struggling to harness the authentic enthusiasm of their biggest fans. Traditional marketing felt impersonal, and social media advertising was becoming increasingly expensive and less effective.
                </p>
                <p>
                  We knew there had to be a better way—a way to turn genuine fan passion into measurable business results. That's when we created Promoshare: a platform that empowers superfans to become brand ambassadors, driving ticket sales, merchandise revenue, and event attendance through authentic advocacy.
                </p>
                <p>
                  Today, we're proud to serve hundreds of brands and tens of thousands of ambassadors, creating meaningful connections that benefit everyone involved.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-500/10">
                <img
                  src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/Frame-1984081054.png"
                  alt="Promoshare Platform"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-0.5">
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-violet-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The visionaries driving fan engagement forward
            </p>
          </motion.div>

          {/* Ernesto Pedroza */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-2xl opacity-30" />
                    <img
                      src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/1709261675034.jpg"
                      alt="Ernesto Pedroza"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-violet-500/30"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                      Ernesto Pedroza
                    </h3>
                    <p className="text-xl text-violet-400 font-semibold">
                      Co-Founder & Chief Executive Officer
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/ernesto-pedroza-0b3b3a100/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                      <a
                        href="mailto:ernesto@promoshare.com"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Mail className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="max-w-4xl space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Ernesto Pedroza is the key founder and CEO of PromoShare, a visionary leader passionate about revolutionizing fan engagement and fan-generated content (FGC) to impact sports and live events. With a deep understanding of technology, marketing and analytics, Ernesto has built PromoShare into a dynamic platform that connects sports, event brands, and artists with their most loyal supporters to drive engagement, commerce, and loyalty.
                    </p>
                    <p>
                      A seasoned entrepreneur, Ernesto previously founded Alta Vista Solutions, a marketing services production company that he scaled to over $20 million in revenue, and Don Coupon, a digital couponing platform tailored for the U.S. Hispanic market, which he successfully exited. His ability to identify market opportunities and build scalable solutions has made him a respected leader in the industry.
                    </p>
                    <p>
                      A problem-solver at heart, Ernesto thrives on taking on some of the hardest challenges and tackling them through technology and analytics. His innovative approach drives efficiency, growth, and meaningful connections in the industry.
                    </p>
                    <p>
                      Beyond his entrepreneurial pursuits, Ernesto is a devoted family man. He is married to Jenny and together they have three children: Natalie, Ernie Jr., and Max. He loves sports and cherishes watching his kids grow up on the diamond, court, and stage. His passion for sports, performance, and community fuels his drive to create meaningful experiences both in business and in life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lindsey Jordan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-2xl opacity-30" />
                    <img
                      src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/1705512507989.jpg"
                      alt="Lindsey Jordan"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-violet-500/30"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                      Lindsey Jordan
                    </h3>
                    <p className="text-xl text-violet-400 font-semibold">
                      Co-Founder & Chief Revenue Officer
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/lindsey-nealis-jordan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                      <a
                        href="mailto:lindsey@promoshare.com"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Mail className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="max-w-4xl space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Lindsey leads the company's collaborative efforts to drive business growth and forge meaningful partnerships. Her leadership fuels PromoShare's mission to revolutionize fan engagement through innovative, community-driven campaigns.
                    </p>
                    <p>
                      Before joining PromoShare, Lindsey spent 17 years with the Chicago White Sox, holding key roles in Community & Player Relations, Premium Seating, and Group Sales. Her deep expertise in the sports industry, combined with a talent for building partnerships and enhancing fan experiences, has positioned her as a leader in sports and entertainment marketing.
                    </p>
                    <p>
                      Lindsey earned a B.S. in Sports Communication Broadcast from Indiana University, where she also competed in Division I Field Hockey. She enjoys live music, outdoor adventures, and making memories with friends and fam. She lives outside of Chicago with her husband, Brian, and their 6-year-old daughter, Piper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Raymundo "Mundo" Ginez */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-2xl opacity-30" />
                    <img
                      src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/MundoG-1.png"
                      alt="Raymundo Mundo Ginez"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-violet-500/30"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                      Raymundo "Mundo" Ginez
                    </h3>
                    <p className="text-xl text-violet-400 font-semibold">
                      Co-Founder & Chief Technology Officer
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/mundo2u/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                      <a
                        href="mailto:mundo@promoshare.com"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Mail className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="max-w-4xl space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Mundo leads product development and innovation, ensuring seamless, engaging experiences for users. He focuses on aligning consumers, businesses, and industry leaders to identify opportunities and drive automated solutions that enhance fan engagement.
                    </p>
                    <p>
                      Mundo holds a Master of Science in Human-Computer Interaction from DePaul University and has over 15 years of experience in product development across industries including agriculture, fleet management, e-commerce, financial services, and healthcare. Passionate about human-centered design, he takes an agile, iterative approach to building and refining products that meet user needs.
                    </p>
                    <p>
                      When he's not deep in tech, Mundo is an amateur golfer, honing his swing alongside his son. And if he's not on the course, you'll find him in the kitchen, cooking up new recipes to share with family and friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Javier Castellano */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden backdrop-blur-sm">
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Photo */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-full blur-2xl opacity-30" />
                    <img
                      src="https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/1733152832680.jpg"
                      alt="Javier Castellano"
                      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-violet-500/30"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                      Javier Castellano
                    </h3>
                    <p className="text-xl text-violet-400 font-semibold">
                      Business Development and Strategy
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/javier-castellano/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                      <a
                        href="mailto:javier@promoshare.com"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-violet-600/20 border border-slate-700/50 hover:border-violet-500/50 flex items-center justify-center transition-all group"
                      >
                        <Mail className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                      </a>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="max-w-4xl space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      Javier drives growth at PromoShare by identifying strategic opportunities, forging key partnerships, and developing innovative approaches to expand the company's reach. He helps brands connect authentically with their audiences, creating impactful strategies that go beyond traditional marketing to foster meaningful, lasting engagement.
                    </p>
                    <p>
                      With over a decade of experience in brand strategy, fan engagement, and business development, Javier brings a wealth of expertise to his role, including eight years at Major League Baseball. There, he played a pivotal role in expanding the league's global reach and strengthening connections with multicultural audiences. His passion for baseball runs deep, both professionally and personally, as he values the sport's unique power to unite people and create lifelong memories.
                    </p>
                    <p>
                      Born and raised in Puerto Rico, Javier earned his MBA in Marketing from Universidad del Este. Outside of work, he enjoys traveling and spending quality time with his children, embracing new cultures and creating unforgettable experiences together. He believes travel broadens perspectives and strengthens family bonds, shaping the way he approaches both life and business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Investors Section */}
      <div className="py-20 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold">
              Our <span className="text-gradient">Investors</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Backed by world-class partners who believe in our vision
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { src: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/ddf308c5798a404d25779e5f3446f6fe.png', name: 'Illinois Innovation Venture Fund' },
              { src: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/aad4115b72ce0019cd8d90e228cbf674.png', name: 'Techstars' },
              { src: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/514a186d276b64c2777c95c419cde6c7.png', name: 'Bronze Valley' },
              { src: 'https://mocha-cdn.com/019abbe1-24a9-7fba-86ae-17ff5893f2a1/Qh27qpHl.png', name: 'DUX Capital' },
            ].map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <button className="relative group w-full cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl opacity-0 group-hover:opacity-75 blur transition duration-300" />
                  <div className="relative bg-white hover:bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-violet-400 p-6 md:p-8 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 h-32 md:h-40 flex items-center justify-center">
                    <img
                      src={investor.src}
                      alt={investor.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

